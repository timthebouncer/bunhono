//@ts-ignore

import { Hono } from 'hono';

export const config = {
    runtime: 'edge',
};

const app = new Hono();


app.get('/world', async (c) => {
    return c.json({
        message: 'Another Route!',
    });
});

//@ts-ignore
// export default handle(app, '/api');