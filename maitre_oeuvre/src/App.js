import './App.css';
import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar';
import Offres from './components/Offres';
import AjouterOffre from './components/AjouterOffre';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <button className="button is-success" onClick={() => document.getElementById("popup-resolution").classList.add('is-active')}>Ajouter une offre</button>
      <Offres/>
      <AjouterOffre/>
    </div>
  );
}

export default App;
