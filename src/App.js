import Header from  './components/Header/Header';
import Calcform from './components/Calcform/Calcform';
import Results from './components/Results/Results';
import calculateHandler from './components/Calcform/calculateHandler';

function App() {

  const calcHandler = (calcData) => {
    console.log('App calcHandler');
    console.log(calcData);
    const yearlyData = calculateHandler(calcData);
    console.log('Yearly Results --------');
    console.log(yearlyData);
  }

  return (
    <div>
      <Header/>
      <Calcform onCalcData={calcHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    <Results/>
    </div>
  );
}

export default App;
