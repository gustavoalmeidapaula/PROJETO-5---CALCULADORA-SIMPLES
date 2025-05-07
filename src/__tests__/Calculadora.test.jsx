import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculadora from '../components/Calculadora'

describe('Calculadora Simples', () => {
  test('Renderiza os inputs.', () => {
    render(<Calculadora />)
    const inputs = screen.getAllByPlaceholderText(/Número/i)
    expect(inputs.length).toBe(2)
  })

  test('Renderiza os botões.', () => {
    render(<Calculadora />)
    expect(screen.getByText('Somar')).toBeInTheDocument()
    expect(screen.getByText('Subtrair')).toBeInTheDocument()
    expect(screen.getByText('Multiplicar')).toBeInTheDocument()
    expect(screen.getByText('Dividir')).toBeInTheDocument()
  })

  test('Exibe o parágrafo de resultado.', () => {
    render(<Calculadora />)
    expect(screen.getByText(/Resultado:/i)).toBeInTheDocument()
  })
})