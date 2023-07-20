# sdi-crud-project
To Run

1. Ensure you have Docker Desktop installed and open.
  A. If you do not have it installed, you may do so from this link: https://www.docker.com/products/docker-desktop
2. Open a termial.
3. Type: docker-compose up.
This will pull all images and start up a POSTGRESQL database. It will also install all dependecies.
4. In a second terminal type: docker start sdi-crud-project-server-1.
This ensures all back-end containers are operating as they are supposed to.