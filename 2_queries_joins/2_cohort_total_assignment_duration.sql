/* Get the total amount of time that all students 
from a specific cohort have spent on all assignments.
*/
SELECT SUM (duration) as total_duration
FROM assignment_submissions
JOIN students
ON assignment_submissions.student_id = students.id
LEFT JOIN cohorts
ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';