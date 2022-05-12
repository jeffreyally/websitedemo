import React from 'react'
import AnniversaryCookies from '../img/AboutPagePics/AnniversaryCookies.jpeg'
import GiantDonut from '../img/AboutPagePics/GiantDonut.jpeg'
import MiniWhisk from '../img/AboutPagePics/MiniWhisk.jpeg'
import StandMixer from '../img/AboutPagePics/StandMixer.jpeg'
import Sunflower from '../img/AboutPagePics/Sunflower.jpeg'
import WeddingCookies from '../img/AboutPagePics/WeddingCookies.jpeg'




export const AboutPage = () => {

    return (
        <>
         <div class="container mb-5" >
                <br></br>
                <p class="text-center" style={{fontFamily:'Bubblegum Sans, cursive',
            fontSize:'3rem'}}><i >OUR STORY</i></p>
                <div class="row row-cols-md-2 row-cols-lg-3 g-5 ">
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                        border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={GiantDonut} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>My name is Arelys and I love both baking and eating desserts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={MiniWhisk} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>When the pandemic started my hours at work were reduced. This gave me more time to do what I love.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={Sunflower} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>With time I discovered that my favorite desserts to bake were cookies, and that it made me really happy to bake for others.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={StandMixer} class="card-img-top" alt="..." style={{height:'300px', objectFit: 'cover'}} />
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>After a few months, my brother got tired of seeing me struggle to mix everything by hand. So he bought my very first Kitchen Aid. Love you Marvin.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={WeddingCookies} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Later on that same year, my brother got married! The very first order made by Baked + Iced By Arelys was for his wedding. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={AnniversaryCookies} class="card-img-top" alt="..." style={{height:'300px'}} />
                            <div class="card-body">
                                <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Over the past two years, I've learned so much about myself and about baking. And now, I'm ready to share my cookies with you.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
           </>
    )
}