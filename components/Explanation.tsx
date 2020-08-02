import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Heading, Paragraph } from './StyledComponents';

function Explanation() {
  return (
    <Box
      style={{
        height: '225px',
        backgroundColor: '#646e66',
        color: '#968c8c',
      }}
    >
      <Heading>What is Neural Style Transfer?</Heading>
      <Paragraph>
        Neural style transfer is an application of deep learning in art. It
        takes two images, a "content" image and a "style" image and generates a
        third image, containing the style of the content image in the style of
        the style image. You can read more about neural style transfer{' '}
        <a
          style={{ color: '#968c8c' }}
          href='https://www.tensorflow.org/tutorials/generative/style_transfer'
        >
          here!
        </a>
      </Paragraph>
    </Box>
  );
}

export default Explanation;
