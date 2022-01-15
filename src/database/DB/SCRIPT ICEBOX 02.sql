INSERT INTO users (
name,
email,
password,
image
)

VALUES(
'Diego Martínez',
'diego123@hotmail.com',
'hola123',
'default.png'
),(
'Luna Gatica',
'luna123@hotmail.com',
'luna123',
'default.png'
),(
'Facu Maldonado',
'facu123@hotmail.com',
'facu123',
'default.png'
),(
'Pablo Cruz',
'pablo123@hotmail.com',
'pablo123',
'default.png'
),(
'Pepito Peréz',
'pepito123@hotmail.com',
'pepito123',
'default.png'
),(
'George Washington',
'usa123@hotmail.com',
'usa123',
'default.png'
),(
'Albert Einstein',
'relativo123@hotmail.com',
'mc123',
'default.png'
),(
'Eminem',
'eminem123@hotmail.com',
'rap123',
'default.png'
),(
'Freddie Mercury',
'queen123@hotmail.com',
'queen123',
'default.png'
),(
'Michael Jackson',
'beat123@hotmail.com',
'MJ123',
'default.png'
);

Select * from users;

SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET SESSION sql_mode = 'NO_ENGINE_SUBSTITUTION';
