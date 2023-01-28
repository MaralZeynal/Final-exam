import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./index.scss";
import { Link } from 'react-router-dom';


const FourthSection = ({wishlists, setWishlists}) => {
    const [brands, setBrands] = useState()
    const [toggle, setToggle] = useState(true)

    const getData=async ()=>{
        let response= await axios.get(`http://localhost:8080/brands`)
        setBrands(response.data)
    }

    useEffect(() => {
    getData()
    }, [])

    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8080/brands/${_id}`).then(()=>
        axios.get(`http://localhost:8080/brands`).then((res)=>setBrands(res.data)))
    }

    const handleSort=()=>{
        setToggle(!toggle)
        if(toggle){
            axios.get(`http://localhost:8080/brands`).then((res)=>{
                let sortedData=res.data.sort((a,b)=>a.price-b.price)
                setBrands(sortedData)
            })
        }else{
            getData()
        }
    }

    const handleSearch=(e)=>{
        axios.get(`http://localhost:8080/brands`).then((res)=>{
            let searchByName = res.data.filter((el)=>el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            setBrands(searchByName)
        }
    )}
    
    const handleAddToWishlist=(obj)=>{
        if(!wishlists.find((elem)=> elem._id === obj._id)){
            setWishlists([...wishlists, obj])
        }else{
            alert("Added to wishlist!")
        }
    }

  return (
    <div id='container'>
        <div className='fourthSection'>
            <div className='topOfFourthSection'>
                <p>OUR CASE STUDY</p>
                <h1>We work with global brands</h1>
                <div className='inputBox'>
                <input type="text" onChange={(e)=>handleSearch(e)} placeholder="Search by name..."/>
                <button onClick={()=>handleSort()}>Sort by Price</button>
                </div>
            </div>
            <div className='bottomOfFourthSection'>
                {brands?.map((element)=>{
                    return(
                        <div className='onecard'>
                            <Link to={`/home-page/${element._id}`}>
                            <img src={element.imgUrl} alt="" />
                            </Link>
                            <div className='bottomOfCard'>
                            <h1>{element.name}</h1>
                            <h3>{element.major}</h3>
                            <p>{element.positon}</p>
                            <p>${element.price}</p>
                            <button onClick={()=>handleDelete(element._id)}>Delete</button>
                            <button onClick={()=>handleAddToWishlist(element)} className="wishBtn">{(wishlists.find((elem)=> elem._id === element._id)
                            ? "Added" : "Add to wishlist")}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FourthSection