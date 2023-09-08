# test-alicunda



# Se usó MONGODB para el API
# Endpoints


# BOOKS

GET http://localhost:8081/api/books




GET http://localhost:8081/api/book/id



POST http://localhost:8081/api/book

{
    "title": "string",
    "chapters": 5,
    "pages": 6,
    "authors": ["64fadb35a8ec88fa60768820"] (Id del author)
}

# AUTHORS

GET http://localhost:8081/api/authors


POST http://localhost:8081/api/author

{
    "name": "hola1",
    "books": ["64fadb35a8ec88fa60768820"] (Id del libro)
}




