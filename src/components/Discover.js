import React from 'react'
import discover1 from './assets/img/discover1.jpg'
import discover4 from './assets/img/discover4.jpg'
import discover2 from './assets/img/discover2.jpg'
import experience1 from './assets/img/experience1.jpg'
import experience2 from './assets/img/experience2.jpg'
import video from './assets/video/video.mp4'

export default function Discover() {
    return (
        <div className='mt-5' d-flex flex-column>
            <div style={{height:"70vh"}}>
                <h2 className='text-center'>Discover The Most <br />Attractive Places</h2>
                <div className='cards d-flex justify-content-center gap-5 mt-5'>
                    <div
                        style={{
                            backgroundImage: `url(${discover4})`,
                            backgroundSize: 'cover', // Optional, to make the image cover the entire div
                            backgroundPosition: 'center', // Optional, to center the image
                            height: '300px', // Optional, set a height for the div
                            width: '225px', // Optional, set width to 100%
                            marginTop: "30px",
                            position: "relative"
                        }}

                    >
                        <div style={{ position: "absolute", left: '5px', bottom: "10px", zIndex: "10", fontWeight: "bolder" }}>

                            <h4>Whitehaven</h4>
                            <h6>32 tours available</h6>
                        </div>
                        {/* Other content inside the div can go here */}
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${discover1})`,
                            backgroundSize: 'cover', // Optional, to make the image cover the entire div
                            backgroundPosition: 'center', // Optional, to center the image
                            height: '350px', // Optional, set a height for the div
                            width: '225px', // Optional, set width to 100%
                            position: "relative"
                        }}
                    >
                        <div style={{ position: "absolute", left: '5px', bottom: "10px", zIndex: "10", fontWeight: "bolder" }}>

                            <h4>Bali</h4>
                            <h6>32 tours available</h6>
                        </div>
                        {/* Other content inside the div can go here */}
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${discover2})`,
                            backgroundSize: 'cover', // Optional, to make the image cover the entire div
                            backgroundPosition: 'center', // Optional, to center the image
                            height: '300px', // Optional, set a height for the div
                            width: '225px', // Optional, set width to 100%
                            marginTop: "30px",
                            position: "relative"
                        }}
                    >
                        <div style={{ position: "absolute", left: '5px', bottom: "10px", zIndex: "10", fontWeight: "bolder" }}>

                            <h4>Havali</h4>
                            <h6>32 tours available</h6>
                        </div>
                        {/* Other content inside the div can go here */}
                    </div>
                </div>
            </div>
            <div style={{height:'90vh'}} className='experience mt-5 text-center'>
                        <h2 className='text-center'>With Our Experience <br /> We Will Serve You</h2>
                        <div className='d-flex justify-content-center align-items-center gap-5 mt-5'>

                        <h4><b>20</b> Year Experience</h4>
                        <h4><b>75</b> Complete Tours</h4>
                        <h4><b>650+</b> Tourist Destination</h4>
                        </div>

                        <div className="images position-relative mt-5">
                            <div className="img-1 position-relative z-index-1"> <img src={experience1} alt="" /></div>
                            <div style={{top:'200px',left:'800px'}} className="img-2 position-absolute z-index-2 "> <img height={'300px'} width={'200px'} src={experience2} alt="" /></div>
                        </div>
                        
            </div>
            <div style={{height:"80vh"}} className='video-tour d-flex flex-column align-items-center gap-5'>
                <div><h2>Video Tour</h2></div>
                <div><p className='fs-5'>Find out more with our video of the most beautiful and <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pleasant places for you and your family.</p></div>
                <div><video width={'700px'} muted autoPlay loop src={video}></video></div>
            </div>
        </div>
    )
}
