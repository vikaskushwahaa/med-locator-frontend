// import { Filter } from '@material-ui/icons';
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 700;
`;

const Desc = styled.p`
    font-size: 22px;
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-size: 18px;
`;

const FilterSizeOption = styled.option``;

const AddContainer =styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const AmountContainer =styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount =styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    width: 140px;
    height: 39px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: #c5f0c5;
        color: black;
    font-weight: 700;
        
    }
`;

const ProductP = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/7230192/pexels-photo-7230192.jpeg"></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>levothyroxine</Title>
                    <Desc>Levothyroxine is a thyroid medicine that replaces a hormone normally produced by your thyroid gland to regulate the body's energy and metabolism. Levothyroxine is used to treat hypothyroidism (low thyroid hormone). </Desc>
                    <Price>$ 50</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Dose
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            {/* <Products/> */}
            <Footer/>
        </Container>
    )
}

export default ProductP
