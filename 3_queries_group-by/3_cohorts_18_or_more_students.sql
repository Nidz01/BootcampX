/*
Get all cohorts with 18 or more students.
Order by total students from smallest to greatest.
*/

SELECT cohorts.name, count(*) as student_count
FROM cohorts 
JOIN students
ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(*) >= 18
ORDER BY student_count;

