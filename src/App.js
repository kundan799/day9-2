import logo from './logo.svg';
import './App.css';
import Navebar from './component/Navebar';
import Body from './component/Body';
import { Themcontext } from './ontext/Themcontext';
import { useContext } from 'react';

function App() {
  const { islight } = useContext(Themcontext );
  return (
    <div className={`App ${islight ? "Light" : "dark"}`}>
      <Navebar/>
      <Body/>
      
    </div>
  );
}

export default App;
