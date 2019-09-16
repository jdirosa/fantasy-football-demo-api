# The API
This is the API that will go along with the Beginner's Luck site. 

```
Short Term TODO LIST
- Create message service
- Secure via Auth0
- Cloud Formation Template
- Docker Container running in ECS 
- Use token to tag email in message as author id
- Secure DB password with aws secrets manager

Long Term
- Allow users to create nicknames
- Message Board GIFS / images
```
## The Database
Currently I am using RDS MySQL Free Tier. I had to go in and adjust inbound / outbound rules on security groups to allow outside connections. In a finished product, I would probably docker host the database locally and only connect in prod. Not there, yet. I am using `TypeORM` to manage the DB from a code first perspective. I am using this because I am more comfortable with SQL, so this is just forcing me to use the opposite approach.

** Note, as my free tier has ended, the database is no longer live. I will replace it when the api is further along. 

## Running the app

Note, currently the API will not run unless you setup a database and point typeorm to it. `ormconfig.json` will show a good example of how to do this. Note, the creds in there are not valid and will not connect to anything. 
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Nest CLI Commands

```bash
$ nest g mo cats to create cats module.
$ nest g co cats to create cats controller
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
