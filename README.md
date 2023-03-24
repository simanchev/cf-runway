development with docker

1) install docker on your computer
2) touch .env in root of a project and fill them ->
Example:
"""
    PGUSER=postgres
    PGHOST=postgres
    PGDATABASE=cfrunway
    PGPASSWORD=postgres_password
    PGPORT=5432
    POSTGRES_PASSWORD=postgres_password


    EMAIL_HOST=<smtp email host>
    EMAIL_PORT=<465>
    EMAIL_USER=<email address>
    EMAIL_PASSWORD=<email password>
"""
3) run command 'docker-compose up --build' from root project directory
