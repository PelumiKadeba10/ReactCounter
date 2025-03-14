import { useState } from "react"; 
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(10); 

  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-green-200 flex flex-col items-center justify-center py-6 px-8 text-center shadow-lg rounded-lg">
        <p className="text-xl mb-4">Click as you like</p>
        <p className="text-2xl font-bold">{count}</p>

        <div className="flex gap-6">
        <button
          className="mt-4 border py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => setCount(0)}
        >
          Clear Counter
        </button>
        <button
          className="mt-4 border py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button
          className="mt-4 border py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
         Increase
        </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;

