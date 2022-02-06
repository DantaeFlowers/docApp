const db = require('../db/db')

const addNewAppointment = async (appointment) => {
    const newAppointmentQuery = `
            INSERT INTO appointment (patient,doctor,time,day)
                VALUES($/patient/,$/doctor/,$/time/,$/day/)
                RETURNING id, patient, doctor, time, day
    `
    const newAppointment = await db.one(newAppointmentQuery,appointment)
    return newAppointment
}

const getAllAppointments = async () => {
    const getAllAppointmentsQuery = `SELECT * FROM appointments` 
    const data = await db.any (getAllAppointmentsQuery)
    return data
}

module.exports = {
    getAllAppointments,
    addNewAppointment  
}