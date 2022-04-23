import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
`;

const Option = styled.option`
    font-size: 18px;

`;



const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>
                Life Changing Products
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected >Medicines</Option>
                        <Option>Capsule</Option>
                        <Option>Syrup</Option>
                        <Option>Tablet</Option>
                        <Option>Protin</Option>
                        <Option>Injection</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Dose</Option>
                        <Option>100ml</Option>
                        <Option>500ml</Option>
                        <Option>800ml</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option disabled selected>Dose</Option>
                        <Option>100ml</Option>
                        <Option>500ml</Option>
                        <Option>800ml</Option>
                    </Select>
                </Filter>   
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
