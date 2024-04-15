import Form from "./Componentes"

function App() {

  return(
    <div className="flex">
      <header className=" text-blue-900 w-2/12 bg-gray-100 h-screen flex justify-center py-4">
          <h1 className="font-bold">Menu</h1>
      </header>
      <main className="w-full flex flex-col items-left mx-4 py-4">
        <h1 className="text-blue-900 text-lg font-bold">Bloco de notas</h1>
        <Form />
      </main>
    </div>
  )
}

export default App
