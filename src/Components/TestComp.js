import React,{useState,useEffect} from 'react';
import axios from 'axios';

const TestComp=()=>{
const [data,setData]=useState({gdata:[]});


useEffect(()=>{
    axios.get(`http://65.0.29.154:5000/test`).then(
        res=>{
            setData({gdata:res.data})
        }
    ).catch(error=>{
        console.log(error);
    })
},[])

    return(

        <>
<h1>{data.gdata.data}</h1>
<h1>{data.gdata.data}</h1>

        </>
    )



}
export default TestComp;