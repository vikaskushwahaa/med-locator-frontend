import { Search, LocalHospitalOutlined, LocationOn, Navigation, AddIcCallOutlined, MoreHorizOutlined, FilterList } from '@material-ui/icons';
import styled from 'styled-components';
import './ResultletterCSS.css';
// const bootstrap = require('bootstrap');
import 'bootstrap'

const Container = styled.div`
    height: 100%;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    margin-top: 5px;
    background-color: red;
    position: fixed;
    top: 0;
    z-index: 3;
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


const Resultletter = (props) => {

    const url = "https://www.google.com/maps/search/?api=1&query="+props.name+ " " +props.address;

    return (
        <Container>
            {/* <InputContainer>
                <Input placeholder="Enter your medicine Name" />
                <Button>
                    <Search />
                </Button>
            </InputContainer> */}
            <div className="retable">
                {/* <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Contact No.</th>
                            <th>Map Direction</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Anil Medical Store</td>
                        <td>098261 24168</td>
                        <td>
                            <a href="https://goo.gl/maps/72u4RDauSFHAr8Uh6">Direction</a>
                        </td>
                        <td>599&#8377;</td>
                    </tr>
                </table> */}

                {/* <div> <FilterList className="filtrbtn"/> <span className="filtr">FILTERS</span></div> */}
                <div className="resultA" style={{marginBottom:20}}>
                    <table className="relayout" cellSpacing="0" cellPadding="0">
                        <tr>
                            <td className="lefttb"><LocalHospitalOutlined className="sym"/> <span>{props.name}</span></td>
                            <td className="righttbr"><span className="sym">&#8377; </span><span>{props.price};</span></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><LocationOn className="sym"/>{props.address}</td>
                            <td className="righttb"><Navigation className="sym"/> <a href={url}>Direction</a></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><AddIcCallOutlined className="sym"/> {props.contactNo}</td>
                            <td className="righttb"><MoreHorizOutlined className="sym"/> <a href="https://www.google.com/">In Stock</a></td>
                        </tr>
                    </table>
                    <div className="btnevent">
                        
                        <button className="mleft">Call</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Resultletter
