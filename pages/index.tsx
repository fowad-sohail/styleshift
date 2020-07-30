import React, { useEffect } from 'react';
import axios from 'axios';
import * as magenta from '@magenta/image';

function LandingPage() {
  // const genNewImg = async () => {
  //   const contentImg = document.getElementById('content') as HTMLImageElement;
  //   const styleImg = document.getElementById('style') as HTMLImageElement;
  //   // const req = axios.post('api/style', { contentImg, styleImg });
  //   const req = axios.post('api/style');

  //   console.log(req);
  // };

  // useEffect(() => {
  //   genNewImg();
  // });

  const ahh = () => {
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
      <button onClick={() => ahh()}> test ahhhhhhhhhh </button>
    </>
  );
}
export default LandingPage;
