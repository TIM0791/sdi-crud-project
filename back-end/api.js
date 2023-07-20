const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development'])

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`You may access your api data on localhost:${port}`)
})
//GET requests
app.get('/shop', (req, res) => {
  knex('shop_inventory')
    .select()
    .then(data => {
      res.json(data)
    })
})

app.get('/mgmt', (req, res) => {
  knex('shop_login')
  .select()
  .then(data => {
    res.json(data)
  })
})

//POST requests
app.post('/shop', (req, res) => {
  const { name, description, quantity} = req.body;

  knex('shop_inventory')
  .insert({ name, description, quantity })
  .then(res.status(201).json({ message: "Your information has been saved!"}))
  .catch(error => {
    res.status(500).json({ error: "There was an issue adding your information. Please try again."})
    console.log(error);
  })
})

app.post('/mgmt', (req, res) => {
  const { first_name, last_name, username, password } = req.body;

  knex('shop_login')
  .insert({ first_name, last_name, username, password})
  .then(res.status(201).json({ message: "Your information has been saved!"}))
  .catch(error => {
    res.status(500).json({ error: "There was an issue adding your information. Please try again."})
    console.log(error);
  })
})

//PATCH requests
app.patch('/shop/:id', (req, res) => {
  const itemID = req.params.id.split(':')[1];
  console.log(itemID);

  knex('shop_inventory')
    .where('id', '=', itemID)
    .update(req.body)
    .then(() => {
      res.status(200).json({ message: "Item updated successfully!"})
    })
    .catch(error => {
      console.error('Error occured during item update:', error)
      res.status(500).json({ message: "Failed to update item. Please try again later."})
    })
})

//DELETE requests
app.delete('/shop/:id', (req, res) => {
  const itemID = req.params.id.split(':')[1];

  knex('shop_inventory')
    .where('id', '=', itemID)
    .del()
    .then(res.status(200).json({ message: "Item deleted successfully"}))
})