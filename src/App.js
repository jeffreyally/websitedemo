
import './App.css';
import {HomePage} from './views/homePage'
import {CookieCarousel} from './components/cookiecarousel'
import {Flavors} from './views/flavors'
import  {AboutPage} from './views/aboutPage'
import {ContactPage} from './views/contactPage'
import {NavBar} from './components/navbar'
import {Footer} from './components/footer'


function App() {
  return (
    <>
    
    
    <NavBar/>
    <HomePage/>
    <br></br>
		<hr/>
		<br></br>
    
		<CookieCarousel/>
			
		
    <br></br>
		<hr/>
		<br></br>
    <Flavors/>
    <br></br>
		<hr/>
		<br></br>
    <AboutPage/>
    <br></br>
		<hr/>
		<br></br>
    <ContactPage/>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>


    

   

  </>
 
  );
}

export default App;
