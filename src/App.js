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
            I was intrested in coding and computers from an early age. Buidling PCs with my father and having a curiosity to find out more about technology made me want to seek out how to program and so I began coding in highschool.
            Learning Java and basic data structures. When COVID hit I decided to get back into coding where I started to learn Python before enrolling in the Georgia Tech Full Stack Web Dev Bootcamp and have been enjoynig it since.
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
