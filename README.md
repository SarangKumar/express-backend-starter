# Sarang Express Backend Template

This is a template for creating a full stack MERN application.

## Usage

To create a new project using this template, run:

## Docker

To run the Dockerfile, follow these steps:

Build the Docker image:

Open a terminal, navigate to the directory containing the Dockerfile, and run the following command:

```bash
docker build -t <your-image-name> .
```

Replace your-image-name with a name you want to give to your Docker image.

Run the Docker container: After the image is built, run a container using the following command:

```bash
docker run -p 5000:5000 your-image-name
```

This command will create volumne in the container and map port 5000 on your host to port 5000 on the container, allowing you to access the application via `http://localhost:5000`.

```bash
docker run -p 5000:5000 -v <your path>:/usr/src/app <your-image-name>
```

This command maps port 5000 on your host to port 5000 on the container, allowing you to access the application via `http://localhost:5000`.

Make sure Docker is installed and running on your machine before executing these commands.
