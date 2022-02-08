const express = require ('express')
const router = express.Router()
const db = require('../db/db')


router.get('/', async (req,res) => {
    try{
        let doctors = await db.any(`SELECT * FROM doctors`)
        console.log('doctors', doctors)
        res.json({
            payload: doctors,
            message:`Retreived all available doctors`
        })
    }catch (error) {
            res.status(500)
            res.json({
                message:`Error, failed to retreive data`
            })
            console.log(error)
        }
})



module.exports = router;