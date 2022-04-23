import React, { useState } from 'react';
import Axios from 'axios';
import styles from './EditFormCss.module.css';
import Navbar from '../../components/Navbar';
// import Announcement from './Announcement';

const PostForm =()=> {
    const url = ""
    const [data, setData] = useState({
        // name: "",
        // date: "",
        // iduser: "",
        medname: "",
        medinfo: "",
        medprice: "",
        medname2: "",
        medinfo2: "",
        medprice2: ""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            // name: data.name,
            // date: data.date,
            // iduser: data.iduser,
            medname: data.medname,
            medinfo: data.medinfo,
            medprice: data.medprice,
            medname2: data.medname2,
            medinfo2: data.medinfo2,
            medprice2: data.medprice2
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div className='updatestk'>
            {/* <Announcement /> */}
            <Navbar />
            <form className={styles.frm} onSubmit={(e) => submit(e)}>
                {/* <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text" />
                <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="date" type="date" />
                <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number" />
                <br />
                <button>submit</button>
                <br />
                <br /> */}
                <table >
                    <tr className={styles.firsth}>
                        <th>Medicine Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr className={styles.trr}>
                        <td><textarea name="medname" onChange={(e) => handle(e)} value={data.medname} id="medname" cols="17" rows="3" ></textarea></td>
                        <td><input type="number" className={styles.tdd} name="medquantity" id="medinfo" onChange={(e) => handle(e)} value={data.medinfo} /></td>
                        <td><input type="number" className={styles.tdd} name="medprice" id="medprice" onChange={(e) => handle(e)} value={data.medprice} /></td>
                    </tr>
                    <tr className={styles.trr}> 
                        <td><textarea name="medname2" onChange={(e) => handle(e)} value={data.medname2} id="medname2" cols="17" rows="3" ></textarea></td>
                        <td><input type="number" className={styles.tdd} name="medquantity" id="medinfo2" onChange={(e) => handle(e)} value={data.medinfo2} /></td>
                        <td><input type="number" className={styles.tdd} name="medprice2" id="medprice2" onChange={(e) => handle(e)} value={data.medprice2} /></td>
                    </tr>
                </table><br />
                <button type="submit" className={styles.btnn}>Add New</button>
            </form>
        </div>
    );
}

export default PostForm;