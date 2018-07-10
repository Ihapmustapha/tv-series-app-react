import React from 'react'; 
import loaderSrc from '../../Assets/loader.gif'; 

const Loader = props => {
    return(
        <div>
        <img
        alt="Loader Icon"
        src={loaderSrc} 
        />
    </div>
    );
    
}; 

export default Loader; 