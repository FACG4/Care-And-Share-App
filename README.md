# Care And Share App
###### *The* network for carers to access information, resources, and the support they need to thrive as carers.
![](https://i0.wp.com/evangelbc.org/ev2/wp-content/uploads/2017/11/Care-and-Share.jpg?resize=768%2C432&ssl=1)

## Problem Statment:
The problem is located in three points:

 * Lack of support for carers.
 * Giving carers a way to connect and support each other.
 * Digitize the "My Book" book.

#### Our solution:
Creating CAS(Care And Share) App to Improve Information sharing within the carers network
and find a place where allows the carers to communicate to each other.

## user Stories:

- carers can sign up and login.
- carers can browse and search other 'anonymised' carers.
- carers can request to connect.
- carers can see requests and accept.
- carers can see who they have connected with.
- carers can send messages to their connections.

### Database Schema:
the App database structure for represent the App tables and the relations between them.
![DB](https://user-images.githubusercontent.com/28482863/43066526-94a0ff94-8e6d-11e8-8050-f6c38ed43c2f.jpg)
#### Prototype: :link:
There is the link of the App prototype on figma [Here ](https://www.figma.com/proto/GDGWmaT7HSHTJBY1b7tmfsL5/My-Book?node-id=0%3A1&scaling=scale-down)

## Folder Structure

```
Care-And-Share-App/
  backend/
    controllers/
      index.js
      test.js
    database/
      build.sql
      db_build.js
      db_connection.js
    .gitignore
    app.js
    index.js
    package-lock.json
    package.json
  frontend/
    public/
      index.html
      favicon.ico
    src/
      Components/
        Carers/
        Connections/
        Discussions/
        Filter/
        Header/
        MyCarePlan/
        MyDiary/
        Navbar/
        Profile/
        Search/
        Error/
      AppRoutes.CSS
      AppRoutes.js
      index.js
    README.md
    node_modules/
    package.json
    .gitignore
  README.md
  node_modules/
  package.json
  .gitignore

```

# Technology Stack:

- Express.js
- React.js
- postgresql
- CSS3

# How to start the program locally:
- `npm run`
- `npm test (run tests) `

Team members: Ishak, Eman, Ahmad-A and Ahmad_M .
