# CV Builder/Editor built on Laravel.

This is the project that allows to build, work and edit multiple cvs for multiple users
# Launching laravel application

> [!NOTE]
> I've used Laravel Sail approach for building an application Dockerized.
> To run laravel sail you need to utilise MAC, LINUX or Windows with WSL2 and a docker engine running.
> In case you are using Windows WSL2, make sure to mount this project repository in WSL2 and run from there.
> Further info is available here: https://laravel.com/docs/11.x/sail

1) Make sure that apache is not running to avoid possible conflicts and navigate to the backend directory of the project

```
sudo /etc/init.d/apache2 stop
cd andele-backend/
```
2) Copy, configure the .env.example file and rename the copy to 
```
.env
```

3) Run the composer installation in the project directory

```
composer install
```

4) Generate APP_KEY for .env file

```
php artisan key:generate
```


5) Run the application using SAIL, make sure the docker engine is running

```
./vendor/bin/sail up
```

6) Run the migrations
```
./vendor/bin/sail artisan migrate:fresh -seed
```

7) Navigate to the front-end directory of the project and complete the installation of all front-end dependencies
```
cd andele-frontend/
npm install
```

8) Copy, configure the .env.example file and rename the copy to 
```
.env
```

9) Run the application in the dev environment
```
npm run dev
```

10) Navigate the pages via navbar and scroll all the way down to discover infinite scroll
