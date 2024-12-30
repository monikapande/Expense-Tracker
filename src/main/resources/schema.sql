CREATE TABLE USERS (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
CREATE TABLE category (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE EXPENSE (
    id BIGINT PRIMARY KEY,
    expense_date TIMESTAMP NOT NULL,
    description VARCHAR(255),
    location VARCHAR(255),
    amount BIGINT NOT NULL,
    category_id BIGINT, -- Foreign key to the Category table
    users_id BIGINT, -- Foreign key to the Users table
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES CATEGORY(id),
    CONSTRAINT fk_user FOREIGN KEY (users_id) REFERENCES USERS(id)
);
