import Navbar from "./components/navbar/Navbar";
import './app.css';
import Accueil from "./pages/accueil/Accueil";

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Accueil/>
    </div>
  );
}

export default App;
