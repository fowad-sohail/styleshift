import React from 'react';
import { Box } from '@material-ui/core';
import { Heading, Paragraph } from './StyledComponents';

function Motivation() {
  return (
    <Box
      className='d-flex justify-content-center'
      style={{ height: '375px', backgroundColor: '#646e66', color: '#968c8c' }}
    >
      <Box style={{ width: '50%' }}>
        <Heading>Why StyleShift?</Heading>
        <Paragraph>
          A while back I took a Deep Learning Specialization course. Towards the
          end of the semester, I implemented neural style transfer in a Jupyter
          Notebook. I was fascinated by this application of CNNs. But a Jupyter
          Notebook wasn't practical. I wanted an easier and more user-friendly
          interface to interact with the model I had just developed. Now, with
          some free time on my hands, it's time to make this idea a reality.
        </Paragraph>
      </Box>
      <Box
        style={{
          width: '50%',
        }}
      >
        <Heading>Technical Requirements</Heading>
        <Paragraph>
          {' '}
          I put a few requirements on myself for this project:
          <ul>
            <li>Must be a web application, written using Next.js </li>
            <li>Make a landing page introducing the project</li>
            <li>Use pretrained models and libraries where applicable</li>
          </ul>
        </Paragraph>
      </Box>
    </Box>
  );
}

export default Motivation;
