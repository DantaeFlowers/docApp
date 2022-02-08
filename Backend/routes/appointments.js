const express = require ('express')
const router = express.Router()
const db = require('../db/db')


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

router.get('/doctors/:id', async (req, res) => {
    let id = req.params.id
    try {
        let appointments = await db.any(`SELECT * FROM appointments WHERE doctor_id = ${id}`);
        res.json({
            payload: appointments,
            message: `success. retrieved all appointments for this doctor`
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: `Error. Something went wrong!`
        })
        console.log(error);
    }
 })

router.post ('/newAppointment', async (req,res) =>{
    let insertQuery = `INSERT INTO appointments (doctor_id, patient)
        VALUES ($1,$2);`  
    
    let doctor_id = req.body.doctor_id
    let patient = req.body.patient

    let body = {
        doctor_id: doctor_id,
        patient: patient
    }

    try{
        await db.none(insertQuery,[doctor_id,patient])
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

module.exports = router;