/*
Get the total number of assignments for each day of bootcamp.
only return rows where total assignments is greater than or equal to 10.
*/

SELECT assignments.day as day, count(*) as total_assignments
FROM assignments
GROUP BY assignments.day
HAVING count(*) >= 10
ORDER BY assignments.day;