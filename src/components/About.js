import React from 'react'
import image1 from './assets/img/about1.jpg'
import image2 from './assets/img/about2.jpg'

export default function About() {
    return (
        <div style={{height:"60vh"}} className='container d-flex gap-5 '>
            <div className="content fs-5 text-">
                <h2>More Information  <br />About The Best Beaches</h2>
                <p style={{color:'gray'}}>You can find the most beautiful and pleasant places at the best prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.</p>
            </div>
            <div className="image-1">
                <img style={{ height: "340px", width: "225px",marginTop:"50px" }} src={image1} alt="" />
            </div>
            <div className='image-2'>
                <img style={{ height: "440px", width: "300px" }} src={image2} alt="" />
            </div>
        </div>
    )
}
