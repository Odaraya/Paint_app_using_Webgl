import React from 'react';
import Tela from "./componentes/atomos/tela/Canvas";
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 className="header">~~Odd Paint~~</h1>

     {/* BoxComandos */}
      <div className="toolbox left">
        <div className="material-icons">
        <i class="material-icons">undo</i>
        <i class="material-icons">save_alt</i>
        </div>
        <div className="formas--group">
        <i class="material-icons">all_inclusive</i>
        <i class="material-icons">check_box_outline_blank</i>
        <i class="material-icons">radio_button_unchecked</i>
        <i class="material-icons">terrain</i>
        </div>
        <div className="pinceis--group">
        <i class="material-icons">edit_road</i>
        <i class="material-icons">brush</i>
        <i class="material-icons">texture</i>
        <i class="material-icons"></i>
        </div>

        {/* <div className="tamanho linha--group">
        <i class="material-icons"></i>
        </div> */}

      </div>

       <Tela>
       
     </Tela>

                  {/* BoxCores */}
      <div className="toolbox rigth">
        <div className='amostras--group'></div>

      </div>
    
    </div>
  );
}

export default App;
