import React,{useState}  from 'react'
import './red.css';



const Red = () => {
    const [show, setshow]= useState('#ff0000')
    const boxStyle = {
        position: "absolute",
        height: "50vh",
        width: "50vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: `${show}`

    }
    return (
        <>
       
        <div className="block">
            <div className="hello">
                <h3>Hello</h3>
                <h3>Hello Hello</h3>
                <h3>Hello Hello Hello</h3>
                <h3>Hello Hello Hello Hello</h3>
            </div>
            <div className="inner__block" style={boxStyle}>
            </div>
            <button onClick={()=> setshow("#00ff00")}>Press</button>
        </div>
         </>
        
        
      
    )
}

export default Red
