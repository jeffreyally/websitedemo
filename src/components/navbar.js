import React from "react"

export const NavBar = () => {

    return (
        <>
        
    <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#FDC5F5' }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p class='BakedAndIced' style={{ fontFamily: ' Bebas Neue, cursive', marginBottom:'0' }}>Baked + Iced</p>
            <p class='ByArelys' style={{ fontFamily: 'Bebas Neue, cursive', textAlign: 'center',marginBottom:'0' }}>By Arelys</p>
          </div>

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <div class="container m-0">
            <div class="row">
              <div class="col-10 d-flex justify-content-center">
                <div class="navbar-nav">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg">
                        <div class="nav-item me-5">
                          <a href="#" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Home</a>
                        </div>
                      </div>
                      <div class="col-lg">
                        <div class="nav-item me-5">

                          <a  href="#" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Flavors</a>
                        </div>
                      </div>
                      <div class="col-lg">
                        <div class="nav-item me-5">

                          <a  href="#" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>About</a>
                        </div>
                      </div>
                      <div class="col-lg">
                        <div class="nav-item me-5">

                          <a target="_blank" href="https://docs.google.com/forms/d/13ZYYcn-7LddKho5vAF96bAXO83XJeNpk-uG9ZkFBHY8/edit" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}><u>Order</u></a>
                        </div>
                      </div>
                      <div class="col-lg">
                        <div class="nav-item me-5">

                          <a  href="#" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>





        </div>



      </div>

    </nav>

    
        </>
    )
}