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
      cor: "#d6cdcd",
      id: uuidv4(),
    }
  ]);
  function cadastrarNota(novaNota : Nota ) {
    setNotas([...notas, novaNota] );
  }
  return(
    <div className="flex flex-col md:flex md:flex-row ">
      <header className=" text-blue-900 w-full h-auto md:w-[500px] bg-gray-100 md:h-screen flex justify-center py-4">
          <h1 className="font-bold">Menu</h1>
      </header>
      <main className="flex flex-col items-left mx-4 py-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-blue-900 text-lg font-bold">Bloco de notas</h1>
          <ModalForm cadastrarNota ={cadastrarNota} />
        </div>
        <section className="flex items-center gap-5 flex-wrap">
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
        </section>
      </main>
    </div>
  )
}

export default App
