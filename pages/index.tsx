import React from 'react';
import * as magenta from '@magenta/image';

function LandingPage() {
  const generateStylizedImage = () => {
    const model = new magenta.ArbitraryStyleTransferNetwork();
    const contentImg = document.getElementById('content') as HTMLImageElement;
    const styleImg = document.getElementById('style') as HTMLImageElement;
    const stylizedCanvas = document.getElementById('stylized');

    function stylize() {
      model.stylize(contentImg, styleImg).then((imageData) => {
        const canvas = stylizedCanvas as HTMLCanvasElement
        canvas.getContext('2d')?.putImageData(imageData, 0, 0);
      });
    }

    model.initialize().then(stylize);
  };

  return (
    <>
      <img id='content' src='content.jpg' />
      <img id='style' height='256' src='abstract-art.jpg' />
      <canvas id='stylized' height='1000' width='1000'></canvas>
      <button onClick={() => generateStylizedImage()}> Click here to generate your stylized image! </button>
    </>
  );
}
export default LandingPage;
