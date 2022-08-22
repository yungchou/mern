// @desc    create goals
// @reoute  POST /api/goals
// @access  private
const createGoal = (req,res)=>{
  res.status(200).json({ message:'CREATE/SET GOALS' })
}

// @desc    read goals
// @reoute  GET /api/goals
// @access  private
const readGoal = (req,res)=>{
  res.status(200).json({ message:'READ/GET GOALS' })
}

// @desc    update goals
// @reoute  PUT /api/goals/:id
// @access  private
const updateGoal = (req,res)=>{
  res.status(200).json({ message:`UPDATE GOALS ${req.params.id}` })
}

// @desc    delete goals
// @reoute  DELETE /api/goals/:id
// @access  private
const deleteGoal = (req,res)=>{
  res.status(200).json({ message:`DELETE GOALS ${req.params.id}` })
}

// EXPORT THE FUNTIONS
module.exports = {
  createGoal,
  readGoal,
  updateGoal,
  deleteGoal
}