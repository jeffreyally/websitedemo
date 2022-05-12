import React from "react"
import spring from '../img/CarouselPics/spring.jpeg'
import springflowers from '../img/CarouselPics/springflowers.jpeg'
import babyshower from '../img/CarouselPics/babyshower.jpeg'
import wedding1 from '../img/CarouselPics/wedding1.jpeg'
import wedding2 from '../img/CarouselPics/wedding2.jpeg'


export const CookieCarousel = () => {

    return(
        <>
        <div id="carouselExampleInterval" class=" carousel slide carousel carousel-dark" data-bs-ride="carousel" >
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="90000" style={{ position: 'relative' }}>

						<div class="container">
							<div class="row">

								<div class="col-12 d-flex justify-content-center ">
									<img src={springflowers}class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">
							

								<div class="col-12 d-flex justify-content-center on your column div">
									<img src= {spring} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">
							

								<div class="col-12 d-flex justify-content-center on your column div">
									<img src= {babyshower} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">
							

								<div class="col-12 d-flex justify-content-center on your column div">
									<img src= {wedding1} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">
							

								<div class="col-12 d-flex justify-content-center on your column div">
									<img src= {wedding2} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
								</div>

							</div>
						</div>

					</div>

				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
									<span class="visually-hidden">Previous</span>
								</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
        </>
    )
}