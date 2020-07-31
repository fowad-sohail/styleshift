import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Introduction() {
  return (
    <Box
      style={{ backgroundColor: '#fca311', display: 'flex', height: '350px' }}
    >
      <span className='mx-5'>
        <h2 className='display-4 font-weight-bold pt-5 mb-2'>
          Welcome to StyleShift
        </h2>{' '}
        <h5> Neural Style Transfer in your browser </h5>
        <hr />
        <h6>By Fowad Sohail</h6>
      </span>
      <span className='justify-content-end' style={{ display: 'flex' }}>
        <img className='pt-5' src={'nst_example.png'} height='300' />
      </span>
    </Box>
  );
}

export default Introduction;
