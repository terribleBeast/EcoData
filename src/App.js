// import logo from './logo.svg';
import './App.css';
import { Footer, Header, Content } from './components'
import { Routes, Route } from "react-router";
import Greet from './components/Greet';
import { entities } from './entities';
import AuthForm from './components/pages/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content />} >
          <Route index element={<Greet />} />
          {
            entities.map(item =>
            (
              <Route path={item.link} element={item.page === undefined ? <h2>{item.name}</h2> : item.page} />
            )
            )
          }

          {<Route path="*" element={<div>Not valid path</div>} />}
        </Route>

        <Route path='/auth' element={<AuthForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
