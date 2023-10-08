
# API Documentation Bookstores for Book and Author
# [ DATABASE Link ](https://node-deployment-8sez.onrender.com/)
## Get All Books
### Endpoint
`GET /`

#### Description
This endpoint retrieves all books.


### Response error 
Status: 200 OK if books are found.
Status: 404 Not Found if no books are found.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Response 

```json
[
  {
    "id": 1,
    "title": "Book A",
    "price": 9.99,
    "image": "https://example.com/book-a.jpg"
  },
  {
    "id": 2,
    "title": "Book B",
    "price": 14.99,
    "image": "https://example.com/book-b.jpg"
  }
]
```

### Response error

```json
{
  "error": "Books not found"
}
```


## Create Book

### Endpoint
`POST /`

#### Description
This endpoint creates a new book


### Request Parameters
| Parameter   | type   | Description                 |
| ----------  | -----  | -----------                 |
| `title`     | string |  The title of the book      |
| `price`     | string | The price of the book       |
| `image`     | string | The URL of the book's image |

### Request

```json
{
  "title": "Book A",
  "price": 9.99,
  "image": "https://example.com/book-a.jpg"
}
```
### Response
Status: 201 Created if the book is successfully created.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Creation
```json
{
  "id": 1,
  "title": "Book A",
  "price": 9.99,
  "image": "https://example.com/book-a.jpg"
}
```

### Internal Server Error
```json
{
  "error": "Failed to create book"
}
```


## Update Book

### Endpoint
`PUT /:id`

#### Description
This endpoint updates an existing book

### Request Parameters
| Parameter   | type   | Description                         |
| ----------  | -----  | -----------                         |
| `title`     | string | The Updated title of the book       |
| `price`     | string | The Updated price of the book       |
| `image`     | string | The Updated URL of the book's image |


### Request

```json
{
  "title": "Updated Book A",
  "price": 19.99,
  "image": "https://example.com/updated-book-a.jpg"
}
```
### Response
Status: 200 OK if the book is successfully updated.
Status: 404 Not Found if the book with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Update
```json
{
  "id": 1,
  "title": "Updated Book A",
  "price": 19.99,
  "image": "https://example.com/updated-book-a.jpg"
}
```

### Internal Server Error
```json
{
  "error": "Book not found"
}
```



## Delete Book 


### Endpoint
`DELETE /:id`

#### Description
This endpoint deletes an existing book.

### Response
Status: 200 OK if the book is successfully deleted.
Status: 404 Not Found if the book with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Deletion
```json
{
  "id": 1,
  "title": "Deleted Book",
  "price": 9.99,
  "image": "https://example.com/deleted-book.jpg"
}
```

### Internal Server Error
```json
{
  "error": "Book not found"
}
```


# AUTHOR 

## Get All Author

### Endpoint
`GET /`

#### Description
This endpoint retrieves all Author.


### Response error 
Status: 200 OK if authors are found.
Status: 404 Not Found if no authors are found.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Response 

```json
[
  {
    "id": 1,
    "name": "Author A"
  },
  {
    "id": 2,
    "name": "Author B"
  }
]
```

### Response error

```json
{
  "error": "Authors not found"
}
```


## Create Author

### Endpoint
`POST /`

#### Description
This endpoint creates a new Author


### Request Parameters
| Parameter   | type   | Description                 |
| ----------  | -----  | -----------                 |
| `name `     | string |  The name of the Author     |
 

### Request

```json
{
  "name": "Author A"
}
```
### Response
Status: 201 Created if the author is successfully created.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Creation
```json
{
  "id": 1,
  "name": "Author A"
}
```

### Internal Server Error
```json
{
  "error": "Failed to create author"
}
```


## Update author

### Endpoint
`PUT /:id`

#### Description
This endpoint updates an existing author

### Request Parameters
| Parameter   | type   | Description                         |
| ----------  | -----  | -----------                         |
| `name`      | string | The updated name of the author      |
 


### Request

```json
{
  "name": "Updated Author A"
}
```
### Response
Status: 200 OK if the author is successfully updated.
Status: 404 Not Found if the author with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Update
```json
{
  "id": 1,
  "name": "Updated Author A"
}
```

### Internal Server Error
```json
{
  "error": "Failed to update author"
}
```



## Delete Author 


### Endpoint
`DELETE /:id`

#### Description
This endpoint deletes an existing Author.

### Response
Status: 200 OK if the author is successfully deleted.
Status: 404 Not Found if the author with the given ID does not exist.
Status: 500 Internal Server Error if there was an internal server error.

### Successful Deletion
```json
{
  "id": 1,
  "name": "Deleted Author A"
}
```

### Internal Server Error
```json
{
  "error": "Failed to delete author"
}
```
