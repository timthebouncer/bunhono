import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())
app.get('/', (c) => c.text('Hello Bun!'))
    .get('/api/dummy',(c)=> c.text('dummyyyyyy'))

export default app