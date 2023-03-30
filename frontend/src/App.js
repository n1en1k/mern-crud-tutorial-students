import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap";
//import "bootstrap/js/src/collapse";
//import "bootstrap/js/src/dropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import Student from "./Student";
import UpdateStudent from "./UpdateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
