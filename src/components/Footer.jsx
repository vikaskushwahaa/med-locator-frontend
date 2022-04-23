import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import './ResultletterCSS.css';


const Container = styled.div`
    display: flex;
    // border: 1px solid red;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 18px;

`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 18px;
    cursor: pointer;

`;

const Right = styled.div`
    flex: 1;
    padding: 20px;

`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MedLoc</Logo>
                <Desc>We are a support team, we are helping those people having problems to find the treatment tablets for them. We help you to find your tablets (treatment tablets).</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Live chat</ListItem>
                    <ListItem>Female</ListItem>
                    <ListItem>Male</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room className="sym" style={{marginRight: "10px"}} />Koni Bilaspur
                </ContactItem>
                <ContactItem><Phone className="sym" style={{marginRight: "10px"}} />+91-1234567890
                </ContactItem>
                <ContactItem><MailOutline className="sym" style={{marginRight: "10px"}}/>contact@pluszone.com
                </ContactItem>
                <ContactItem>
                    Near by GGU campus
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer
