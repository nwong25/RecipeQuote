# Recipe Quote

See how much it'll cost you before committing to a recipe!

An early stage prototype of an application that will estimate the initial cost of ingredients for recipes. This is still a work in progress. Until ingredient matching is improved, users can enter in prices for ingredients not matched by the app.

Deployed at https://recipe-quote.herokuapp.com/

<img width="1257" alt="screen shot 2019-01-22 at 3 43 10 pm" src="https://user-images.githubusercontent.com/38846510/51564726-0fa8f180-1e5e-11e9-824c-cc3e9fce1e7c.png">
<img width="1255" alt="screen shot 2019-01-22 at 3 52 54 pm" src="https://user-images.githubusercontent.com/38846510/51564728-12a3e200-1e5e-11e9-9a6c-40c3bdf7238d.png">


To run the application
1) `npm install`
2) create PostgreSQL database with `createdb recipe-quote`
3) `npm run seed`
4) `npm start`

# Future Improvements
1) Switch out recipe API and integrate a search engine and natural language parser for more accurate matching
