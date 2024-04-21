interface Nota{
    titulo: String,
    descricao: String,
    cor: String,
    data: string
}

export default function Card( {titulo, descricao, cor, data} : Nota) {

  return (
    <div className=" w-[250px] sm:w-[500px] p-4 bg-gray-300 rounded-br-3xl mt-6 flex items-left flex-col gap-2">
        <h2 className="font-bold">{titulo}</h2>
        <p>{descricao}</p>
        <p>{cor}</p>
        <span>{data}</span>
        <div className="flex items-end justify-end">
          <span>Etiqueta</span>
        </div>
    </div>
  )
}
 