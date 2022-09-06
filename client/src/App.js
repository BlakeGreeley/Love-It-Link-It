import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import CreateLink from "./components/CreateLink";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/new' element={<CreateLink/>} />
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
