import { Sidebar } from "components";
import './App.css';
import AllRoutes from "routes/AllRoutes";




function App() {
  return (
    <div className="App">
      <Sidebar />
      <AllRoutes />
    </div>
  );
}

export default App;
