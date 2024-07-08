import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())
app.get('/', (c) => c.text('Hello Bun!'))
    .get('/qq', (c) => {
        const getRandomNumber = () => {
            return Math.floor(Math.random() * 5000) + 1000
        }
        return c.json(
            {
                data: [
                    { name: 'Jan', total: getRandomNumber() },
                    { name: 'Feb', total: getRandomNumber() },
                    { name: 'Mar', total: getRandomNumber() },
                    { name: 'Apr', total: getRandomNumber() },
                    { name: 'May', total: getRandomNumber() },
                    { name: 'Jun', total: getRandomNumber() },
                    { name: 'Jul', total: getRandomNumber() },
                    { name: 'Aug', total: getRandomNumber() },
                    { name: 'Sep', total: getRandomNumber() },
                    { name: 'Oct', total: getRandomNumber() },
                    { name: 'Nov', total: getRandomNumber() },
                    { name: 'Dec', total: getRandomNumber() },
                ],
            },
            200,
        )
    })

export default app