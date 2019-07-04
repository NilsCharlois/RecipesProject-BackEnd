const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


var RoleRoutes = require('./routes/RoleRoutes')
var UserRoutes = require('./routes/UserRoutes')
var RecipeRoutes = require('./routes/RecipeRoutes')
var UnitRoutes = require('./routes/UnitRoutes')
var IngredientRoutes = require('./routes/IngredientRoutes')


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/roles', RoleRoutes);
app.use('/users', UserRoutes);
app.use('/recipes', RecipeRoutes);
app.use('/units', UnitRoutes);
app.use('/ingredients', IngredientRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))