import express from 'express'
import path from 'path'
import env from 'dotenv'

env.config()


const app = express()

const videos = ['yVd4mNrUkq0', 'h3vwVM8PnBM', 'QYRdFojBqLI', 'oClGRd-K41M', 'iWjfC9kroF8']

app.get('/api/videos', (req, res) => {
  res.send(videos)
})

if (process.env.NODE_ENV != 'dev') {
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index"), (error) => {
      if (error) {
        res.status(500).send(error)
      }
    })
  })
}


app.listen(3000, () => {
  console.log("Running");
})