import logo from './logo.svg';
import './App.css';

function App() {
  
        

  return (
    <div className="App">
      
      <select>
        <option value= '1'>1</option>
        <option value= '2'>2</option>
        <option value= '3'>3</option>
        <option value= '4'>4</option>
      </select> <br/>

      <input type="text" placeholder='Linea 1' /> <br/>
      <input type="text" placeholder='Linea 2' /> <br/>
      <button>Exportar</button>

      <div>
        <span>Linea 1</span>
        <span>Linea 2</span>
        <img src=''></img>
      </div>
      
    </div>
  );
}

export default App;
