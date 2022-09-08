import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import CreateLink from "./components/CreateLink";
import ViewLink from "./components/ViewLink";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/new' element={<CreateLink/>} />
          <Route path='/view/:id' element={<ViewLink/>} />
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
