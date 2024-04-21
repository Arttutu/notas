import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Card from "./Componentes/Card"
import ModalForm from "./Componentes/ModalForm";
import { Nota } from "./Componentes/Compatilhados/icard";
function App() {

  const [notas, setNotas] = useState<Nota[]>([
    {
      titulo: "Bem-vindo",
      descricao: "Aqui você pode fazer suas anotações.",
      data: "aqui vai a data",
      cor: "#000000",
      id: uuidv4(),
    }
  ]);
  function cadastrarNota(novaNota : Nota ) {
    setNotas([...notas, novaNota] );
  }
  return(
    <div className="flex">
      <header className=" text-blue-900 w-2/12 bg-gray-100 h-screen flex justify-center py-4">
          <h1 className="font-bold">Menu</h1>
      </header>
      <main className="w-full flex flex-col items-left mx-4 py-4">
        <div className="flex  gap-4 justify-start items-center">
          <h1 className="text-blue-900 text-lg font-bold">Bloco de notas</h1>
          <ModalForm cadastrarNota ={cadastrarNota} />
        </div>
        <div className="flex items-center  gap-5 flex-wrap">
          {notas.map((nota)=> (
            <Card
            key={nota.id}
            descricao={nota.descricao}
            data={nota.data}
            cor={nota.cor}
            titulo={nota.titulo}
            />
          )
          )}
          </div>
      </main>
    </div>
  )
}

export default App
