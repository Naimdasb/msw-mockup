import { rest } from 'msw';

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/todos/2', (req, res, ctx) => {
        return res(ctx.json({title: 'quis ut nam facilis et officia qui'}))
    }),
    rest.post('/send', (req, res, ctx) => {
        const {username, password} = req.body;
        return res(ctx.json({username, password}))
    })
]