import React from "react";

function CaixaTool(){
    
    const setComand = (e) =>{
      console.log(e.target.getAttribute("datacomand"))
  }

  const setColor = (e) =>{
    console.log(e.target.getAttribute("[datacolor]"))
    console.log("[datacolor]")
  }

    return (
      <div className="">

      {/* BoxComandos */}
        <div className="toolbox left">
          <div className="group--comand">

          <i  className="material-icons" 
          onClick={(e) => { setComand (e)}} datacomand="undo" title="Undo">undo</i>

          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="downloald" title="Downloald">save_alt</i>
          </div>
          <div className="group--formas">
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="line" title="Linha">all_inclusive</i>
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="rect" title="Quadrado">check_box_outline_blank</i>
          <i  className="material-icons"  onClick={(e) => { setComand (e)}}datacomand="circel" title="Circulo">radio_button_unchecked</i>
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="tri" title="Triangulo">terrain</i>
          </div>
          <div className="group--pinceis">
          <i  className="material-icons"  onClick={(e) => { setComand (e)}} datacomand="pencil" title="Lapiz">edit_road</i>
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="brush" title="Pincel">brush</i>
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="erase" title="Borracha">texture</i>
          <i  className="material-icons" onClick={(e) => { setComand (e)}} datacomand="buckt" title="Balde"></i>
          </div>
          {/* tamanha da linha refazer 
          <div className="group--tamanho-linha">
          <div  className="linewidth" data-line-width="1" title="Um pixel" style={{width:1, heigth:1}}></div>
          </div>
          <div className="group--tamanho-linha">
          <div  className="linewidth" data-line-width="2" title="Dois pixels" style={{width:2, heigth:2 }}></div>
          </div>
          <div className="group--tamanho-linha">
          <div  className="linewidth" data-line-width="" title="Três pixels" style={{width:3, heigth:3 }}></div>
          </div>
          <div className="group--tamanho-linha">
          <div  className="linewidth" data-line-width="4" title="Quatro pixels" style={{width:3, heigth:3 }}></div>
          
          </div><div className="group--tamanho-linha">
          <div  className="linewidth" data-line-width="5" title="Cinco pixels" style={{width:3, heigth:3 }}></div>
          </div>*/} 
          
        </div>

        

                    {/* BoxCores */}
        <div className="toolbox rigth">

          <div className='group--amostras'>
            <div  className="item" 
            onClick={(e) => { setColor (e)}} datacolor="#1ebbd7">
              <div  className="cores" style={{ background: "#1ebbd7"}}></div>
              </div>


              <div  className="item" datacolor="#ffdc73">
              <div  className="cores" style={{background:"#ffdc73"}}></div>
              </div>
              <div  className="item" datacolor="	#ffbf00">
                <div  className="cores" style={{background:"	#ffbf00"}}></div>
              </div>
              <div  className="item" datacolor="#dc6900">
              <div  className="cores" style={{background:"#dc6900"}}></div>
              </div>
              
              <div  className="item" datacolor="#e0301e">
              <div  className="cores" style={{ background: "	#e0301e"}}></div>
              </div>
              <div  className="item" datacolor="#74d600">
              <div  className="cores" style={{background:"	#74d600"}}></div>
              </div>
              <div  className="item" datacolor="#028900">
              <div  className="cores" style={{background:"#028900"}}></div>
              </div>
              <div  className="item" datacolor="	#602320">
                <div  className="cores" style={{background:"	#602320"}}></div>
              </div>
              <div  className="item" datacolor="#453319">
              <div  className="cores" style={{background:"#453319"}}></div>
              </div>
              <div  className="item" datacolor="#2c1f12">
              <div  className="cores" style={{background:"#2c1f12"}}></div>
              </div>
              <div  className="item" datacolor="#0c0906">
              <div  className="swatch" style={{background:"#ffffff"}}></div>
              </div>
          </div>

        </div>

            <footer>Odaraya mello - WbGl</footer>

      </div>
    )
}

export default CaixaTool;