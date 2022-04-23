
import styled from "styled-components";
import { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import './loginScreen.css'
import ErrorMessage from "../../components/ErrorMessage";
import Navbar from "../../components/Navbar"
const axios = require('axios');



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),
    rgba(255, 255, 255, 0.2)), url("https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`;

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
// `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     font-size: 14px;
//     margin: 10px 0px;
//     padding: 10px;
// `;

// const Button = styled.button`
//     width: 40%;
//     border: none;
//     padding: 15px 20px;
//     background-color: teal;
//     color: white;
//     cursor: pointer;
//     margin-bottom: 10px;
// `;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 16px;
//     text-decoration: underline;
//     cursor: pointer;
// `;


const Login = () => {

    const [contactNo, setContactNo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(contactNo, password);
        
        try {
            
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };

            setLoading(true);

            const {data} = await axios.post(
                "http://localhost:7000/api/stores/storeLogin",
                {
                    contact_no: contactNo,
                    password: password
                },
                config
            );

            // console.log(data);

            const dat = JSON.stringify(data);
            console.log(data.contact_no);


            if (data.contact_no) {
                localStorage.setItem('token', data.contact_no)
                alert('Login successful')
                window.location.href = '/updateStock'
            } else {
                alert('Please check your username and password')
            }

            setLoading(false);

        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
        }

        
    }

    return (
        <div>
        <Navbar/>

        <Container>
            <Wrapper>   
                <Title>LOG IN</Title>
                <Form onSubmit={submitHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Contact No"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your Login details with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Wrapper>
        </Container>

        // <div className="loginContainer">
        //     {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            
        // </div>

        </div>
    )
}

export default Login
