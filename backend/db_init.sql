CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,





)

CREATE TABLE products (
    id (int),
    name VARCHAR(50),
    price int,
    on_sale boolean
)

ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

CREATE TABLE restaurants (
    id (int),
    name VARCHAR(50),
    location VARCHAR(50),
    price_range int
);
