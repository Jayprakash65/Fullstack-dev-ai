import React, { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-sky-400/100" : "bg-gray-100"
      } transition-colors duration-300`}>
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-3xl font-bold">Invoice Generator</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-500"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="p-6">
      <InvoiceForm darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;

