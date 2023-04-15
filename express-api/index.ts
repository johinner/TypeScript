import pkg from 'express';

const app = pkg()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    ok: "todo bien",
    dess: 'typescript'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})