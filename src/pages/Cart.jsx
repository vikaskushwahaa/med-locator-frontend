import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type ==="filled" && "none"};
    background-color: ${(props)=>
    props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    width: 30%;
    height: 30%;
`;

const Details = styled.div`
    
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const ProductSize = styled.span`

`;

const ProductColor = styled.div`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    
`;


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Medicine</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Capsule (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/7526074/pexels-photo-7526074.jpeg"/>
                                <Details>
                                    <ProductName><b>Medicine:</b> Diabetes tablets</ProductName>
                                    <ProductId><b>ID:</b> 4532</ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>MG:</b> </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                Price
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart
