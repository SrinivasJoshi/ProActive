import mainHome from '../images/main-home.png';
import {useSpring, animated,useTransition} from 'react-spring';

const Home = () => {
    const props1 = useSpring({opacity: 1, from: {opacity: 0},config :{duration:1200}});
    const props2 = useSpring({marginLeft: 0, from: {marginLeft: -500},config :{duration:1000 ,mass:1000,friction:200}});

    return ( 
        <div className="home">
            <nav></nav>
            
           <div className="paras" >
                <animated.div style={props1}><h1>Welcome To <br/>ProActive</h1></animated.div>
                <animated.div style={props1}><p>We help you stay creative and get organized </p></animated.div>
                <animated.div style={props1}><p><strong>#NotJustATodoApp</strong></p></animated.div>
           </div>
            
           <button id="getStarted"><a href="/welcome">Get Started</a></button>
            
            <animated.div style={props1}><img src={mainHome} alt=""/></animated.div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f3d56" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,208C840,245,960,267,1080,240C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
     );
}
 
export default Home;