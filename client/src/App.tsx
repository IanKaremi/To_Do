import List from "./components/list"



const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000" 


function App() {
  


  const handleForm = async (formdata : FormData) =>{
    const data = formdata.get("task")
    alert(`You Clicked submit, Message '${data}'`)

    const response = await fetch(`${SERVER_URL}/add`,{
      method:"POST",
      headers:{"Content-Type" : "app;ication/json"},
      body: JSON.stringify({task:data}),

    });

    const result = await response.json();
    alert(result.message)
  }



  return (
    <div className="min-h-screen flex flex-col text-white text-center">
      <div className="hover:border-green-500 mx-auto my-auto w-2/3  p-4 px-12 rounded-lg drop-shadow-2xl bg-black/10 backdrop-blur-lg">
         <h1 className="text-5xl font-bold">Listicle</h1>
         <h2>Organize Your Life.</h2>
         <div className="flex flex-col my-4"> 
          <List/>
         </div>
         
         <form className="flex gap-2 w-full justify-between" onSubmit={
            async (e) =>{
              e.preventDefault();
              const formdata = new FormData(e.currentTarget);
              await handleForm(formdata)
            }
         }>
          <input type="text" name="task" placeholder="Add a task.." className="flex-auto w-2/3"/>
          <button type="submit" className="bg-zinc-900/50 hover:bg-zinc-600 px-2 py-1 rounded-lg flex-auto w-1/3">Add</button>
         </form>
         
      </div>
    </div>
  )
}

export default App