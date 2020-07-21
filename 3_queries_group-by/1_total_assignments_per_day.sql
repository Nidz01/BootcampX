/*
Get the total number of assignments for each day of bootcamp.
*/

SELECT assignments.day as day, count(*) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;