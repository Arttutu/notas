import * as Dialog from '@radix-ui/react-dialog';

export default function Form() {
  return (
<div className='mt-4'>
  <Dialog.Root >
    <Dialog.Trigger>
      <div className='border-blue-900 border-[1px] p-[4px]  rounded-md'>
        <button className='text-blue-900 text-sm font-semibold '>Adicione uma nota +</button>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=" fixed inset-0 bg-black/50 flex items-center" />
      <Dialog.Content className="w-full  max-w-[600px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg absolute p-4 ">
        <form className='flex flex-col items-start gap-2'>
          <label  className='font-semibold text-blue-900'>Titulo</label>
          <input className='w-full p-1 border border-gray-300 rounded-md'></input>
          <label className='font-semibold text-blue-900' >Descrição</label>
          <input  className='w-full p-1 border border-gray-300 rounded-md '></input>
          <label className='font-semibold text-blue-900'>Data</label>
          <input className='w-full p-1 border border-gray-300 rounded-md' ></input>
          <div className='border-blue-900 border-[1px] p-[4px]  rounded-md mt-2'>
            <button className='text-blue-900 text-sm font-bold '>Adicionar +</button>
          </div>
        </form>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</div> 

  )
}
 