import './scss/style.scss';
import IkkoTanaka from './img/01_Ikko.jpg';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Ciccio, {Counter as Pasticcio} from './Counter';


function Count() {
  const [count, setCount] = useState(0);

  const [nome, setNome] = useState('');

  const [valido, setValido] = useState(false);

  useEffect(() => {
    console.log('Il nuovo nome è ' + nome);

    if (nome.length > 6) {
      setValido(true)
    } else {
      setValido(false)
    }
  }, [nome]);

  return <div>
    <p>Mi hai cliccate {count} volte</p>
    {count > 5 ? <p>Più di cinque</p> : ''}
    <div className="row">
      <div className="col-6">
        <button onClick={() => setCount(count + 1)}
                className="btn btn-primary">Cliccami
        </button>
        <button onClick={() => setCount(count - 1)}
                className="btn btn-danger">Non cliccarmi
        </button>
      </div>

      <p>{nome && 'Ciao, ' + nome}</p>
      <input type="text" value={nome}
             onChange={({target: {value}}) => setNome(value)}
             placeholder={'Come ti chiami?'}/>
    </div>
    <button disabled={!valido}>Prosegui</button>
  </div>;
}

function App() {
  return <div className="container">
    <div className="row py-5">
      <div className="col">
        <Count/>
      </div>
    </div>
  </div>;
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);