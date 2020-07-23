import React from 'react';
import Tela from "./componentes/atomos/tela/Canvas";
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="header">~~Odd Paint~~</header>

     {/* BoxComandos */}
      <div className="toolbox left">
        <div className="group--comand">
        <i class="material-icons" data-comand="undo" title="Undo">undo</i>
        <i class="material-icons"data-comand="downloald" title="Downloald">save_alt</i>
        </div>
        <div className="group--formas">
        <i class="material-icons" data-comand="line" title="Linha">all_inclusive</i>
        <i class="material-icons" data-comand="rect" title="Quadrado">check_box_outline_blank</i>
        <i class="material-icons" data-comand="circel" title="Circulo">radio_button_unchecked</i>
        <i class="material-icons" data-comand="tri" title="Triangulo">terrain</i>
        </div>
        <div className="group--pinceis">
        <i class="material-icons" data-comand="pencil" title="Lapiz">edit_road</i>
        <i class="material-icons" data-comand="brush" title="Pincel">brush</i>
        <i class="material-icons" data-comand="erase" title="Borracha">texture</i>
        <i class="material-icons" data-comand="buckt" title="Balde"></i>
        </div>
{/* tamanha da linha refazer */}
        {/* <div className="group--tamanho-linha">
        <div class="linewidth" data-line-width="1" title="Um pixel" style={{width:1, heigth:1}}>.</div>
        </div>
        <div className="group--tamanho-linha">
        <div class="linewidth" data-line-width="2" title="Dois pixels" style={{width:2, heigth:2 }}>.</div>
        </div>
        <div className="group--tamanho-linha">
        <div class="linewidth" data-line-width="" title="Três pixels" style={{width:3, heigth:3 }}>.</div>
        </div>
        <div className="group--tamanho-linha">
        <div class="linewidth" data-line-width="4" title="Quatro pixels" >.</div>
        </div><div className="group--tamanho-linha">
        <div class="linewidth" data-line-width="5" title="Cinco pixels" >.</div> 
        </div>*/}

      </div>

       <Tela>
       
     </Tela>

                  {/* BoxCores */}
      <div className="toolbox rigth">
        <div className='group--amostras'>
          <div class="item" data-color="#1ebbd7">
            <div class="cores" style={{ background: "#1ebbd7"}}></div>
            </div>
            <div class="item" data-color="#ffdc73">
            <div class="cores" style={{background:"#ffdc73"}}></div>
            </div>
            <div class="item" data-color="	#ffbf00">
              <div class="cores" style={{background:"	#ffbf00"}}></div>
            </div>
            <div class="item" data-color="#dc6900">
            <div class="cores" style={{background:"#dc6900"}}></div>
            </div>
            
            <div class="item" data-color="#e0301e">
            <div class="cores" style={{ background: "	#e0301e"}}></div>
            </div>
            <div class="item" data-color="#74d600">
            <div class="cores" style={{background:"	#74d600"}}></div>
            </div>
            <div class="item" data-color="#028900">
            <div class="cores" style={{background:"#028900"}}></div>
            </div>
            <div class="item" data-color="	#602320">
              <div class="cores" style={{background:"	#602320"}}></div>
            </div>
            <div class="item" data-color="#453319">
            <div class="cores" style={{background:"#453319"}}></div>
            </div>
            <div class="item" data-color="#2c1f12">
            <div class="cores" style={{background:"#2c1f12"}}></div>
            </div>
            <div class="item" data-color="#0c0906">
            <div class="swatch" style={{background:"#ffffff"}}></div>
            </div>

          
        </div>

      </div>
      <footer>Odaraya mello - WbGl</footer>
    </div>
  );
}

export default App;
