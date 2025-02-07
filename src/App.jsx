import { div } from "framer-motion/client";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div className="w-full h-screen duration-700" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-3 py-2  rounded-3xl ">
          <button
            onClick={() =>
              setcolor("linear-gradient(to right, #ff9966, #ff5e62)")
            }
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
          >
         
          </button>
          <button
            onClick={() =>
              setcolor("linear-gradient(to right, #ff6600, #ff3300)")
            }
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #ff6600, #ff3300" }}
          >
          Sunset
          </button>
          <button
            onClick={() =>
              setcolor("linear-gradient(to right, #a60000, #2e2e2e)")
            }
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{
              background: "linear-gradient(to right, #a60000, #2e2e2e)",
            }}
          >
           Brown shade
          </button>

          <button onClick={()=>setcolor("linear-gradient(to right, #00b4d8, #ffcb00)")}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #00b4d8, #ffcb00)" }}
          >
           YelloBlue
          </button>
          <button onClick={()=>{setcolor('linear-gradient(to right, #f4a300, #004aad)')}}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #f4a300, #004aad)" }}
          >
            bluu-Yellow
          </button>
          <button onClick={()=>setcolor('linear-gradient(to right, #ffcc00, #0099ff)')}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #ffcc00, #0099ff)" }}
          >
            yellShade
          </button>
          <button onClick={()=>setcolor('linear-gradient(to right, #d70040, #ffb5d1)')}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #d70040, #ffb5d1)" }}
          >
            Deamon
          </button>
          <button onClick={()=>setcolor('linear-gradient(to right, #6b00b6, #23d5ab)')}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #6b00b6, #23d5ab)" }}
          >
            angel
          </button>
          <button onClick={()=> setcolor('linear-gradient(to right, #9e0f0f, #5c5c5c)')}
            className="outline:none px-4 py-1 rounded-full  text-white"
            style={{ background: "linear-gradient(to right, #9e0f0f, #5c5c5c)" }}
          >
            ghoul
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
