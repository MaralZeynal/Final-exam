import React from 'react';
import Cards from '../../components/cards';
import "./index.scss"

const SecondSection = () => {
  return (
    <div id='container'>
        <div className='secondSection'>
            <div className='topOfSecSec'>
                <p>INDUSTRY WE OFFER</p>
                <h1>Managed IT services customized for your industry</h1>
                <h2>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</h2>
            </div>
            <Cards/>
        </div>
    </div>
  )
}

export default SecondSection