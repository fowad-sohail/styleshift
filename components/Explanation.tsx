import React from 'react';
import { Box, Typography } from '@material-ui/core';

function Explanation() {
  return (
    <Box
      className='heading'
      style={{
        height: '225px',
        backgroundColor: '#646e66',
      }}
    >
      <h2
        className='display-4 font-weight-bold pt-3 mb-2 mx-5'
        style={{ color: '#968c8c' }}
      >
        What is Neural Style Transfer?
      </h2>
      <Typography
        className='mx-5'
        style={{ fontSize: 'x-large', color: '#968c8c' }}
      >
        Neural style transfer is an application of deep learning in art. It
        takes two images, a "content" image and a "style" image and generates a
        third image, containing the style of the content image in the style of
        the style image.
      </Typography>
    </Box>
  );
}

export default Explanation;
