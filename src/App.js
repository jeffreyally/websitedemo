
import './App.css';

function App() {
  return (
    <>
    {/*navbar start*/}
    <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FDC5F5' }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p class='BakedAndIced' style={{ fontFamily: ' Bebas Neue, cursive' }}>Baked + Iced</p>
            <p class='ByArelys' style={{ fontFamily: 'Bebas Neue, cursive', textAlign: 'center' }}>By Arelys</p>
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

    {/*navbar end*/}

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

  </>
 
  );
}

export default App;
