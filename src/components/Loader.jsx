import React from 'react';
import '../assets/styles/components/Loader.scss';
import loaderImage from '../assets/static/images/portal.gif';

const Loader = () => (
    <div className='loader'>
        <img className='loader-img' src={loaderImage} alt='Loader' />
        
    </div>
);

export default Loader;