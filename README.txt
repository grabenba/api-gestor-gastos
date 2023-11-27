# Enpoints:

GET /v1/api/status
POST /v1/ap/users
POST /v1/api/users
GET /v1/apiusers
GET /v1/api/users
GET /v1/api/users
POST /v1/api/users
GET /users/vxZDzKEfwt1YOuo5YHU8/movements
GET /v1/api/users/vxZDzKEfwt1YOuo5YHU8/movements
POST /v1/api/users/vxZDzKEfwt1YOuo5YHU8/movements

POST /v1/api/users/auth/token

Clase 23 Nov crear un user, agregarle el token y consultar con el token
POST /v1/api/users  // creo un nuevo user -- sin login
POST /v1/api/users/auth/token  // login del user: genera el token
GET /v1/api/users/me  // Get user con Token

POST /v1/api/users/me/movements
GET /v1/api/users/me/movements