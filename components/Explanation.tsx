import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Heading } from './StyledComponents';

function Explanation() {
  return (
    <Box
      className='heading'
      style={{
        height: '225px',
        backgroundColor: '#646e66',
      }}
    >
      <Heading>What is Neural Style Transfer?</Heading>
      <Typography
        className='mx-5'
        style={{ fontSize: 'x-large', color: '#968c8c' }}
      >
        Neural style transfer is an application of deep learning in art. It
        takes two images, a "content" image and a "style" image and generates a
        third image, containing the style of the content image in the style of
        the style image. You can read more about neural style transfer{' '}
        <a style={{ color: '#968c8c'}} href='https://www.tensorflow.org/tutorials/generative/style_transfer'>
          here!
        </a>
      </Typography>
    </Box>
  );
}

export default Explanation;
