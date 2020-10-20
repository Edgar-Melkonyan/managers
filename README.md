# Installation guide

**Go to project directory and run commands**
#### Install composer dependencies
`composer install`
## Install npm dependencies
`npm install`

#### Copy .env.example file to .env file.
`$ cp .env.example .env`

#### Generate app-key with command
`php artisan key:generate`

#### Create a database for application.
<p>In your mysql console run the command.</p>


`CREATE DATABASE <database name> CHARACTER SET utf8mb4 COLLATE utf8_unicode_ci;`

#### App Configurations 
<p>Add app url</p>
`APP_URL=http://localhost:8000`
   
<p>Add your database credentials to .env file.</p>

```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=<database name>
    DB_USERNAME=root
    DB_PASSWORD=
```

#### Create a database with data with command
`php artisan migrate --seed`
<p>This will create all needed database tables & will create admin user.</p>

#### Run build in server by command
`php artisan serve`
<p>And open <code>http://localhost:3000</code> in your browser.</p>
    
### User authentication
## after running migrate & seed command you can log in with user   
- email: john@doe.com    
- password: password
 
**You can login  with given email or username**
in [user login](http://localhost/login) url

#EnJoY!!!
