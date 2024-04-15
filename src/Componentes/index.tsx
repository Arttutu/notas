import * as Dialog from '@radix-ui/react-dialog';

export default function Form() {
  return (
<div className='mt-4'>
  <Dialog.Root >
    <Dialog.Trigger>
      <div className='border-black border-[1px] p-[4px]  rounded-md'>
        <button className='text-blue-900 text-sm font-semibold '>Adicione uma nota +</button>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 flex justify-center items-center" />
      <Dialog.Content className="h-[500px] w-[350px] sm:w-[744px]  bg-white ">
        <form>
          <label>Titulo</label>
          <input></input>
          <label>Descrição</label>
          <input></input>
          <label>Data</label>
          <input></input>
        </form>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</div>

  )
}
