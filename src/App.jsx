import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="text-center p-6">
        <h1 className="text-amber-500 text-4xl font-bold">Crypto Gallery</h1>
      </div>

      <div className="flex justify-center">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
