
import { NextApiRequest, NextApiResponse } from 'next'
import * as magenta from '@magenta/image';

const path = require('path');
const fs = require('fs');


const model = new magenta.ArbitraryStyleTransferNetwork();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'POST':
            const model = new magenta.ArbitraryStyleTransferNetwork();
            const stylizedCanvas = document.getElementById('stylized') as HTMLCanvasElement;

            function stylize() {
                model.stylize(body.contentImg, body.contentImg).then((imageData) => {
                    stylizedCanvas.getContext('2d')?.putImageData(imageData, 0, 0);
                });
            }

            model.initialize().then(stylize);

            res.status(200).json("check console")
            break
        default:
            break

    }
}


