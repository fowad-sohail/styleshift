import React from 'react';
import { Box } from '@material-ui/core';

function Introduction() {
  return (
    <Box
      style={{
        backgroundImage: 'url(monalisa.jpeg)',
        backgroundColor: 'rgba(32, 37, 54, .6)',
        backgroundBlendMode: 'darken',
        height: '350px',
      }}
    >
      <div className='text-center'>
        <h2
          style={{ color: '#968c8c' }}
          className='display-4 font-weight-bold pt-5 mb-2'
        >
          Welcome to StyleShift
        </h2>{' '}
        <h4 style={{ color: '#968c8c' }}>
          Neural Style Transfer in your browser
        </h4>
        <h5 style={{ color: '#968c8c' }}>A side project by Fowad Sohail</h5>
      </div>
    </Box>
  );
}

export default Introduction;
