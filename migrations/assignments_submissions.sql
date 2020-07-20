CREATE TABLE assignments (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255),
  content text,
  day integer,
  chapter integer,
  duration integer
);

CREATE TABLE assignment_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  assignment_id INTEGER REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  duration integer,
  submission_date date
);
