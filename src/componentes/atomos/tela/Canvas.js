import React, { useRef, useEffect, useState} from "react";
import "./canvas.css"

function Tela() {
  // hooks
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.strokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;

    }, [])
    
    // functions
  const stratDrawing = ({nativeEvent}) => {
    const{offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }
   const finishDrawing = () =>{
    contextRef.current.closePath()
    setIsDrawing(false)
   }
   const draw = ({nativeEvent}) => {
     if(!isDrawing){
       return
     }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke() 
   }
    
      return(
         
           <div>
            <canvas  width={1020} height={480}
            // desenhando sem ferramentas; 
                onMouseDown = {stratDrawing}
                onMouseUp = {finishDrawing}
                onMouseMove = {draw}
                ref={canvasRef}
              />
          </div>
       
      );
    
}
   
    export default Tela;