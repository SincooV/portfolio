import CustomCursor from './assets/components/cursor'
import Navbar from './assets/components/navbar'
import './App.css'
import Contact from './assets/components/contact'
import NameSaver from './assets/components/yourname'
import Project from './assets/components/projects'
function App() {
  

  return (
    <>

  <CustomCursor></CustomCursor>
    <header>
         <Navbar></Navbar>
    </header> 
    <section>
    <main>
      <NameSaver></NameSaver>
    </main>
    </section>
    <section>
    <Project></Project>
    </section>
    <section href="contact" className='contact' id='contact'>
      
      <Contact></Contact>

    </section>

   
      
  
    
    
    </> 
      

  )
}

export default App
