import React, { useRef, useEffect, useState} from "react";

import "./canvas.css"

function Tela() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
      const canvas = canvasRef.current;

      const context = canvas.getContext("2d");
      context.scale(2,2);
      context.lineCap = "round";
      context.strokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;

    }, [])
    
  const stratDrawing = ({natEvent}) => {
    const {offsetX, offsetY} = natEvent;
    contextRef.currente.beigPath();
    contextRef.current.moveTo(offsetX, offsetY)
  }
   const finishDrawing = () =>{

   }
   const draw = () => {

   }


    
      return(
         
           <div>
            <canvas  width={1020} height={480}  style={{border:"1px solid black fill"}}
            // desenhando sem o layout; 
          onMouseDown = {stratDrawing}
          onMouseUp = {finishDrawing}
          onMouseMove = {draw}
          ref={canvasRef}
          />
          </div>
       
      );
    
}
   
    export default Tela;