const express = require('express')
const app = express()
const announcementRoute = express.Router()

// Announcement model
let Announcement = require('../models/Announcement')

// Add Announcement
announcementRoute.route('/create2').post((req, res, next) => {
  Announcement.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("Add Announcement", data);
      res.json(data)
    }
  })
})

// Get All Announcement
announcementRoute.route('/announcements').get((req, res) => {
  
  // const {addannouncement,addannouncementbegin, addannouncementend} = req.body; 
    
  //   const data = Announcement({
  //     addannouncement,addanouncementbegin:addannouncementbegin,addannouncementend
  //   })
  
  
    Announcement.find((error, data) => {
      // console.log("element", data);

      // data.forEach(element => {
      //   // console.log("element", element);
      //   if (error) {
      //       return next(error)
      //     } else {
      //       console.log("res[]", element);
      //       res.json(element)
      //     }
      // });

      //------
  //   if (error) {
  //     return next(error)
  //   } else {
  //     res.json(
  //       data.forEach(element => {
  //         // console.log("res[]", element);
  //       })
  //       )
  //   }
  // })
  //----------
  // if (error) {
  //   return next(error)
  // } else {
  //   res.json(data)
  // }
  if (error) {
    return res.status(201).json(error)
  } else {
    console.log("All Announcement", data);
    res.status(200).json(data)
  }
})
})

// Get single announcement
announcementRoute.route('/read2/:id').get((req, res) => {
    Announcement.findById({_id : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update announcement
announcementRoute.route('/update2/:id').put((req, res, next) => {
  
  console.log("req.params.id ", req.params.id);
    Announcement.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      console.log("DATA:- ", data);
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

// Delete announcement
announcementRoute.route('/delete2/:id').delete((req, res, next) => {
    Announcement.findOneAndRemove({_id : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = announcementRoute
