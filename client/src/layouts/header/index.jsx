import React from 'react'
import { NavLink } from 'react-router-dom';
import "./index.scss";

export const Header = () => {
  return (
    <div id='container'>
        <div className='header'>
        <div className='leftBoxOfHeader'>
        <div className='imgBox'>
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
        </div>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/add-page"}>Add brand</NavLink>
            </li>
            <li>
                <NavLink to={"/wishlist-page"}>Wishlist</NavLink>
            </li>
        </ul>
        </div>
        <div className='rightBoxOfHeader'>
            <button>Free Quite</button>
            <div className='imgBox'>
                <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/headphones.svg" alt="" />
                <div className='textBox'>
                    <h4>Have any Question?</h4>
                    <h3>Call: 10 (78) 837 3647</h3>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
