const express = require ('express')
const router = express.Router()
const db = require('../db/db')
const apointmentsQueries = require ('../queries/appointmentsQueries')

router.get('/all', async (req,res) => {
    try{
        let appointments = await db.any(`SELECT * FROM appointments`)
        console.log('appointments', appointments)
        res.json({
            payload: appointments,
            message:`Retreived all available appointments`
        })
    }catch (error) {
            res.status(500)
            res.json({
                message:`Error, failed to retreive data`
            })
            console.log(error)
        }
})

router.post ('/newAppointment', async (req,res) =>{
    let insertQuery = `INSERT INTO appointments (patient_id, doctor_id)
        VALUES ($1,$2,$3);`  
    
    let patient_id = req.body.patient_id
    let doctor_id = req.body.doctor_id

    let body = {
        patient_id: patient_id,
        doctor_id: doctor_id
    }

    try{
        await db.none(insertQuery,[patient_id, doctor_id])
        res,json ({
            status : 'success',
            message: 'Appointment created',
            body: body
        })
    }catch (error){
        console.log(error)
        res.json({
            message: error.detail
        })
    }
})

