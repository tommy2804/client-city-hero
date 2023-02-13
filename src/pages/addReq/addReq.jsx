import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { CleaningServices } from '@mui/icons-material';


const AddReq = () => {
    const [data, setdata] = useState({});
    const [loction, setLoction] = useState({});
    const [image, setImg] = useState();


    async function addReq(){
        await axios.post('http://localhost:4001/request/newRequest',{...data,loction,reqPhoto:image});
      }

    const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64
    reader.onloadend = () => {
        setImg(reader.result);
      };
    }


  return (<div style={{width:'60%', marginLeft:'15%'}}>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" onChange={(ev)=>setdata({...data,reqStreet:ev.target.value})} id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">reqStreet</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" onChange={(ev)=>setdata({...data,reStreetNum:ev.target.value})}  id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">reStreetNum</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" onChange={(ev)=>setdata({...data,reqDescription:ev.target.value})} id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">reqDescription</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" onChange={(ev)=>setdata({...data,reqTitle:ev.target.value})} id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">reqTitle</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" onChange={(ev)=>setLoction({...loction,lat:ev.target.value})} id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">lat</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" onChange={(ev)=>setLoction({...loction,lng:ev.target.value})} id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">lng</label>
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01" >Upload</label>
        <input type="file" class="form-control" id="inputGroupFile01" onChange={(e) => setImgUrl(e)}/>
    </div>
    <button className='btn btn-dark' onClick={()=>addReq()}>send</button>
  </div>);
};

export default AddReq;
