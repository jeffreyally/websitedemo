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
            fontSize:'3rem'}}><i>OUR STORY</i></p>
                <div class="row row-cols-md-2 row-cols-lg-3 g-5 ">
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                        border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={GiantDonut} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={MiniWhisk} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={Sunflower} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={StandMixer} class="card-img-top" alt="..." style={{height:'300px', objectFit: 'cover'}} />
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={WeddingCookies} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={AnniversaryCookies} class="card-img-top" alt="..." style={{height:'300px'}} />
                            <div class="card-body">
                                <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}