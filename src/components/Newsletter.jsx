import { Search } from '@material-ui/icons'
import styled from 'styled-components';
import SearchBar from './searchBar';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    margin-top: 5px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 18px;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Choose = styled.div`
    display: flex;
`;

const LabelB = styled.div`
    padding: 0 14px;
    height: 40px;
    width: 100px;
    line-height: 40px;
    border: 1px solid black;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    background-color: #96dffea3;
`;

const LabelS = styled.div`
    padding: 0 14px;
    height: 40px;
    width: 100px;
    line-height: 40px;
    border: 1px solid black;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    background-color: #2ece2e75;
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Search Your Medicine</Title>
            <Choose>

            </Choose>
            {/* <InputContainer>
            
                <Input placeholder="Enter your medicine Name"  />
                    <Button>
                        <Search/>
                    </Button>
            </InputContainer> */}
            <SearchBar/>

        </Container>
    );
};

export default Newsletter
