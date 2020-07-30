import React from 'react';
import * as magenta from '@magenta/image';
import { Button, Grid, Paper } from '@material-ui/core';
import Previews from '../components/UploadPreview';

function LandingPage() {
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
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Paper elevation={6}>
            <Previews />
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={6}>
            <img id='style' src='abstract-art.jpg' />
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={6}>
            <canvas id='stylized' height='1000' width='1000'></canvas>
          </Paper>
        </Grid>
        <Button onClick={() => generateStylizedImage()}>
          Click here to generate your stylized image!{' '}
        </Button>
      </Grid>
    </>
  );
}
export default LandingPage;
