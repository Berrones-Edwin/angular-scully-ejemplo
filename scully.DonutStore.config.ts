import { registerPlugin, ScullyConfig } from '@scullyio/scully';
import * as fetch from 'node-fetch';

// mi propio plugin
const donutIdPlugin = () => {
    return fetch('http://localhost:3000/donuts')
        .then(res => res.json())
        .then(donuts =>
            donuts.map(donut => {
                return { route: `/donuts/${donut.id}` };
            }),
        );
};
registerPlugin('router', 'ngConfDonuts', donutIdPlugin);

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'DonutStore',
    outDir: './dist/static',
    routes: {
        '/donuts/:donutId': {
            type: 'ngConfDonuts',
        },
    },
    // routes: {
    //     '/donuts/:donutId': {
    //         type: 'json',
    //         donutId: {
    //             url: 'http://localhost:3000/donuts',
    //             property: 'id',
    //         },
    //     },
    // },
};
