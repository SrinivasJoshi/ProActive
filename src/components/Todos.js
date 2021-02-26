import binBtn from '../images/binBtn.png';
import addBtn from '../images/addBtn.png';
import Navbar from './Navbar'
import { useState } from 'react';

const Todos = () => {
    // hooks
    
    var tempList=[];
    var delArr = [];
    let [todos, setTodos] = useState([]);
    let [inputVal, setInputVal] = useState('');
    let [mainList, setmainList] = useState();

    // functions
    const storeVal = (e)=>{
        setInputVal(inputVal=e.target.value);
    }
    const changeStyle = (e)=>{
        if(e.target.className==='withoutstrike'){
            e.target.className='withstrike';
        }
        else {
            e.target.className='withoutstrike';
        }
    }
    const deleteTodo = (e)=>{
       let  deleteEle=(e.target.parentNode.children[0].innerText);
       delArr=todos.filter((ele)=>{
           return (ele!==deleteEle)
       })
       setTodos(todos=[...delArr]);
       updateList();
    }
    const updateList = ()=>{
        tempList=[...todos]
        setmainList(mainList=tempList.map((ele,i)=>{
           return(
               <div className="task" key={i}>
                   <li className={"withoutstrike"} onClick={changeStyle}>{ele}</li>
                   <img src={binBtn} onClick={deleteTodo}/>
               </div>
           )
        }))
    }
    const addTodo = ()=>{
        let temp = inputVal;
        setInputVal(inputVal='');
        setTodos(todos=[...todos,temp]);
        updateList();
    }

    // return statement
    return ( 
        <div className="todos">
            <Navbar />
            <h1>Your Todo-List</h1>
            <div className="input-todo">
                <input type="text" placeholder="Ex : walk your dog" onChange={storeVal} value={inputVal}/>
                <img src={addBtn} alt="add todo" onClick={addTodo}/>
            </div>
            <div className="list">
                {mainList}
            </div>
        </div>
     );
}
 
export default Todos;