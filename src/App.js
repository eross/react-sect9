import Header from  './components/Header/Header';
import Calcform from './components/Calcform/Calcform';
import Results from './components/Results/Results';
//import calculateHandler from './components/Calcform/calculateHandler';

function App() {


  return (
    <div>
      <Header/>
      <Calcform/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    <Results/>
    </div>
  );
}

export default App;
