
insert into USERS values (1,'Siamak', 'Codeengine11@gmail.com');
insert into USERS values (2,'John', 'John@john.com');
insert into USERS values (3,'Adam', 'adam@adam.com');


insert into category values (1,'Travel');
insert into category values (2,'Auto Loan');
insert into category  values (3,'Travel');


insert into expense (id, description, expense_date, location, amount, category_id, users_id) values (100, 'New York Business Trip', '2019-06-16 17:00:00', 'USA' , 10, 1, 1);
insert into expense (id, description, expense_date, location, amount, category_id, users_id) values (101,'Ford Mustang Payment','2019-06-15 15:00:00', 'INDIA', 20,2,2);
insert into expense (id, description, expense_date, location, amount, category_id, users_id) values(102,'Grand Canyon Trip With Family','2019-06-15 15:00:00','Arizona', 30,3,1);

