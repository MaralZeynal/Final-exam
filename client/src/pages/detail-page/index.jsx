import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import "./index.scss";
import {Helmet} from "react-helmet";


const DetailPage = () => {
    const [detail, setDetail] = useState([])
    const {_id} = useParams()
    const navigate = useNavigate()

    const getData=async ()=>{
        let response= await axios.get(`http://localhost:8080/brands/${_id}`)
        setDetail(response.data)
    }

    useEffect(() => {
    getData()
    }, [])

    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8080/brands/${_id}`)
        navigate("/")
    }

  return (
    <div id='container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detail</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className='detailPage'>
            <div className='leftBox'>
            <h1>{detail.name}</h1>
            <h3>{detail.major}</h3>
            <p>{detail.positon}</p>
            <p>{detail.price}</p>
            <div className='btnBox'>
            <button onClick={()=>navigate("/")}>Back</button>
            <button onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
            </div>
            <div className='rightBox'>
                <img src={detail.imgUrl} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DetailPage