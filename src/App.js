import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
function App() {
  return (
    <div className="App">

      
      
      <Header/>
      <img className="pfp" src={require("./images/CarolinaHeadshot.jpg")} />
      <div>
        <a className="column titles aboutMe" id="about-me">About Me</a>
        <div className="bio">
          <p>
              I am from Atlanta, GA and have been programming for one year. I am a dedicated and hard worker. Outside of programming I love to build computers,
              play soccer, and make new friends. I have been loving programming and am concentrating on getting a job in the Web Development field. Please checkout my projects 
              I have been working on at the Georgia Tech Full Stack Bootcamp.
            </p>
        </div>
        <a className="column titles work" id="work">Work</a>
      <div className="picCon">
     
        <Projects/>
      </div>
    
      <Footer/>
    </div>
  </div>


  );
}

export default App;
