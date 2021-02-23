import React from 'react';
import emptyImage from  '../assets/static/images/empty.png'
import '../assets/styles/components/Empty.scss';
const Empty = () => (
    <div className='empty'>
        <img className='empty-img' src={emptyImage} />
        <span className='empty-text'>You haven&apos;t favorites</span>
        <br />
        <span className='empty-text'>Go and select your favorite characters</span>
    </div>
);

export default Empty;