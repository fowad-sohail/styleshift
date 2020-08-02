import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Heading } from './StyledComponents';

function Motivation() {
  return (
    <Box
      className='d-flex justify-content-center'
      style={{ height: '500px', backgroundColor: '#646e66', color: '#968c8c' }}
    >
      <Box style={{ width: '50%' }}>
        <Heading>Why StyleShift?</Heading>
        <Typography className='mx-5 heading' style={{ fontSize: 'x-large' }}>
          A while back I took a Deep Learning Specialization course. Towards the
          end of the semester, I implemented neural style transfer in a Jupyter
          Notebook. I was fascinated by this application of CNNs. But a Jupyter
          Notebook wasn't practical. I wanted an easier and more user-friendly
          interface to interact with the model I had just developed. Now, with
          some free time on my hands, it's time to make this idea a reality.
        </Typography>
      </Box>
      <Box
        style={{
          width: '50%',
        }}
      >
        <Heading>Technical Requirements</Heading>
        <div className='section-body'>
          <Typography className='mx-5'>
            I put a few requirements on myself for this project:
          </Typography>
          <Typography className='mx-5 mt-4' style={{ color: '#968c8c' }}>
            1. Web application
          </Typography>{' '}
          <Typography className='mx-5' style={{ color: '#968c8c' }}>
            2. Next.js
          </Typography>{' '}
          <Typography className='mx-5' style={{ color: '#968c8c' }}>
            3. Pretrained models where applicable
          </Typography>{' '}
        </div>
      </Box>
    </Box>
  );
}

export default Motivation;
