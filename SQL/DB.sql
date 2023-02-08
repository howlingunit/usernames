CREATE DATABASE usernames;

CREATE table usernames (
    id serial primary key,
    username VARCHAR(100)
);

insert into usernames (username) VALUES
('test1'),
('test2'),
('test3'),
('test1');