# API DOCUMENTATION FOR OWNER AND BOOKSTORE

## Signup

### Endpoint
POST /signup

#### Description
This endpoint allows a user to sign up by creating a new owner account.

### Request Parameters
| Parameter   | type   | Description                |
| ----------  | -----  | -----------                |
|`name`       | string | The name of the owner      |
|`email`      | string | The email address of owner |
|`password`   | string | The password for the owner |

### Request 


```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response error 
Status: 201 Created if the owner is successfully created.
Status: 409 Conflict if an owner with the provided email already exists.
Status: 500 Internal Server Error if there was an error creating the owner.

### Response Successful Signup

```json
{
  "message": "Owner successfully created.",
  "owner": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```
### Owner Already Exists
```json
{
  "message": "Owner already exists."
}
```

### Internal Server Error
```json
{
  "message": "Failed to create owner."
}
```

## Login

### Endpoint
POST /signup

#### Description
This endpoint allows a user to sign up by creating a new owner account.

### Request Parameters
| Parameter   | type   | Description                |
| ----------  | -----  | -----------                |
|`email`      | string | The owner's email          |
|`password`   | string |The owner's password        |

### Request 


```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response error 
Status: 200 OK if the login is successful.
Status: 401 Unauthorized if the provided password is invalid.
Status: 404 Not Found if the owner with the given email does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Response Successful login

```json
{
  "message": "Login successful.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNjM0MTI2MzI2LCJleHAiOjE2MzQxMjY2MjZ9._xNz9oQ1tbvzD8KmYn2lH2zUqZ3X5Uv0aRULXq_6o7Y"
}
```
### Invalid Password

```json
{
  "message": "Invalid password."
}
```

### Internal Server Error
```json
{
  "message": "Internal server error."
}
```



# API Documentation Bookstores

## Get All Bookstores


### Response error 
Status: 200 OK if bookstores are found.
Status: 404 Not Found if no bookstores are found.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Response 

```json
[
  {
    "id": 1,
    "name": "Bookstore A",
    "location": "City A"
  },
  {
    "id": 2,
    "name": "Bookstore B",
    "location": "City B"
  }
]
```

### Response error

```json
{
  "error": "Bookstores not found"
}
```
## Create Bookstore

### Endpoint
POST /

#### Description
This endpoint creates a new bookstore.


### Request Parameters
| Parameter  | type   | Description                |
| ---------- | -----  | -----------                |
|`name`      | string |  name of the bookstore     |
|`location`  | string | location of the bookstore  |


### Request

```json
{
  "name": "Bookstore A",
  "location": "City A"
}
```
### Response
Status: 201 Created if the bookstore is successfully created.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Creation
```json
{
  "bookstore": {
    "id": 1,
    "name": "Bookstore A",
    "location": "City A"
  },
  "message": "Bookstore created"
}
```

### Internal Server Error
```json
{
  "error": "Failed to create bookstore"
}
```


## Update Bookstore

### Endpoint
`PUT /:id`

#### Description
This endpoint updates an existing bookstore.

### Request Parameters
| Parameter  | type   | Description                |
| ---------- | -----  | -----------                |
|`name`      | string |  name of the bookstore     |
|`location`  | string | location of the bookstore  |


### Request

```json
{
  "name": "Bookstore A",
  "location": "City A"
}
```
### Response
Status: 200 OK if the bookstore is successfully updated.
Status: 404 Not Found if the bookstore with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Update
```json
{
  "id": 1,
  "name": "Updated Bookstore A",
  "location": "Updated City A"
}
```

### Internal Server Error
```json
{
  "error": "Bookstore not found"
}
```



## Delete Bookstore


### Endpoint
`DELETE /:id`

#### Description
This endpoint deletes an existing bookstore.

### Response
Status: 200 OK if the bookstore is successfully deleted.
Status: 404 Not Found if the bookstore with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Deletion
```json
{
  "id": 1,
  "name": "Deleted Bookstore",
  "location": "Deleted City"
}
```

### Internal Server Error
```json
{
  "error": "Bookstore not found"
}
```