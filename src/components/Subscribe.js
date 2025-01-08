import React from 'react'
import sponsors1 from './assets/img/sponsors1.png'
import sponsors2 from './assets/img/sponsors2.png'
import sponsors3 from './assets/img/sponsors3.png'
import sponsors4 from './assets/img/sponsors4.png'
import sponsors5 from './assets/img/sponsors5.png'


export default function Subscribe() {
    return (
        <>
        <div className='d-flex flex-column gap-5'>

            <div className='text-center mt-5' style={{
                backgroundColor: "rgb(14 42 47)", margin: "20px 260px",height:"300px"
            }}>
                <h2 style={{margin:"20px 0px"}} className='mb-5'>Subscribe Out <br /> Newsletter</h2>
                <h6 className='mb-5'>Subscribe to our newsletter and get a special 30% discount.</h6>
                <input type="text" placeholder='Enter Email' />
                <button>Subscribe</button>
            </div>
            <div >
                <div class="sponsor__container container grid d-flex justify-content-center align-item-center mt-5 ">
                    <div class="sponsor__content mx-5" data-sr-id="18">
                        <img width={'150px'} src={sponsors1} alt="" class="sponsor__img" />
                    </div>
                    <div class="sponsor__content mx-5" data-sr-id="19">
                        <img width={'150px'} src={sponsors2} alt="" class="sponsor__img" />
                    </div>
                    <div class="sponsor__content mx-5" data-sr-id="20">
                        <img width={'150px'} src={sponsors3} alt="" class="sponsor__img" />
                    </div>
                    <div class="sponsor__content mx-5" data-sr-id="21">
                        <img width={'150px'} src={sponsors4} alt="" class="sponsor__img" />
                    </div>
                    <div class="sponsor__content mx-5" data-sr-id="22">
                        <img width={'150px'} src={sponsors5} alt="" class="sponsor__img" />
                    </div>
                </div>
            </div>
                </div>
        </>
    )
}
