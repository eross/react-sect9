import React from 'react';

import Resultheader from './Resultheader';
import Resultbody from './Resultbody';

const Results = () => {
    return (
        <table className="result">
        <Resultheader/>
        <Resultbody/>
      </table>
    )
}

export default Results;