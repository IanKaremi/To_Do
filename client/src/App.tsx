

// import { hcWithType } from 'server/dist/client'

// const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"

// type ResponseType = Awaited<ReturnType<typeof client.hello.$get>>;

// const client = hcWithType(SERVER_URL);

function App() {
  //const [data, setData] = useState<Awaited<ReturnType<ResponseType["json"]>> | undefined>()

  // async function sendRequest() {
  //   try {
  //     const res = await client.hello.$get()
  //     if (!res.ok) {
  //       console.log("Error fetching data")
  //       return
  //     }
  //     const data = await res.json()
  //     setData(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col text-white text-center">
      <div className="hover:border-green-500 mx-auto my-auto  p-4 px-12 rounded-lg drop-shadow-2xl bg-black/10 backdrop-blur-lg">
         <h1 className="text-5xl font-bold">Listicle</h1>
         <h2>Organize Your Life.</h2>
         <div className="flex flex-col my-4">
            <div className="bg-zinc-900/50 rounded-lg p-4 px-8 text-left">
              <p className="font-bold text-xl">Your Task Name.</p>
              <p className="text-sm">Added: 1-1-2025 8:10AM</p>
              <div className="flex gap-1 justify-between pt-2">
                <button onClick={()=>console.log("Complete Clicked")} className="rounded-lg p-1 font-semibold bg-green-500/30 flex-1/2">Complete</button>
                <button onClick={()=>console.log("Delete Clicked")} className="rounded-lg p-1 font-semibold bg-red-500/30 flex-1/2">Delete</button>
              </div>
              
            </div>
         </div>
         
         <form className="flex gap-2 w-full justify-between">
          <input type="text" placeholder="Add a task.." className="flex-auto w-2/3"/>
          <button type="submit" className="bg-zinc-900/50 px-2 py-1 rounded-lg flex-auto w-1/3">Add</button>
         </form>
         
      </div>
    </div>
  )
}

export default App