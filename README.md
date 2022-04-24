# ShopMart 

A mini online E-commerce Business to Consumer platform for users (Sellers) to sell their products to users (Buyers). 

ShopMart is a mini Walmart clone designed to aid our learning and usage of the technologies being used in this project.

## Technologies Used

 - ShopMart consists of a [REST API Backend](https://github.com/sekayasin/shopmart-backend) developed using [Java SpringBoot](https://spring.io/projects/spring-boot) and a [Front-end](https://github.com/sekayasin/shopmart-frontend) consuming it developed using [Reactjs](https://reactjs.org/)
 - The Backend runs on a [PostgreSQL Database](https://www.postgresql.org/), the World's Most Advanced Open Source Relational Database.
 - [Docker](https://www.docker.com/), a popular containerization tool is used to create docker images for both our Backend and Frontend, which leads to faster production deployment and a more efficient containerization in production.

## Prerequisites

- Programming language prerequisites

    - Java JDK - [Java JDK 11+](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
    - Nodejs version - preferably [version 16 LTS](https://nodejs.org/en/) and above
  
        - package managers - npm or yarn
- Editors / IDEs

    - Java IDE - preferably [IntelliJ IDEA](https://www.jetbrains.com/idea/)
    - JavaScript IDE - preferably [VS Code](https://code.visualstudio.com/)

## About the Application

The application consists of 3 Types of Users
- Admin
- Buyer
- Seller

BUYER/SELLER user are required to signup first to use the application.

The ADMIN user is required to approve the buyer/seller accounts before their start using the application

## Running the Dockerized Application

The application has been containerized and can be run using the docker-compose file

There is a `docker-compose.yml` file that can be run to start all the services of the application

Both the backend and front-end docker images are referenced in the docker-compose file

The images are hosted on docker-hub repository, hence they will be pulled once the application is started as instructed below.

- Clone this [repository](https://github.com/sekayasin/shopmart-frontend)

    ```
    $ git clone git@github.com:sekayasin/shopmart-frontend.git
    
    ## cd into shopmart-backend directory
    $ cd shopmart-frontend
  
    ## start the application -- run 
    $ docker compose up -d
    
    ## Open http://localhost to view the frontend in your browser.
    ```
- Troubleshooting in case of any error
  
  - run the application and monitor the logs

    ```
    ## stop the application
    $ docker compose down
    
    ## start the application and monitor the logs, don't run in detached mode
    $ docker compose up
    ```

### ShopMart Front-end

This repo consist of the Front-end code base built using Reactjs

#### Getting Started - Setting up and running the Frontend codebase locally

- Clone this [repository](https://github.com/sekayasin/shopmart-frontend) 

    ```
    $ git clone git@github.com:sekayasin/shopmart-frontend.git
    
    ## cd into shopmart-frontend directory
    $ cd shopmart-frontend

    ```
- Available Scripts

    - In the project directory, you can run:

    ```
    $ yarn install or npm install

    To install all the dependencies 

    $ yarn start or npm start

    Runs the app in the development mode.
    Open http://localhost:3000 to view it in your browser.
    ```
### Special Thanks

##### Contributors

| Name                   | ID      | Github username                               |
|------------------------|---------|-----------------------------------------------|
| Elilta Wondimu         | 61      | [EliltaW](https://github.com/EliltaW)         |
| Ghidei Weldehaimanot   | 61      | [ghideibahta](https://github.com/ghideibahta) |
| Raymond Antonio Broome | 61      | [m0nd](https://github.com/m0nd)               |
| Surafiel Hailu         | 61      | [suraph-el](https://github.com/suraph-el)     |
| Yasin Sekabira         | 613508  | [sekayasin](https://github.com/sekayasin)     |

Special Thanks to Our Professor - [Muhyieddin Al-tarawneh](https://github.com/muhyidean) - WAA Professor | Project Manager.


