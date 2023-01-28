import React from 'react';
import "./index.scss"

const FirstSection = () => {
  return (
    <div className='firstSection'>
        <img src="https://preview.colorlib.com/theme/itlock/assets/img/hero/h1_hero1.jpg" alt="" />
        <div id='container'>
        <div className='firstSec'>
            <div className='textBox'>
            <h1>Best IT Solution in your city</h1>
            <div className='lineBox'></div>
            <p>Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity</p>
            <button>Find Out More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FirstSection