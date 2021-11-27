# 3.1 Basics of Database

A database is an `organized collection of structured information, or data`, typically stored electronically in a computer system.

`Database Management Systems (DBMS)` are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.

## Examples of DBMS

- Oracle
- MySQL
- SQL Server

And we use application for example Node.JS or Spring to communicate with DBMS.

### 3.1.1 Entity

An entity is a real-world thing which can have multiple attributes such as person, place, object, case, concept, etc.

For example, a car is an entity. An attribute of an entity gives us information about the characteristic features of an entity.

\*Difference between Strong and Weak Entity

**Strong Entity:** is not dependent on any other entity in the schema. A strong entity will always have a primary key.

example: Building or Apartment

**Weak Entity:** is dependent on a strong entity to ensure its existence. Unlike a strong entity, a weak entity does not have any primary key.

example: Unit or Room

### 3.1.2 Relation (Table or collection)

Relation is a basic unit that separates and stores information in a database also known as table in relational DB and collection in NoSQL DB. The database manages entity data by putting them into one relation.

**Table and Collection**

| type  | data     | relation   | database |
| ----- | -------- | ---------- | -------- |
| MySql | record   | table      | db       |
| NoSQL | document | collection | db       |

### 3.1.3 Attribute

In general, an attribute is a characteristic and a database component. For example, if there is a `car` entity, 'car number', 'color', 'model', and 'price' can be a attributes.

### 3.1.4 Domain

A data domain is the collection of values that a data element may contain. For example, if we have 'gender' attributes,possible domain would be 'male' , 'female' and 'any'.

### 3.1.5 Field and Record

A record (sometimes called a row or tuple) is a group of fields within a table that are relevant to a specific entity.

Example)

```
CREATE TABLE movie(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    year CHAR(4)
    genre VARCHAR(255)
    released_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY(id)
)
```

### Field Types

\*Number: TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT

| type      | byte | min         | max        |
| --------- | ---- | ----------- | ---------- |
| TINYINT   | 1    | -128        | 255        |
| SMALLINT  | 1    | -32768      | 65535      |
| MEDIUMINT | 1    | -8388608    | 16777215   |
| INT       | 1    | -2147473648 | 4294967295 |
| BIGINT    | 1    | -263        | 264-1      |

\*Date

| type      | range                                     | byte |
| --------- | ----------------------------------------- | ---- |
| DATE      | 1000-01-01 ~ 9999-12-31                   | 3    |
| DATETIME  | 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59 | 8    |
| TIMESTAMP | 1970-01-01 00:00:01 ~ 2038-01-19 03:14:07 | 4    |

\*Character: CHAR, VARCHAR, TEXT, BLOB, ENUM, SET

## 3.1.6 Relationship

1:1,1:N, N:M

## 3.1.7 Key

: Primary Key, Foreign Key, Candidate key, Alternate key, Super key.

PK is a key in a relational database that is unique for each record.
