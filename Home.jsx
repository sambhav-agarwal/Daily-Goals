import React, { useState,useEffect } from "react";
import Tasks from "./Tasks"
const Home = ()=>
{
const initialArray = localStorage. getItem("tasks")
? JSON.parse(localStorage. getItem("tasks"))
: [];

    const[tasks,setTasks]=useState(initialArray);
    const[title,settitle]=useState("");
    const[description,setDescription]=useState("");

    const submitHandler = (e) =>
    {
        e.preventDefault();
        setTasks([...tasks,{title,description}]);
        settitle("");
        setDescription("");
    };
    
    const deleteTask=(index)=>
    {
        const filteredArr=tasks.filter((val,i)=>
        {
         return i !== index;
        })
        setTasks(filteredArr);
    };
    useEffect (() => {
        localStorage.setItem("tasks", JSON.stringify (tasks));
        }, [tasks]);
    return (
        <div className="container">
            <h1>DAILY GOALS</h1>
       <form onSubmit={submitHandler}>
       <input
        type="text" 
       placeholder="Title"
        value={title} 
        onChange={(e)=>settitle(e.target.value)}

        />
       <textarea 
       placeholder="Description"
        value={description} 
        onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
    <button type="submit">ADD</button>
       </form>
       {
       tasks.map((item,index) => (
         <Tasks
          key={index} 
          title={item.title} 
          description={item.description}
          deleteTask={deleteTask}
          index={index}
          />
       ))}
       </div>
    );
};
 export default Home;  