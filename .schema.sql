DROP DATABASE movie_lister;
CREATE DATABASE movie_lister;

USE movie_lister;

CREATE TABLE movies (
  id SERIAL,
  title VARCHAR(100),
  watched BOOLEAN
);