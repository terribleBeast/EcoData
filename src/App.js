// import logo from './logo.svg';
import './App.css';
import { Content } from './components'
import { Routes, Route } from "react-router";
import Home from './components/pages/Home';

import { entities } from './entities';
import AuthForm from './components/pages/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content />} >
          <Route index element={<Home />} />
          
          {
            entities.map((item, index) =>
            (
              <Route path={item.link} element={ <h2 className="tmp-page">{item.name}</h2>} key={index}/>
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
