import './App.css';
import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar';
import Offre from './components/Offres';
import AjouterOffre from './components/AjouterOffre';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <button class="button is-success" onClick={() => document.getElementById("popup-resolution").classList.add('is-active')}>Ajouter une offre</button>
      <Offre/>
      <AjouterOffre/>
    </div>
  );
}

export default App;
