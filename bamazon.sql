DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id  INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name  VARCHAR(100),
  department_name VARCHAR(100),
  price float,
  stock_quantity integer,
  PRIMARY KEY (item_id )
);

INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Nike', 'Shoes',100.00, 3);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Eggs', 'Food',10.00, 30);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Hat', 'Clothing',10.00, 30);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Coke', 'Drinks',20.00, 3);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('TV', 'Electronics',800.00, 50);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('USB', 'Electronics',10.00, 30);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Sweater', 'Clothing',10.00, 10);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Speakers', 'Electronics',20.00, 3);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Forks', 'Utinsils',1.00, 10);
INSERT INTO products (product_name, department_name,price, stock_quantity) values ('Hotdogs', 'Food',2.00, 100);