import music2 from '../music/music-2.mp3';
import music1 from '../music/music-1.mp3';
import music3 from '../music/music-3.mp3';
import music4 from '../music/music-4.mp3';
import Navbar from './Navbar';
import {useState} from 'react';

const Welcome = () => {
    let [source, setSrc] = useState(music1);

    const changeMusic = (e)=>{
        let temp = e.target.value;
        if(e.target.value==='music1')
        {
        setSrc(source=music1);
        }
        else if(e.target.value==='music2')
        {
            setSrc(source=music2)
        }
        else if(e.target.value==='music3')
        {
            setSrc(source=music3)
        }
        else if(e.target.value==='music4')
        {
            setSrc(source=music4)
        }
    }
    return ( 
        <div className="welcome">
            <Navbar />
            <div className="open">
                <h1>Welcome To Home Page</h1>
                <p>The two most powerful warriors are Patience and Time </p>
            </div>

            <div className="musicPart">
                <h3>Want to listen to some calm music ?</h3>
                <audio controls src={source} type="audio/mpeg" controlsList="nodownload"></audio>
                <select name="music" id="music" onChange={changeMusic}>
                    <option value="music1">music1</option>
                    <option value="music2">music2</option>
                    <option value="music3">music3</option>
                    <option value="music4">music4</option>
                    <option value="music5">music5</option>
                </select>
            </div>
        </div>
     );
}
 
export default Welcome;