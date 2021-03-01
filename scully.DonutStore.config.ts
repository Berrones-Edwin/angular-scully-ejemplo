import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'DonutStore',
    outDir: './dist/static',
    routes: {
        '/donuts/:donutId': {
            type: 'json',
            donutId: {
                url: 'http://localhost:3000/donuts',
                property: 'id',
            },
        },
    },
};
