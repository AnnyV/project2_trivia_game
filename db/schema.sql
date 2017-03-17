CREATE DATABASE trivia_db;

USE trivia_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL
	PRIMARY KEY (id)
);

CREATE TABLE scores
(
	id int NOT NULL AUTO_INCREMENT,
	score integer(11) NOT NULL,
	user_id integer(11) NOT NULL,
    create_date timestamp NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) references users (id)
);
