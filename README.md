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
| bio | text | - |
| pic | text | - |
| createdAt| Date | Automatically added by Sequelize |
| updatedAt| Date | Automatically added by Sequelize |

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

### 1. clone the repository but with a different name.

Run the following command(s) on the terminal.

```sh
git clone <repo_link> <new_name>
```
**For Example**
```
git clone https://github.com/samjyi95/auth-boiler.git whateva-you-want-to-name-it
```

### 2. Install the modules from package.json
```sh
npm i 
```

### 3. Customize the new project

Remove defaulty stuff. For exampl:

* Title in `layout.ejs`
* Logo firld in the nav bar
* Description and Repository field in package.json
* Remove this boilerplate's readme content
* Switch Favicon to project-specific one (in `layout.ejs` head section)
