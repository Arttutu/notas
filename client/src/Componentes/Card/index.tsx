interface Nota{
    titulo: String,
    descricao: String,
    cor: String,
    data: string
}
export default function Card( {titulo, descricao, cor, data} : Nota) {
  const background ={
    background:`${cor}`
  }
  return (
    <div className=" w-full sm:w-[500px] p-4 bg-gray-300 rounded-br-3xl mt-6 flex items-left flex-col gap-2" style={background}>
        <h2 className="font-bold">{titulo}</h2>
        <p className="">{descricao}</p>
        <span className="">{data}</span>
        <div className="flex items-end justify-end">
          <span className="font-semibold">Etiqueta:</span>
          <span></span>
        </div>
    </div>
  )
}
 