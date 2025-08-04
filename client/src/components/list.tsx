export default function List(){
    return(
         <div className="bg-zinc-900/50 rounded-lg p-4 px-8 text-left">
                <p className="font-bold text-xl">Your Task Name.</p>
                <p className="text-sm">Added: 1-1-2025 8:10AM</p>
                <div className="flex gap-1 justify-between pt-2">
                  <button onClick={()=>console.log("Complete Clicked")} className="rounded-lg p-1 font-semibold bg-blue-500/30 hover:bg-blue-500 flex-1/2">Complete</button>
                  <button onClick={()=>console.log("Delete Clicked")} className="rounded-lg p-1 font-semibold bg-red-500/30  hover:bg-red-500 flex-1/2">Delete</button>
                </div>
        </div>
        
    )
}