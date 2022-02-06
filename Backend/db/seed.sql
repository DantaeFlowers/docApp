DROP DATABASE IF EXISTS docApp;


CREATE DATABASE docApp;

\c appointments

CREATE TABLE doctors (
    doc_id SERIAL PRIMARY KEY,
    doc_name VARCHAR NOT NULL
);

CREATE TABLE patients (
    pat_id SERIAL PRIMARY KEY,
    pat_name VARCHAR
);

CREATE TABLE appointments (
    app_id SERIAL PRIMARY KEY,
    doctor_id INT REFERENCES doctors (doc_id),
    patient_id INT REFERENCES patients (pat_id)
);

INSERT INTO doctors (doc_name)
    VALUES ('Mrs. Gene'),('Mr. Dot');

INSERT INTO patients (pat_name)
    VALUES ('Dean Williams'), ('Krystal Kapersky');

INSERT INTO appointments (doctor_id, patient_id)
    VALUES (1,2), (2,1);