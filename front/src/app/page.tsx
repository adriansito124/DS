import Image from "next/image";

export default function Home() {

  const style =
  {
    main: "min-h-screen w-full bg-slate-900 flex justify-center items-center text-gray-50",
    botao: "p-2 bg-slate-700 rounded-md px-5 hover:bg-slate-600 transition",
  }

  return (
    <>
      <main className={style.main}>
        <div className="fixed top-0 flex items-center flex-col w-full bg-slate-800 justify-center">
          <h1 className="text-4xl font-semibold pt-5">Tarefas</h1>
          <div className="justify-center gap-96 flex p-5 text-2xl w-4/5  rounded-sm">
            <button className={style.botao}>Excluir</button>
            <button className={style.botao}>Adicionar</button>
            <button className={style.botao}>Editar</button>
          </div>
        </div>
        <div>
          <h2>texto lalala</h2>
        </div>
      </main>
    </>
  );
}
