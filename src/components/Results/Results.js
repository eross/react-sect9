import React from 'react';

import Resultheader from './Resultheader';
import Resultbody from './Resultbody';

const Results = (props) => {
    return (
        <table className="result">
        <Resultheader/>
        <Resultbody items = {props.items} />
      </table>
    )
}

export default Results;