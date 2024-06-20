CREATE DATABASE `imersao17`;

use `imersao17`;

CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `imersao17`.`categories` (`id`,`name`) VALUES ("6b4c28f4-6831-495a-9444-19c93452faa3", "Relogios");
INSERT INTO `imersao17`.`categories` (`id`,`name`) VALUES ("7c0ca0d4-ff23-4bd7-b131-c563067c4b43", "Eletronicos");

CREATE TABLE `products`(
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories_idx` (`category_id`)
);

INSERT INTO `imersao17`.`products` (`id`,`name`,`description`,`price`,`category_id`,`ìmage_url`)
VALUES("7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k","Product 1","Description 1",100,"6b4c28f4-6831-495a-9444-19c93452faa3","http://localhost:9000/products/1.png"),
("66805003-f9a2-4772-b577-d5ff66207707","Product 2", "Description 2", 200, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/2.png"),
("121829b9-e9f9-4ca9-bd14-b087afedd587","Product 3", "Description 3", 300, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/3.png"),
("ef3d9a49-4c73-4192-97dd-55e21c0e2707","Product 4", "Description 3", 400, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/4.png");