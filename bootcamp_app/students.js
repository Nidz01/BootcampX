/* Using node-postgres, we can connect to our database 
*/
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'bootcampx',
  password: '123'
});

// Query 1
/*
pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));
*/
// Query 2
/*
pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
});
*/
// Query 3
/*
pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});
*/
// Query 4 (allow a user to specify a cohort name and the limit.)
const [ , , cohort, limit]= process.argv

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id
WHERE cohorts.name Like '%${cohort}%'
LIMIT ${limit};
`) 
.then(res => {
  console.log(res.rows)
  res.rows.forEach(user => {

    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
