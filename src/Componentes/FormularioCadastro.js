import React, { Component } from 'react';

import Botao from './Botao';

class FormularioCadastro extends Component {
  render() {
    return (
      <div className="formulario">
        <input type="Text" placeholder= "Nome"/>
        <input type="Text" placeholder= "Email"/>
        <input type="Text" placeholder= "Nome"/>
        <input type="Text" placeholder= "Nome"/>
        <Botao texto="Cadastrar"/>
      </div>
    );
  }
}

export default FormularioCadastro;
