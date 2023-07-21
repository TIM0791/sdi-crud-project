# sdi-crud-project
To Run

1. Ensure you have Docker Desktop installed and open.
  A. If you do not have it installed, you may do so from this link: https://www.docker.com/products/docker-desktop
2. Open a termial.
3. Type: docker-compose up.
This will pull all images and start up a POSTGRESQL database. It will also install all dependecies.
4. In a second terminal type: docker start sdi-crud-project-server-1.
This ensures all back-end containers are operating as they are supposed to.

Concept:

This is a web application for a fantasy magic item shop (think D&D). A general user can browse the wares of the shop online. They can see the name of the item, a brief description, and the amount the shop has on hand.

There are three default inventory managers(I was unable to flesh out logging in and making changes to the items). These managers are in charge of adding new items, updating listed stock (to include deletion when stock goes to 0), and making changes to the items as new information becomes available.

The Sphinx in the top left, is persistent through all pages and is a go to main page link.