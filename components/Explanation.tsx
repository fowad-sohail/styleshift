import React from 'react';
import { Box, Typography } from '@material-ui/core';

function Explanation() {
  return (
    <Box
      style={{
        backgroundColor: '#646e66',
        height: '350px',
      }}
    >
      <h2
        className='display-4 font-weight-bold mt-0 mb-2 mx-5'
        style={{ color: '#968c8c' }}
      >
        What is Neural Style Transfer?
      </h2>
      <Typography className='mx-5' style={{ fontSize: 'x-large', color: '#968c8c' }}>
        A while back I took a Deep Learning Specialization course. Towards the
        end of the semester, I implemented neural style transfer in a Jupyter
        Notebook. I was fascinated by this application of CNNs. But a Jupyter
        Notebook wasn't practical. I wanted an easier and more user-friendly
        interface to interact with the model I had just developed. Now, with
        some free time on my hands, it's time to make this idea a reality.
      </Typography>
    </Box>
  );
}

export default Explanation;
