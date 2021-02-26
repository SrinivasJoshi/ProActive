import {useState} from 'react';
import timerImg from '../images/time-line.png';
import Navbar from './Navbar';
var timer;

var style1={
  display: 'none',
}
var temp={
    display:'inline-block',
}
const Timer = () => {
    let [style2, setStyle2] = useState({display:'inline-block',});
    let [hrs, setHrs] = useState(0);
    let [min, setMin] = useState(0);
    let [sec, setSec] = useState(0);
    let [disable, setdisable] = useState(false);
    // change functions
    const changeHrs = (e)=>{
        let temp1;
        temp1 =(e.target.value);
        console.log(temp1);
        if(temp1===''){
            setHrs(hrs=0)
        }
        else{
            setHrs(hrs=temp1)
        }    
    }
    const changeMins = (e)=>{
        let temp2;
        temp2 =(e.target.value);
        setMin(min=temp2);
    }
    const changeSecs = (e)=>{
        let temp3;
        temp3 =(e.target.value);
        setSec(sec=temp3);
    }



    // stopwatch side-1
    const reduceMin = ()=>{
        if(min===0){
            setMin(min=59)
            reduceHrs();
        }
        else{
            setMin(--min);
        }

    }
    // stopwatch side-2
    const reduceHrs = ()=>{
        setHrs(--hrs);
    }

    // stop the settimeout
    const stop = ()=>{
        clearInterval(timer);
        console.log('finished');
        setdisable(disable=true);

    }
    // stopwatch main function
    const stopWatch = ()=>{
        style1=temp;
        setStyle2(style2={...style2,display:"none"});

        timer = setInterval(() => {
            if(sec===0&&min===0&&hrs===0){
                stop();
            }
            else if(sec===0){
                setSec(sec=59);
                reduceMin();
            }
            else{
                setSec(--sec);
            }
        }, 1000);

    }
    const resetWatch = ()=>{
        window.location.reload();
    }


    // return 
    return ( 
        <div className="timer">
            <Navbar />
            <h1>Timer</h1>
            <img src={timerImg} alt=""/>
            <div className="input">
                <label htmlFor="Hours">Hours</label>
                <input type="number" onChange={changeHrs} disabled={disable}/>

                <label htmlFor="Minutes">Minutes</label>
                <input type="number" onChange={changeMins} disabled={disable}/>

                <label htmlFor="Seconds">Seconds</label>
                <input type="number" onChange={changeSecs} disabled={disable}/>
            </div>
            
            <p><span>{hrs}</span> : <span>{min}</span> : <span>{sec}</span></p>
            <button onClick={stopWatch} style={style2} className="startbtn">START</button>
            <div className="btns">
                <button style={style1} className="reset" onClick={resetWatch}>Reset</button>
            </div>
            
        </div>
     );
}
 
export default Timer;