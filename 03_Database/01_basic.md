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

*Difference between Strong and Weak Entity

**Strong Entity:** is not dependent on any other entity in the schema. A strong entity will always have a primary key. 

example: Building or Apartment

**Weak Entity:**  is dependent on a strong entity to ensure its existence. Unlike a strong entity, a weak entity does not have any primary key. 

example: Unit or room
