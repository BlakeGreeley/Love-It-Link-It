import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import CreateLink from "./components/CreateLink";
import ViewLink from "./components/ViewLink";
import EditLink from "./components/EditLink";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Main/>}/>
          <Route path='/new' element={<CreateLink/>} />
          <Route path='/view/:id' element={<ViewLink/>} />
          <Route path='/edit/:id' element={<EditLink/>} />
          <Route path='/' element={<CreateUser/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
