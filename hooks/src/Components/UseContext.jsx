
import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

const[text,setText] = useState(false)
const[likes,setLikes] = useState(0)

useEffect(()=>{
    alert("Content has been added")

},[text])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    width:"70vw",
    margin:"2rem",
}

  return(
    <div style={themeStyle}>
    {text &&
     <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus labore ad quia, nulla accusamus soluta quam qui praesentium voluptatum laboriosam natus cum ea maxime eos repellat, facere assumenda molestias? Aperiam?</h3>
      }
    <button onClick={()=>setText(!text)} >CONTENT</button>
      <h1>{likes}</h1>
    <button onClick={()=>{setLikes((prev)=>prev+1)}}>LIKE</button>
    </div>
  )
}

export default UseContext;