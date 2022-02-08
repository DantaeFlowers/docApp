DROP DATABASE if exists docapp;

CREATE DATABASE docapp;

\c docapp

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    doc_name VARCHAR NOT NULL
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    doctor_id INT REFERENCES doctors (id),
    patient VARCHAR
);

INSERT INTO doctors (doc_name)
    VALUES ('Mrs. Gene'),('Mr. Dot');

INSERT INTO appointments (doctor_id, patient)
    VALUES (1, 'Danny Smith'), (2, 'Sarah Jones');
