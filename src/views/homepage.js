import React from "react"
import fulllogo from '../img/Logos/fulllogo.jpeg'

export const HomePage = () => {
    return (
        <>
        <div className="container mt-4">
			<div  className="row">

				<div className="col-12 col-md-6 mb-1"  >

					<p className='didYouKnowTitle'style={{ fontFamily: 'Londrina Solid, cursive',  textAlign: 'center' }}>Did you know?</p>

					<p className='didYouKnowText'style={{
						fontFamily: 'Londrina Solid, cursive', 
						fontWeight: '300', textAlign: 'center'
					}}>National Cookie Day is <s>December 4th.</s> Haha, yeah right.</p>

					<br class="d-none d-lg-inline"></br>

					<p className='didYouKnowText' style={{
						fontFamily: 'Londrina Solid, cursive', 
						fontWeight: '300', textAlign: 'center'
					}}>National Cookie Day is when you're having a bad day, when you're looking to cheat on your diet, when the Heat win, con su cafecito en la mañana, etc.</p>



				</div>

				<div className="col-12 col-md-6 mb-1">
					<div className="row">
						<div className="col">

							<img src={fulllogo} style={{ maxWidth: '100%', }} />

						</div>
						

					</div>
					


				</div>
			</div>
      </div>
        </>
    )
}