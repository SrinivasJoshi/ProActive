import timerImg from '../images/timer.png';
import eventImg from '../images/events.png';
import listImg from '../images/list.png';
import saveImg from '../images/save.png';
import musicImg from '../images/music.png';

const Features = () => {
    return ( 
        <div className="features">
            <h1>Features</h1>
            <div className="cards">
            <div className="card">
                <h1>Timer</h1>
                <img src={timerImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            <div className="card">
                <h1>Events</h1>
                <img src={eventImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            <div className="card">
                <h1>Listing</h1>
                <img src={listImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            <div className="card">
                <h1>Music</h1>
                <img src={musicImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            <div className="card">
                <h1>Saving</h1>
                <img src={saveImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            <div className="card">
                <h1>Saving</h1>
                <img src={saveImg} alt=""/>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered,
                    by injected humour, or randomised words which don't 
                    look even slightly believable
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default Features;