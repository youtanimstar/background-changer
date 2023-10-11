import { useState } from 'react'
import Color from './Color.jsx'
import "./index.css"


function App() {
  
  const data=["white", "black", "red", "green", "blue", "indigo", "pink", "aqua", "flestine", "gray", "yellow"];
  
  const [changeColor, setChangeColor] = useState("white");


  return (
    <>
      <div className={`container ${changeColor}`}>
        <ul className="color-bar">
          {
            data.map((item)=>{
              console.log(item);
              return <Color item={item} setChangeColor={setChangeColor}/>
            })
          }
          
          
        </ul>
      </div>
    </>
  )
}

export default App
