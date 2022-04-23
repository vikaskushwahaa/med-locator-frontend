import styled from "styled-components"
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),
    rgba(255, 255, 255, 0.2)), url("https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_960_720.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

// const Form = styled.form`
//     display: flex;
//     flex-wrap: wrap; 
// `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     font-size: 14px;
//     margin: 20px 10px 0px 0px;
//     padding: 10px;
// `;

// const Agreement = styled.span`
//     font-size: 18px;
//     margin: 20px 0px;

// `;

// const Button = styled.button`
//     width: 40%;
//     border: none;
//     padding: 15px 20px;
//     background-color: teal;
//     color: white;
//     cursor: pointer;
// `;

const Register = () => {

    const [contactNo, setContactNo] = useState("");
    const [nameOfStore, setNameOfStore] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setMessage("Passwords do not match");
        } else {
            setMessage(null);

            try{
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    },
                };

                setLoading(true);

                const { data } = await axios.post(
                    "http://localhost:7000/api/stores/storeRegister",
                    {
                        contact_no: contactNo,
                        password: password,
                        address: address,
                        name_of_store: nameOfStore
                    },
                    config
                );

                setLoading(false);

                localStorage.setItem("userInfo", JSON.stringify(data));

                console.log(data);
            }catch(error){
                setError(error.response.data.message);
            }
        }

        console.log(contactNo);
    }



    return (
        <Container>
            <Wrapper>
                <Title>CREAT AN ACCOUNT</Title>

                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3">
                        <Form.Label>Name of Store</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name of your store"
                            value={nameOfStore}
                            onChange={(e) => setNameOfStore(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter address of store"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Contact No"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            placeholder="Re-Enter your Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
