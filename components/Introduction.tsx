import React from 'react';
import { Box } from '@material-ui/core';

function Introduction() {
  return (
    <Box
      style={{
        backgroundImage: 'url(monalisa.jpeg)',
        backgroundColor: 'rgba(32, 37, 54, .6)',
        backgroundBlendMode: 'darken',
        display: 'flex',
        height: '350px',
      }}
    >
      <span className='mx-5'>
        <h2
          style={{ color: 'white' }}
          className='display-4 font-weight-bold pt-5 mb-2'
        >
          Welcome to StyleShift
        </h2>{' '}
        <h4 style={{ color: 'white' }}>
          Neural Style Transfer in your browser
        </h4>
        <hr />
        <h5 style={{ color: 'white' }}>A side project by Fowad Sohail</h5>
      </span>
      {/* <span className='justify-content-end' style={{ display: 'flex' }}>
        <img className='pt-5' src={'nst_example.png'} height='300' />
      </span> */}
    </Box>
  );
}

export default Introduction;
