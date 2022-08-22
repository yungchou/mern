const { application } = require('express');

const 
  express = require('express'),
  dotenv = require('dotenv').config(),
  thePort = process.env.PORT || 4321
  app = express();

/* API ROUTES TESTING
app.get('/api/goals', (req,res)=> {
  // 1. test with send and text 
  // res.send('GET GOALS')
  // 2. change to json format
  // res.json({message:'GET GOALS'})
  // 3. finalize with status code
  // res.status(200).json({ message:'GET GOALS' })
  })
*/

// ROUTES
app.use('/api/goals', require('./route/goalRoutes'))

app.listen(thePort, ()=>console.log(`server started on ${thePort}`));

