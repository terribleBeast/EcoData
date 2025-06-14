// import logo from './logo.svg';
import './App.css';
import { Footer, Header, Content } from './components'
import { Routes, Route}from "react-router";
import Main from './components/Main';
import {listItems} from './components/LeftMenu';


function App() {
  return (
    <div className="App">
      <Header />


      
        <Routes>
          <Route path="/" element={<Content/>} >
            <Route index element={<Main />} />
            {
              listItems.map(item =>
                (
                  <Route path={item.link} element={<h2>{item.name}</h2>}/>
                )
              )
            }
            
            { <Route path="*" element={<div>Not valid path</div>} /> }
          </Route>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
