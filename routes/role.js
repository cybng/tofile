const express = require('express')
const app = express()
const roleRoute = express.Router()

// Employee model
let Role = require('../models/Role')

// Add Employee
roleRoute.route('/create1').post((req, res, next) => {
    Role.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Role
roleRoute.get('/getroles',(req, res) => {
    Role.find((error, data) => {
    if (error) {
      return res.status(201).json(error)
    } else {
      res.status(200).json(data)
    }
  })
})

// Get single role
roleRoute.route('/read1/:id').get((req, res) => {
    Role.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update role
roleRoute.route('/update1/:id').put((req, res, next) => {
    Role.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    },
  )
})

// Delete role
roleRoute.route('/delete1/:id').delete((req, res, next) => {
  console.log("req.params.id", req.params.id);

    Role.findOneAndRemove({_id : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = roleRoute
