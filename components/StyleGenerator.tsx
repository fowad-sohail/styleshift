import React from 'react';
import * as magenta from '@magenta/image';
import Previews from './UploadPreview';
import { Heading, Paragraph } from './StyledComponents';
import { Box, Button } from '@material-ui/core';

function StyleGenerator() {
  const generateStylizedImage = () => {
    const model = new magenta.ArbitraryStyleTransferNetwork();
    const contentImg = document.getElementById('content') as HTMLImageElement;
    const styleImg = document.getElementById('style') as HTMLImageElement;
    const stylizedCanvas = document.getElementById('stylized');

    function stylize() {
      model.stylize(contentImg, styleImg).then((imageData) => {
        const canvas = stylizedCanvas as HTMLCanvasElement;
        canvas.getContext('2d')?.putImageData(imageData, 0, 0);
      });
    }

    model.initialize().then(stylize);
  };

  return (
    <Box
      className='d-flex flex-column'
      style={{
        height: '375px',
        width: '100%',
        backgroundColor: '#646e66',
        color: '#968c8c',
      }}
    >
      <Heading>Try it out!</Heading>
      <div
        className='d-flex flex-row'
        style={{ justifyContent: 'space-around' }}
      >
        <div>
          <Paragraph>Content Image</Paragraph>
          <Previews elementId="content" />
        </div>
        <div>
          <Paragraph>Style Image</Paragraph>
          <Previews elementId="style" />
        </div>
      </div>
      <canvas id='stylized' height='1000' width='1000' />
      <Button onClick={() => generateStylizedImage()}>
        Generate your stylized image!
      </Button>
    </Box>
  );
}

export default StyleGenerator;
