import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const SignIn = (props) => {
    var [datas,setDatas] = useState(props.data)

    const inputHandler = (e) =>{
        const {name,value} = e.target
        setDatas((data)=>({...datas,[name]:value}));
        console.log(datas)
    }

    const addValues = ()=>{
        if(props.method === "post"){
            console.log("Clicked");
            axios.post("http://localhost:8050/create",datas)
            .then((response)=>{
                console.log("data",response.data);
                alert("Succesfully added data")
            })
            .catch((err)=>console.log(err));
        }
        if(props.method==="put"){
            axios.put("http://localhost:8050/edit/"+datas._id,datas)
            .then((response)=>{
                console.log("put data "+response.data);
                alert("SUCCESS");
                window.location.reload(false);
            })
            .catch((err)=>{
                console.log(err);
            });
    }};

  return (
    <div>
        <h1>Student</h1>
        <TextField variant='standard' name="sname" value={datas.sname} label="Name" onChange={inputHandler}></TextField>
        <br></br>
        <TextField variant='standard' name="sgrade" value={datas.sgrade} label="Grade" onChange={inputHandler}></TextField>
        <br></br>
        <Button variant='text' onClick={addValues}>SUBMIT</Button>
    </div>
  )
}

export default SignIn