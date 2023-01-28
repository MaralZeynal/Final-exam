import React from 'react';
import Table from 'react-bootstrap/Table';
import {Helmet} from "react-helmet";
import "./index.scss"


const Wishlist = ({wishlists, setWishlists}) => {

    const handleRemoveById=(_id)=>{
        let remove=wishlists.filter((elem)=>elem._id !== _id)
        setWishlists(remove)
    }

  return (
<div id='container'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wishlist</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className='wishlistPage'>
        <h1>My wishlist</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Major</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Image</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {wishlists.map((el)=>{
        return(
        <tr>
          <td>{el.name}</td>
          <td>{el.major}</td>
          <td>{el.positon}</td>
          <td>{el.price}</td>
          <td>
          <img src={el.imgUrl} alt="" />
          </td>
          <td>
          <button onClick={()=>handleRemoveById(el._id)}>Remove</button>
          </td>
        </tr>
        )
    })}
      </tbody>
    </Table>
        </div>


</div>
  )
}

export default Wishlist