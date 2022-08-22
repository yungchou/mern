const 
  express = require('express'),
  router = express.Router()

/*
// CRUD v1
router.post('/', (req,res)=>{
  res.status(200).json({ message:'CREATE/SET GOALS' })
})
router.get('/', (req,res)=>{
  res.status(200).json({ message:'READ/GET GOALS' })
})
router.put('/:id', (req,res)=>{
  res.status(200).json({ message:`UPDATE GOALS ${req.params.id}` })
})
router.delete('/:id', (req,res)=>{
  res.status(200).json({ message:`DELETE GOALS ${req.params.id}` })
})
*/

const {
  createGoal, readGoal, updateGoal, deleteGoal
} = require('../controller/goalController')

/*
//CRUD v2
router.post  ('/'   , createGoal)
router.get   ('/'   , readGoal  )
router.put   ('/:id', updateGoal)
router.delete('/:id', deleteGoal)
*/

// CRUD v3, chaining the commands
router.route('/').post(createGoal).get(readGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
