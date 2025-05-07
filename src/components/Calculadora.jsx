import React from 'react'
import './style.css'
function Calculadora() {
  return (
    <div className='calculadora-container'>
      <h1>Calculadora Simples</h1>
      <div className='input'>
        <input type="number" placeholder="Digite o primeiro número" />
        <input type="number" placeholder="Digite o segundo número" />
      </div>
      <div>
        <button>Somar</button>
        <button>Subtrair</button>
        <button>Multiplicar</button>
        <button>Dividir</button>
      </div>
      <p>Resultado:</p>
    </div>
  )
}

export default Calculadora