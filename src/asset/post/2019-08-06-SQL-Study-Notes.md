## 1. SELECT Statement

### 1.1 SELECT
```sql
SELECT column1, column2, column3 FROM table_name;
SELECT * FROM table_name;
```

### 1.2 SELECT DISTINCT
```sql
SELECT DISTINCT column1, column2, column3 FROM table_name;
SELECT DISTINCT * FROM table_name;
// Following SQL statement lists the number of different (distinct) customer countries.
// COUNT(DISTINCT column_name) is not supported in Microsoft Access databases.
SELECT COUNT(DISTINCT Country) FROM Customers;
//Here is the workaround for MS Access.
SELECT Count(*) AS DistinctCountries FROM (SELECT DISTINCT Country FROM Customers);
```

## 2. WHERE Clause
```sql
// Text fields
SELECT * FROM Customers WHERE Country='Mexico';
// Numeric fields
SELECT * FROM Customers WHERE CustomerID=1;
```

### 2.1 Operators in WHERE Clause
- `=`	Equal	
- `>`	Greater than	
- `<`	Less than	
- `>=` Greater than or equal	
- `<=` Less than or equal	
- `<>` Not equal. Note: In some versions of SQL this operator may be written as !=	
- `BETWEEN`	Between a certain range	
- `LIKE`	Search for a pattern	
- `IN`	To specify multiple possible values for a column

### 2.2 AND, OR and NOT Operators
```sql
// AND Syntax
SELECT column1, column2 FROM table_name WHERE condition1 AND condition2 AND condition3;
// OR Syntax
SELECT column1, column2 FROM table_name WHERE condition1 OR condition2 OR condition3;
// NOT Syntax
SELECT column1, column2 FROM table_name WHERE NOT condition;
```

### 2.3 ORDER BY Syntax
```sql
SELECT column1, column2 FROM table_name ORDER BY column1, column2, ... ASC|DESC;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
```

## 3. INSERT INTO Statement
```sql
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
// If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.
INSERT INTO table_name VALUES (value1, value2, value3);
```

## 4. NULL Value
```sql
// IS NULL Syntax
SELECT column_names FROM table_name WHERE column_name IS NULL;
// IS NOT NULL Syntax
SELECT column_names FROM table_name WHERE column_name IS NOT NULL;
```

## 5. UPDATE Statement
```sql
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
```

## 6. DELETE Statement
```sql
DELETE FROM table_name WHERE condition;
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
// Delete all records
DELETE FROM table_name;
```

## 7. TOP, LIMIT or ROWNUM Clause
The SELECT TOP clause is used to specify the number of records to return.
The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.
```sql
// SQL Server / MS Access Syntax:
SELECT TOP number|PERCENT column_name(s) FROM table_name WHERE condition;
SELECT TOP 50 PERCENT * FROM Customers;

// MySQL Syntax:
SELECT column_name(s) FROM table_name WHERE condition LIMIT number;

// Oracle Syntax:
SELECT column_name(s) FROM table_name WHERE ROWNUM <= number;

// The following SQL statement shows the equivalent example using ROWNUM:
SELECT * FROM Customers WHERE ROWNUM <= 3;
SELECT * FROM Customers WHERE Country='Germany' AND ROWNUM <= 3;
```

## 8. MIN() and MAX() Functions
The MIN() function returns the smallest value of the selected column.
The MAX() function returns the largest value of the selected column.
```sql
// MIN() Syntax
SELECT MIN(column_name) FROM table_name WHERE condition;
SELECT MIN(Price) AS SmallestPrice FROM Products;
// MAX() Syntax
SELECT MAX(column_name) FROM table_name WHERE condition;
SELECT MAX(Price) AS LargestPrice FROM Products;
```

## 9. COUNT(), AVG() and SUM() Functions
The COUNT() function returns the number of rows that matches a specified criteria.
The AVG() function returns the average value of a numeric column.
The SUM() function returns the total sum of a numeric column.
```sql
// COUNT() Syntax
SELECT COUNT(column_name) FROM table_name WHERE condition;
// AVG() Syntax
SELECT AVG(column_name) FROM table_name WHERE condition;
// SUM() Syntax
SELECT SUM(column_name) FROM table_name WHERE condition;
```

## 10. LIKE Operator
The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
There are two wildcards often used in conjunction with the LIKE operator:
- % The percent sign represents zero, one, or multiple characters
- _ The underscore represents a single character
MS Access uses an asterisk (*) instead of the percent sign (%), and a question mark (?) instead of the underscore (_).
```sql
// LIKE Syntax
SELECT column1, column2 FROM table_name WHERE columnN LIKE pattern;
```

### 10.1 Wildcard Characters
Wildcard Characters in MS Access:
*	Represents zero or more characters	"bl* finds bl, black, blue, and blob"
?	Represents a single character	"h?t finds hot, hat, and hit"
[] Represents any single character within the brackets	"h[oa]t finds hot and hat, but not hit"
!	Represents any character not in the brackets	"h[!oa]t finds hit, but not hot and hat"
-	Represents a range of characters	"c[a-b]t finds cat and cbt"
#	Represents any single numeric character	"2#5 finds 205, 215, 225, 235, 245, 255, 265, 275, 285, and 295"

Wildcard Characters in SQL Server:
%	Represents zero or more characters	"bl% finds bl, black, blue, and blob"
_	Represents a single character	"h_t finds hot, hat, and hit"
[]	Represents any single character within the brackets	"h[oa]t finds hot and hat, but not hit"
^	Represents any character not in the brackets	"h[^oa]t finds hit, but not hot and hat"
-	Represents a range of characters	"c[a-b]t finds cat and cbt"

## 11. IN Operator
The IN operator allows you to specify multiple values in a WHERE clause.
The IN operator is a shorthand for multiple OR conditions.
```sql
// IN Syntax
SELECT column_name(s) FROM table_name WHERE column_name IN (value1, value2);
// IN Syntax with another SELECT statement
SELECT column_name(s) FROM table_name WHERE column_name IN (SELECT STATEMENT);
```

## 12. BETWEEN Operator
The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.
The BETWEEN operator is inclusive: begin and end values are included. 
```sql
// BETWEEN Syntax
SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;
SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;
// BETWEEN with IN Clause
SELECT * FROM Products WHERE Price BETWEEN 10 AND 20 AND NOT CategoryID IN (1,2,3);
// BETWEEN text values
SELECT * FROM Products WHERE ProductName BETWEEN 'abcd' AND 'efgh' ORDER BY ProductName;
// NOT BETWEEN text values
SELECT * FROM Products WHERE ProductName NOT BETWEEN 'abcd' AND 'efgh' ORDER BY ProductName;
// BETWEEN dates
SELECT * FROM Orders WHERE OrderDate BETWEEN #01/07/1996# AND #31/07/1996#;
SELECT * FROM Orders WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
```

## 13. SQL Aliases
```sql
// Alias Column Syntax
SELECT column_name AS alias_name FROM table_name;

// Alias Table Syntax
SELECT column_name(s) FROM table_name AS alias_name;

// It requires double quotation marks or square brackets if the alias name contains spaces:
SELECT CustomerName AS Customer, ContactName AS [Contact Person] FROM Customers;

// The following SQL statement creates an alias named "Address" that combine four columns (Address, PostalCode, City and Country):
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers;

// In MySQL use the following:
SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address FROM Customers;

// Multiple tables
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName="Around the Horn" AND c.CustomerID=o.CustomerID;
```

## 14. INNER JOIN
```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers 
ON Orders.CustomerID=Customers.CustomerID;

// JOIN Three Tables
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```

## 15. LEFT JOIN
```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

## 16. RIGHT JOIN
```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```

## 17. FULL OUTER JOIN
```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;

SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```

## 18. Self JOIN
```sql
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;

SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City 
ORDER BY A.City;
```

## 19. UNION Operator
```sql
// UNION Syntax
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

// UNION ALL Syntax
// The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;

//UNION with WHERE
SELECT City, Country FROM Customers
WHERE Country='Germany'
UNION
SELECT City, Country FROM Suppliers
WHERE Country='Germany'
ORDER BY City;
```

## 20. GROUP BY Statement
```sql
// GROUP BY Syntax
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

// The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

// GROUP BY with JOIN
SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;
```

## 21. HAVING Clause
```sql
// HAVING Syntax
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE LastName = 'Davolio' OR LastName = 'Fuller'
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 25;
```

## 22. EXISTS Operator
```sql
SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);
```

## 23. ANY Operator
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
(SELECT column_name FROM table_name WHERE condition);

SELECT ProductName
FROM Products
WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);
```

## 24. ALL Operator
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
(SELECT column_name FROM table_name WHERE condition);

SELECT ProductName
FROM Products
WHERE ProductID = ALL (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);
```

## 25. SELECT INTO Statement
```sql
// Copy all columns into a new table:
SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;

// Copy only some columns into a new table:
SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;

// Create a backup copy
SELECT * INTO CustomersBackup2017
FROM Customers;

// Copy into a new table in another database
SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'
FROM Customers;

// SELECT INTO can also be used to create a new, empty table using the schema of another. Just add a WHERE clause that causes the query to return no data:
SELECT * INTO newtable
FROM oldtable
WHERE 1 = 0;
```

## 26. INSERT INTO  SELECT Statement
```sql
// INSERT INTO SELECT Syntax
// Copy all columns from one table to another table:
INSERT INTO table2
SELECT * FROM table1
WHERE condition;

// Copy only some columns from one table into another table:
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;
```

## 27. CASE Statement
```sql
// CASE Syntax
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;

SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN "The quantity is greater than 30"
    WHEN Quantity = 30 THEN "The quantity is 30"
    ELSE "The quantity is under 30"
END AS QuantityText
FROM OrderDetails;

SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
```

## 28. NULL Functions
```sql
// MySQL IFNULL() or COALESCE()
SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Products;

SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Products;

// SQL Server ISNULL()
SELECT ProductName, UnitPrice * (UnitsInStock + ISNULL(UnitsOnOrder, 0))
FROM Products;
```

## 29. Comment
```sql
// Single Line Comment
--Select all:
SELECT * FROM Customers;

// Multi-line Comment
/*Select all the columns
of all the records
in the Customers table:*/
SELECT * FROM Customers;
```

## 30. CREATE DATABASE Statement
```sql
CREATE DATABASE databasename;
```

## 31. DROP DATABASE Statement
```sql
DROP DATABASE databasename;
```

## 32. CREATE TABLE Statement
```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

// Create table using another table
CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;
```

## 33. DROP TABLE Statement
```sql
DROP TABLE table_name;
```

## 34. TRUNCATE TABLE Statement
The TRUNCATE TABLE statement is used to delete the data inside a table, but not the table itself.
```sql
TRUNCATE TABLE table_name;
```

## 35. ALTER TABLE Statement
```sql
// ADD Column
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE Customers
ADD Email varchar(255);

// DROP Column
ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE Customers
DROP COLUMN Email;

// ALTER/MODIFY Column: To change the data type of a column in a table
// MySQL
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```

## 36. Constraints
The following constraints are commonly used in SQL:
  NOT NULL - Ensures that a column cannot have a NULL value
  UNIQUE - Ensures that all values in a column are different
  PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
  FOREIGN KEY - Uniquely identifies a row/record in another table
  CHECK - Ensures that all values in a column satisfies a specific condition
  DEFAULT - Sets a default value for a column when no value is specified
  INDEX - Used to create and retrieve data from the database very quickly
```sql
// Create Constraints
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);
```

### 36.1 NOT NULL Constraint
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);
```

### 36.2 UNIQUE Constraint
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID,LastName)
);

// UNIQUE Constraint on ALTER TABLE
ALTER TABLE Persons
ADD UNIQUE (ID);

ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);

// DROP a UNIQUE Constraint
ALTER TABLE Persons
DROP INDEX UC_Person;
```

### 36.3 PRIMARY KEY Constraint
The PRIMARY KEY constraint uniquely identifies each record in a table.
Primary keys must contain UNIQUE values, and cannot contain NULL values.
A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);

// PRIMARY KEY is made up of two columns
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);
```

### 36.4 FOREIGN KEY Constraint
A FOREIGN KEY is a key used to link two tables together.
A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.
The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.
```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);
```

### 36.5 CHECK Constraint
CHECK on CREATE TABLE
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
```

CHECK on ALTER TABLE
```sql
ALTER TABLE Persons
ADD CHECK (Age>=18);

ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
```

DROP a CHECK Constraint
```sql
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;
```

### 36.6 DEFAULT Constraint
DEFAULT on CREATE TABLE
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);
```
The DEFAULT constraint can also be used to insert system values, by using functions like GETDATE():
```sql
CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
);
```
DEFAULT on ALTER TABLE
```sql
ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';
```
DROP a DEFAULT Constraint
```sql
ALTER TABLE Persons
```

## 37. CREATE INDEX Statement
CREATE INDEX Syntax
- Creates an index on a table. Duplicate values are allowed.
```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);

CREATE INDEX idx_pname
ON Persons (LastName, FirstName);
```

CREATE UNIQUE INDEX Syntax
- Creates a unique index on a table. Duplicate values are not allowed.
```sql
CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);
```

## 38. DROP INDEX Statement
```sql
ALTER TABLE table_name
DROP INDEX index_name;
```

## 39. AUTO INCREMENT Field
- By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.
```sql
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);
```

To let the AUTO_INCREMENT sequence start with another value, use the following SQL statement.
```sql
ALTER TABLE Persons AUTO_INCREMENT=100;
```

## 40. Dates
MySQL comes with the following data types for storing a date or a date/time value in the database:
- DATE - format YYYY-MM-DD
- DATETIME - format: YYYY-MM-DD HH:MI:SS
- TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
- YEAR - format YYYY or YY
```sql
```

## 41. CREATE VIEW Statement
- A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
- A view always shows up-to-date data! The database engine recreates the data, using the view's SQL statement, every time a user queries a view.
CREATE VIEW Syntax
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

CREATE VIEW [Products Above Average Price] AS
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);
```

Update a VIEW with CREATE OR REPLACE VIEW Statement
```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;```

## 42. MySQL Functions Reference
Refer to https://www.w3schools.com/sql/sql_ref_mysql.asp
