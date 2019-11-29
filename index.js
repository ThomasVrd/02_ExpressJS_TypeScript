express = require('express')
app = express()

path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', 1337)

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})



app.get(
  '/', 
  (req, res) => res.send('This is Work part 1, add / + your name to access')
)

app.get(
    '/hello/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
  )

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)