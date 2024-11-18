# CS361-microservice

## Communication Contract

This contract defines the guidelines and instructions for interacting with the authentication microservice via its REST API. It outlines how to request and receive data programmatically, including required request parameters and headers.

---

### Endpoint Overview:
- **POST /auth/register**: Registers a new user
- **POST /auth/login**: Logs in a user and returns a JWT token
- **POST /auth/logout**: Logs out a user

#### 1. Account Creation

##### Endpoint:
`POST /auth/register`

##### Request Body:
To create a new user, send a JSON object with `username`, `email` and `password` fields.
- `username`: The username of the user (must be unique)
- `email`: The email address of the user (must be unique)
- `password`: The password for the user account

##### Example Request in Flask
```python
import requests

def signup():
    url = "https://glacial-plains-67311-bdf01ddd306c.herokuapp.com/auth/register"
    data = {
        'username': 'test',
        'email': 'test@test.com',
        'password': 'password'
    }

    response = requests.post(url, json=data)

    print(response.json())
```

##### Expected Response
- Success: A message indicating the user has been created
```json
{
    "message": "User registered successfully"
}
```

- Error: A message indicating the error

##### 2. Login (Get JWT)

##### Endpoint:
`POST /auth/login`

##### Request Body:
To login, send a JSON object with `email` and `password` fields.
- `email`: The user's registered email address
- `password`: The user's password

##### Example Request in Flask
```python
import requests

def login():
    url = "https://glacial-plains-67311-bdf01ddd306c.herokuapp.com/auth/login"
    data = {
        'email': 'test@test.com',
        'password': 'password'
    }

    response = requests.post(url, json=data)

    print(response.json())
```

##### Expected Response
- Success: A JSON object containing the JWT token.
```json
{
    "token": "jwt_token"
}
```

- Error: A message indicating invalid credentials

##### 3. Logout

##### Endpoint:
`POST /auth/logout`

##### Request Body:
To logout a user, no request body is required.

##### Example Request in Flask
```python
import requests

def signup():
    url = "https://glacial-plains-67311-bdf01ddd306c.herokuapp.com/auth/logout"

    response = requests.post(url)

    print(response.json())
```

##### Expected Response
- Success: A message indicating the user has been logged out
```json
{
    "message": "User logged out successfully"
}
```