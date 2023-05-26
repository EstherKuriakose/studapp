import { Button,Table,TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SignIn from ' ./SignIn'

const Tablex = () => {
    var [stud,setstud]=useState([]);
    var [update,setUpdate]=useState(false);
    var[singleValue,setSingleValue]=useState([]);
   useEffect(()=>{
    axios.get("http://localhost:8050/see")
    .then((response)=>{
        setstud(response.data)
        console.log(response.data)    
    })
   },[])
   const deleteValue=(id)=>{
    console.log("delete id is",id);
    axios.delete(`http://localhost:8050/delete/${id}`)
    .then((response)=>{
        alert("deleted")
        window.location.reload(false)
    })
    .catch(err =>{console.log(err)})
   }
    const updateValue=(value)=>{
        console.log("clicked update button:",value)
        setSingleValue(value)
        setUpdate(true)
    }
    var finalJSX=<div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:"red", fontFamily:"cursive",fontSize:"30px" }}>Name</TableCell>
                    <TableCell style={{color:"red", fontFamily:"cursive",fontSize:"30px" }}>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {stud.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.sname}</TableCell>
                        
                            
                            <TableCell>{value.sgrade}</TableCell>
                            <TableCell> <Button onClick={()=>deleteValue(value._id)}>DELETE</Button></TableCell>
                            <TableCell> <Button onClick={()=>updateValue(value)}>UPDATE</Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            
        </Table>
    </TableContainer>
</div>
    if(update){
        finalJSX=<SignIn data= {singleValue}method='put'/>
    }
  return (
    finalJSX
    
  )
}

export default Tablex