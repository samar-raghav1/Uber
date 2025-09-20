# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description
Registers a new user in the system. Requires user details in the request body. Returns a JWT token and user information upon successful registration.

## Request Body
Send as JSON:

```
{
  "fullname": {
    "firstname": "John",      // Required, min 3 characters
    "lastname": "Doe"         // Optional, min 3 characters
  },
  "email": "john.doe@example.com", // Required, must be a valid email
  "password": "secret123"          // Required, min 6 characters
}
```

## Validation
- `fullname.firstname`: Required, string, minimum 3 characters
- `fullname.lastname`: Optional, string, minimum 3 characters
- `email`: Required, valid email format
- `password`: Required, string, minimum 6 characters

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      // ...other errors
    ]
  }
  ```

### Missing Fields
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request

```
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "john.doe@example.com",
    "password": "secret123"
  }'
```

Replace `PORT` with your server's port number.
[hr]

# Captain Login Endpoint Documentation

## Endpoint

`POST /captain/login`

## Description
Authenticates an existing captain. Requires email and password in the request body. Returns a JWT token and captain information upon successful login.

## Request Body
Send as JSON:

```
{
  "email": "jane.smith@example.com", // Required, must be a valid email
  "password": "securepass"           // Required, min 6 characters
}
```

## Validation
- `email`: Required, valid email format
- `password`: Required, string, minimum 6 characters

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "Sedan"
      }
      // ...other captain fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "password must be at least 6 characters",
        "param": "password",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example Request

```
curl -X POST http://localhost:PORT/captain/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "securepass"
  }'
```

Replace `PORT` with your server's port number.

[hr]

# Captain Profile Endpoint Documentation

## Endpoint

`GET /captain/profile`

## Description
Retrieves the authenticated captain's profile information. Requires a valid JWT token in the Authorization header or cookie.

## Authentication
This endpoint is protected. You must provide a valid JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```
or as a cookie named `token`.

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Sedan"
    }
    // ...other captain fields
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Authentication required"
  }
  ```

## Example Request

```
curl -X GET http://localhost:PORT/captain/profile \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Replace `PORT` with your server's port number.

[hr]

# Captain Logout Endpoint Documentation

## Endpoint

`GET /captain/logout`

## Description
Logs out the authenticated captain by blacklisting their JWT token. Requires a valid JWT token in the Authorization header or cookie.

## Authentication
This endpoint is protected. You must provide a valid JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```
or as a cookie named `token`.

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Authentication required"
  }
  ```

## Example Request

```
curl -X GET http://localhost:PORT/captain/logout \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Replace `PORT` with your server's port number.
[hr]

# Captain Registration Endpoint Documentation

## Endpoint

`POST /captain/register`

## Description
Registers a new captain (driver) in the system. Requires captain details and vehicle information in the request body. Returns a JWT token and captain information upon successful registration.

## Request Body
Send as JSON:

```
{
  "fullname": {
    "firstname": "Jane",      // Required, min 3 characters
    "lastname": "Smith"       // Required, min 3 characters
  },
  "email": "jane.smith@example.com", // Required, must be a valid email
  "password": "securepass",         // Required, min 6 characters
  "vehicle": {
    "color": "Red",                 // Required
    "plate": "ABC123",              // Required
    "capacity": 4,                   // Required, number
    "vehicleType": "Sedan"          // Required
  }
}
```

## Validation
- `fullname.firstname`: Required, string, minimum 3 characters
- `fullname.lastname`: Required, string, minimum 3 characters
- `email`: Required, valid email format
- `password`: Required, string, minimum 6 characters
- `vehicle.color`: Required, string
- `vehicle.plate`: Required, string
- `vehicle.capacity`: Required, number
- `vehicle.vehicleType`: Required, string

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "Sedan"
      }
      // ...other captain fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": [
      {
        "msg": "All fields are required"
      },
      // ...other errors
    ]
  }
  ```

### Duplicate Email
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  "Captain already exist"
  ```

## Example Request

```
curl -X POST http://localhost:PORT/captain/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {"firstname": "Jane", "lastname": "Smith"},
    "email": "jane.smith@example.com",
    "password": "securepass",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Sedan"
    }
  }'
```

Replace `PORT` with your server's port number.
[hr]

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description
Retrieves the authenticated user's profile information. Requires a valid JWT token in the Authorization header.

## Authentication
This endpoint is protected. You must provide a valid JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Authentication required"
  }
  ```

## Example Request

```
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Replace `PORT` with your server's port number.

[hr]

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description
Logs out the authenticated user by blacklisting their JWT token. Requires a valid JWT token in the Authorization header.

## Authentication
This endpoint is protected. You must provide a valid JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "User logged out successfully"
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Authentication required"
  }
  ```

## Example Request

```
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Replace `PORT` with your server's port number.
[hr]

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description
Authenticates an existing user. Requires email and password in the request body. Returns a JWT token and user information upon successful login.

## Request Body
Send as JSON:

```
{
  "email": "john.doe@example.com", // Required, must be a valid email
  "password": "secret123"          // Required, min 6 characters
}
```

## Validation
- `email`: Required, valid email format
- `password`: Required, string, minimum 6 characters

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 digits ",
        "param": "password",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

## Example Request

```
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "secret123"
  }'
```

Replace `PORT` with your server's port number.
