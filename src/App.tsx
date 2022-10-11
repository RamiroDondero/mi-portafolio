
import { Footer } from './footer/Footer';
import { Menu } from './menu/Menu';
import { Skills, AboutMe, MyWork } from './secciones';



function App() {
 

  return (
    <div className="App">
      <div>
        <Menu/>
        <AboutMe/>  
        <Skills/>
        <MyWork/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

