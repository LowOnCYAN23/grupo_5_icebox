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

SELECT * FROM users;

INSERT INTO trademarks (
name
)
VALUES(
'Activision'
),(
'Atari'
),(
'Bandai'
),(
'Blizzard'
),(
'Riot Games'
),(
'Capcom'
),(
'Epic Games'
),(
'Konami'
),(
'Microsoft'
),(
'Nintendo'
);

SELECT * FROM trademarks;

INSERT INTO purchase_orders(
fk_id_user,
shipping,
payment_method
)
VALUES(
1,
'Nacional',
'Efectivo'
),(
7,
'Nacional',
'Débito'
),(
6,
'Internacional',
'Crédito'
),(
3,
'Internacional',
'Débito'
),(
5,
'Nacional',
'Crédito'
),(
9,
'Internacional',
'Crédito'
),(
10,
'Nacional',
'Efectivo'
),(
2,
'Nacional',
'Débito'
),(
4,
'Internacional',
'Crédito'
),(
8,
'Nacional',
'Efectivo'
);

SELECT * from purchase_orders;

INSERT INTO colors(
name
)
VALUES (
'Rojo'
),(
'Blanco'
),(
'Café'
),(
'Rosado'
),(
'Amarillo'
),(
'Gris'
),(
'Verde'
),(
'Morado'
),(
'Negro'
),(
'Azul'
);

SELECT * FROM colors;

INSERT INTO categories (
name
)
VALUES(
'Accesorios para consolas'
),(
'Componentes de PC'
),(
'Tablets y accesorios'
),(
'Otros'
),(
'Videojuegos'
),(
'Repuestos de PC Gaming'
),(
'Repuestos de Consolas'
),(
'Máquinas de juegos'
),(
'Consolas'
),(
'Accesorios para PC Gaming'
);

SELECT * FROM categories;

INSERT INTO genres (
name
)
VALUES(
'Terror'
),(
'Shooters'
),(
'Carreras'
),(
'Rol'
),(
'Juegos de Mesa'
),(
'Simulación'
),(
'Estrategia'
),(
'Deportes'
),(
'Arcade'
),(
'Acción'
);

SELECT * FROM genres;

INSERT INTO products(
name_product,
description_product,
product_image,
price
)
VALUES(
'Xbox 360',
'Consola de Videojuegos',
'Default01.jpg',
1100
),(
'Nintendo DS Lite',
'Consola de Videojuegos',
'Default02.jpg',
4000
),(
'The Last of Us',
'Videojuegos',
'Default03.jpg',
2200
),(
'Halo Infinite',
'Videojuegos',
'Default04.jpg',
2600
),(
'Monitor LG OLG 250',
'Monitor para PC Gaming',
'Default05.jpg',
5000
),(
'Nintendo Switch Lite',
'Consola de Videojuegos',
'Default06.jpg',
1100
),(
'Nintendo 3DS XL',
'Consola de Videojuegos',
'Default07.jpg',
2000
),(
'Playstation 3',
'Consola de Videojuegos',
'Default08.jpg',
1000
),(
'PC Gaming RTX 3060',
'Consola PC Gaming ',
'Default09.jpg',
3000
),(
'Playstation 4',
'Consola de Videojuegos',
'Default010.jpg',
1500
);

SELECT * from products;

INSERT INTO cart_products(
fk_id_user,
fk_id_product,
fk_id_purchase_order,
quantity,
total_product_price
)
VALUES(
1,
10,
1,
1,
3200
),(
2,
9,
3,
2,
5200
),(
3,
8,
2,
3,
3500
),(
4,
7,
10,
4,
15000
),(
5,
6,
8,
5,
8500
),(
6,
5,
7,
6,
6520
),(
7,
4,
2,
7,
8500
),(
8,
3,
1,
8,
6500
),(
9,
2,
8,
9,
3420
),(
10,
1,
1,
10,
2900
);

SELECT * FROM cart_products;

 





