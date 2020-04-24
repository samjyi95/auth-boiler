# Auth Boiler plate

This is a boilerplate for an Express app with local user auuthentication. It exisits so I can have a customized boilerplate and don't have to start from scratch on all my projects

## What it includes

* Local Auth (email & password)
* Passport and passport-local
* Session for saving user info and displaying flash messages
* Settings for PostgresSQL and Sequelize
* Hasshed Passwords
* EJS templating and EJS layouts 
* Sequelize User model
* Materializw styling - nav and footer

## Included Model

**UserModel**

| Coloumn | Type | Notes |
|---------------|----------------|------------------------------|
| id | Integer | Serial primary key |
| firstname | STRING | Required Length > 1 |
| lastname | STRING | Required Length > 1 |
| email | STRING | Unique Login |
| password | STRING | Hash |
| birthday | DATE | - |
| email | STRING | Unique Login |


## Included Routes

| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | / | Home page |
| GET | * | Catch-all for 404s |

**Routes in controllers/auth.js**
| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | '/auth/login | Render Login Form |
| POST | '/auth/login | Process Login Data |
| GET | '/auth/signup | Render signup form |
| POST | '/auth/signup | Process Signup Data |
| GET | '/auth/logout | Remove user from session + redirect |

**Routes in controllers/progile.js**
| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | '/profile/user' | Show user dashboard (authorized user only) |
| GET | '/profile/admin' | Show admin dashboard (authorized admin only |
| GET | '/profile/guest/:id' | View user dashboard as guest (authorized user only) |

## Directions for use
