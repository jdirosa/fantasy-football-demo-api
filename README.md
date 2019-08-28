# The API
This is the API that will go along with the Beginner's Luck site. 

```
Short Term TODO LIST
- Create message service
- Secure via Auth0
- Cloud Formation Template
- Docker Container running in ECS 
- Use token to tag email in message as author id
- GraphQL 
- Secure DB password with aws secure params

Long Term
- Allow users to create nicknames
- Message Board GIFS
```
## The Database
Currently I am using RDS MySQL Free Tier. I had to go in and adjust inbound / outbound rules on security groups to allow outside connections. In a finished product, I would probably docker host the database and only connect in prod. Not there, yet. I am using `TypeORM` to manage the DB from a code first perspective. I am using this because I am more comfortable with SQL, so this is just forcing me to use the opposite approach.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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