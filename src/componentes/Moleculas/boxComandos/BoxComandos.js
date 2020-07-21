import React from "react";
import "./boxcomandos.css"

function BoxComandos(){

    return(
        <div className="toolbox left">
        <div className="material-icons">
        <i class="material-icons">undo</i>
        </div>
        <div className="formas--group">
        <i class="material-icons"></i>
        </div>
        <div className="pinceis--group">
        <i class="material-icons"></i>
        </div>
        <div className="tamanho linha--group">
        <i class="material-icons"></i>
        </div>
      </div>
    )
}
export default BoxComandos();