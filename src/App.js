import React, {useState} from 'react';


import Header from  './components/Header/Header';
import Calcform from './components/Calcform/Calcform';
import Results from './components/Results/Results';
import calculateHandler from './components/Calcform/calculateHandler';

const DUMMY_DATA=[];


function App() {
  const [yearlyData, setYearlyData] = useState(DUMMY_DATA);

  const calcHandler = (calcData) => {
    const yearlyData = calculateHandler(calcData);
    setYearlyData([...yearlyData]);
  }

  return (
    <div>
      <Header/>
      <Calcform onCalcData={calcHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    <Results items={yearlyData}/>
    </div>
  );
}

export default App;
