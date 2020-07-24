/* Using node-postgres, we can connect to our database 
*/
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'bootcampx',
  password: '123'
});

const [ , , cohort]= process.argv

const values = [`%${cohort}%`];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`, values) 
.then(res => {
  res.rows.forEach(user => {

    console.log(`${user.cohort}: ${user.teacher}`);
  })
  pool.end()
}).catch(err => console.error('query error', err.stack));
