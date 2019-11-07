# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A Good Data Model

- captures **all** the data required
- captures **only** the data required
- reflects reality (from the system's perspective)
- flexible, able to evolve with the system
- the

## Components

- entities (nouns: zoo, animal, species), like a resource --> tables
- properties -->  columns or fields
- relationships --> Foreign Keys (FK)

## Workflow

- identify entities
- identify the properties
- identify relationships

## Relationships

- one-to-one
- one-to-many (most common)
- many-to-many (smoke-and-mirrors)

_Many animals in one species_.
_There can be more than one animal in a zoo_.
_An animal could have lived in more than one zoo_.

## Mantras

- every table must have a **Primary Key**
- work on **two or three** entities at a time
- **one-to-many** relationships are modeled using a **Foreign Key**
- the **Foreign Key** always goes in the **many** side
- the **Foreign Key Column** must be the **same type** as the **Primary Key** it references
- **many-to-many** relationships must be the **same type** as the **Primary Key** it references
- the
