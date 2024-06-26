import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"
import { Nota } from '../Compatilhados/icard';
import Axios from 'axios';

export default function ModalForm({ cadastrarNota }: { cadastrarNota: (nota: Nota) => void }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [cor, setCor] = useState("");

  const Salvar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novaNota = {
      titulo,
      descricao,
      data,
      cor,
      id: uuidv4()
    };

        Axios.post('http://localhost:3000/teste', {
        id: uuidv4(),
        titulo: titulo,
        descricao: descricao,
        data: data,
        cor: cor
      }).then((response) =>{
        console.log(response)
      })
      cadastrarNota( novaNota);
      setTitulo("");
      setDescricao("");
      setData("");
      setCor("");
    
  };
  
  return (
    <div >
      <Dialog.Root> 
        <Dialog.Trigger>
          <div className='border-blue-900 border-[1px] p-[2px]  rounded-md'>
            <button className='text-blue-900 text-sm font-semibold '>Adicione uma nota +</button>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 flex items-center" />
          <Dialog.Content className="w-full max-w-[600px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg absolute p-4 ">
            <form className='flex flex-col items-start gap-2' onSubmit={Salvar}>
              <label className='font-semibold text-blue-900'>Titulo</label>
              <input type="text" className='w-full p-1 border border-gray-300 rounded-md' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              <label className='font-semibold text-blue-900'>Descrição</label>
              <input type="text" className='w-full p-1 border border-gray-300 rounded-md' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              <label className='font-semibold text-blue-900'>Data</label>
              <input type='date' className='w-full p-1 border border-gray-300 rounded-md' value={data} onChange={(e) => setData(e.target.value)} />
              <label className='font-semibold text-blue-900'>Cor</label>
              <input type='color' className='p-1 border border-gray-300 rounded-md' value={cor} onChange={(e) => setCor(e.target.value)} />
              <div className='border-blue-900 border-[1px] p-[4px] rounded-md mt-2'>
                <button type='submit' className='text-blue-900 text-sm font-bold'>Adicionar +</button>
              </div>
            </form>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
