import React, {useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Certifcation,

} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    //const [mode, setMode] = useState<string>('dark');

    

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container`}>
        <Navigation />
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Certifcation/>
            <Contact/>
        </FadeIn>
       
    </div>
    );
}

export default App;