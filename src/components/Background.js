import React from 'react'
import img from './assets/img/home1.jpg'

export default function Background() {
  return (
    <div>
        <img style={{
            "position": "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80vh",
            "object-fit": "cover",
            "object-position": "83%",
        }} src={img} alt="" />
    </div>
  )
}
