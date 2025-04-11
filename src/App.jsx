import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  const Formulario = () => {

    return (
      <>
      <h3>Formulário</h3>
      <br>
      <input
        className="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        type="text" />

      <button
        className="botao"
        onClick={()=>{
          alert('O nome digitado foi ' + nome)
        }
        }
      >
        CLIQUE AQUI
      </button>
</br>
      </>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2D</h3>

      <Formulario />
     
    </div>
  )
}

export default App
