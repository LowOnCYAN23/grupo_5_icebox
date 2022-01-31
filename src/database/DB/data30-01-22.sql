-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: icebox-db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_products` (
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `fk_id_user` int NOT NULL,
  `fk_id_product` int NOT NULL,
  `fk_id_purchase_order` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `total_product_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_cart`),
  UNIQUE KEY `id_cart_UNIQUE` (`id_cart`),
  KEY `FK_id_user_idx` (`fk_id_user`),
  KEY `FK_product_idx` (`fk_id_product`),
  KEY `FK_id_order_idx` (`fk_id_purchase_order`),
  KEY `FK_id_price_idx` (`total_product_price`),
  CONSTRAINT `FK_id_product` FOREIGN KEY (`fk_id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `FK_id_user` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_products`
--

LOCK TABLES `cart_products` WRITE;
/*!40000 ALTER TABLE `cart_products` DISABLE KEYS */;
INSERT INTO `cart_products` VALUES (1,1,10,1,1,3200.00),(2,2,9,3,2,5200.00),(3,3,8,2,3,3500.00),(4,4,7,10,4,15000.00),(5,5,6,8,5,8500.00),(6,6,5,7,6,6520.00),(7,7,4,2,7,8500.00),(8,8,3,1,8,6500.00),(9,9,2,8,9,3420.00),(10,10,1,1,10,2900.00);
/*!40000 ALTER TABLE `cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id_category`),
  UNIQUE KEY `id_UNIQUE` (`id_category`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Accesorios para consolas'),(10,'Accesorios para PC Gaming'),(2,'Componentes de PC'),(9,'Consolas'),(8,'Máquinas de juegos'),(4,'Otros'),(7,'Repuestos de Consolas'),(6,'Repuestos de PC Gaming'),(3,'Tablets y accesorios'),(5,'Videojuegos');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id_color` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id_color`),
  UNIQUE KEY `id_UNIQUE` (`id_color`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (5,'Amarillo'),(10,'Azul'),(2,'Blanco'),(3,'Café'),(6,'Gris'),(8,'Morado'),(9,'Negro'),(1,'Rojo'),(4,'Rosado'),(7,'Verde');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id_genre` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id_genre`),
  UNIQUE KEY `category_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (10,'Acción'),(9,'Arcade'),(3,'Carreras'),(8,'Deportes'),(12,'Equipamiento'),(7,'Estrategia'),(5,'Juegos de Mesa'),(4,'Rol'),(2,'Shooters'),(6,'Simulación'),(1,'Terror'),(11,'Video Juegos');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(45) NOT NULL,
  `description_product` text NOT NULL,
  `product_image` varchar(25) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `fk_color` int DEFAULT NULL,
  `fk_category` int DEFAULT NULL,
  `fk_trademark` int DEFAULT NULL,
  `fk_genre` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `product_id_UNIQUE` (`id_product`),
  KEY `FK_id_color_idx` (`fk_color`),
  KEY `FK_id_category_idx` (`fk_category`),
  KEY `FK_id_genre_idx` (`fk_genre`),
  KEY `FK_id_trademark_idx` (`fk_trademark`),
  CONSTRAINT `fk_category` FOREIGN KEY (`fk_category`) REFERENCES `categories` (`id_category`),
  CONSTRAINT `fk_color` FOREIGN KEY (`fk_color`) REFERENCES `colors` (`id_color`),
  CONSTRAINT `fk_genre` FOREIGN KEY (`fk_genre`) REFERENCES `genres` (`id_genre`),
  CONSTRAINT `fk_trademark` FOREIGN KEY (`fk_trademark`) REFERENCES `trademarks` (`id_trademark`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Xbox 360','Consola de Videojuegos','Default01.jpg',1100.00,1,10,10,11),(2,'Nintendo DS Lite','Consola de Videojuegos','Default02.jpg',4000.00,9,10,10,11),(3,'The Last of Us','Videojuegos','Default03.jpg',2200.00,9,5,6,11),(4,'Halo Infinite','Videojuegos','Default04.jpg',2600.00,2,5,5,11),(5,'Monitor LG OLG 250','Monitor para PC Gaming','Default05.jpg',5000.00,1,4,11,12),(6,'Nintendo Switch Lite','Consola de Videojuegos','Default06.jpg',1100.00,9,9,10,11),(7,'Nintendo 3DS XL','Consola de Videojuegos','Default07.jpg',2000.00,5,9,10,11),(8,'Playstation 3','Consola de Videojuegos','Default08.jpg',1000.00,6,9,12,11),(9,'PC Gaming RTX 3060','Consola PC Gaming ','Default09.jpg',3000.00,9,2,1,11),(10,'Playstation 4','Consola de Videojuegos','Default010.jpg',1500.00,8,9,12,11);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_orders`
--

DROP TABLE IF EXISTS `purchase_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_orders` (
  `id_purchase_order` int NOT NULL AUTO_INCREMENT,
  `fk_id_user` int NOT NULL,
  `shipping` varchar(15) NOT NULL,
  `payment_method` varchar(15) NOT NULL DEFAULT 'credit_card',
  PRIMARY KEY (`id_purchase_order`),
  UNIQUE KEY `id_UNIQUE` (`id_purchase_order`),
  KEY `FK_user_idx` (`fk_id_user`),
  CONSTRAINT `FK_user` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_orders`
--

LOCK TABLES `purchase_orders` WRITE;
/*!40000 ALTER TABLE `purchase_orders` DISABLE KEYS */;
INSERT INTO `purchase_orders` VALUES (11,1,'Nacional','Efectivo'),(12,7,'Nacional','Débito'),(13,6,'Internacional','Crédito'),(14,3,'Internacional','Débito'),(15,5,'Nacional','Crédito'),(16,9,'Internacional','Crédito'),(17,10,'Nacional','Efectivo'),(18,2,'Nacional','Débito'),(19,4,'Internacional','Crédito'),(20,8,'Nacional','Efectivo');
/*!40000 ALTER TABLE `purchase_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trademarks`
--

DROP TABLE IF EXISTS `trademarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trademarks` (
  `id_trademark` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id_trademark`),
  UNIQUE KEY `id_UNIQUE` (`id_trademark`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trademarks`
--

LOCK TABLES `trademarks` WRITE;
/*!40000 ALTER TABLE `trademarks` DISABLE KEYS */;
INSERT INTO `trademarks` VALUES (1,'Activision'),(2,'Atari'),(3,'Bandai'),(4,'Blizzard'),(6,'Capcom'),(7,'Epic Games'),(8,'Konami'),(11,'LG'),(9,'Microsoft'),(10,'Nintendo'),(12,'PlayStation'),(5,'Riot Games');
/*!40000 ALTER TABLE `trademarks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_users` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(85) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `image` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `id_UNIQUE` (`id_users`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alberto Juarez','betocasella@gmail.com','dñasdf','dfljas.jpg'),(2,'Carlos Espinoza','tararita@gmail.com','sdfasf','gadsfs.jpg'),(3,'Celeste Correa','lamaslinda@gmail.com','asdfass','sdfas.png'),(4,'Abel Sanches','elamigo@yahooo.com','asfeag','2n23rfds.jpg'),(5,'Jhon Salchi','todoonada@petrol.com','3fsdf3','capo.jpg'),(6,'Estewart Maxwell','gringo33r2@tatoo.com','asr3','tormenta.jpg'),(7,'Elisaber Marshall','quee4124@gmail.com','a3523ds','queennn.jpg'),(8,'Miriam Tomphson','clarisatt@gamil.com','323wdsa','erlasr.jpg'),(9,'Thomas Junior','electrician232@aol.com','343523sd','pearl.jpg'),(10,'Lena Kauper','theheaven@gmai.com','2wradd2','milook.jpg'),(11,'Diego Martínez','diego123@hotmail.com','hola123','default.png'),(12,'Luna Gatica','luna123@hotmail.com','luna123','default.png'),(13,'Facu Maldonado','facu123@hotmail.com','facu123','default.png'),(14,'Pablo Cruz','pablo123@hotmail.com','pablo123','default.png'),(15,'Pepito Peréz','pepito123@hotmail.com','pepito123','default.png'),(16,'George Washington','usa123@hotmail.com','usa123','default.png'),(17,'Albert Einstein','relativo123@hotmail.com','mc123','default.png'),(18,'Eminem','eminem123@hotmail.com','rap123','default.png'),(19,'Freddie Mercury','queen123@hotmail.com','queen123','default.png'),(20,'Michael Jackson','beat123@hotmail.com','MJ123','default.png'),(81,'Pedro El escamoso','everest@gmail.com','$2a$10$SYaF1t4ciqor9','1643422315607 _img.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-30 23:31:32
