# Recipe Quote

See how much it'll cost you before committing to a recipe!

An early stage prototype of an application that will estimate the initial cost of ingredients for recipes. This is still a work in progress. Until ingredient matching is improved, users can enter in prices for ingredients not matched by the app.

Deployed at https://recipe-quote.herokuapp.com/

<img width="1258" alt="screen shot 2019-01-22 at 9 12 00 pm" src="https://user-images.githubusercontent.com/38846510/51578185-b4412880-1e8a-11e9-95e3-f07795dd54df.png">

<img width="1258" alt="screen shot 2019-01-22 at 9 12 00 pm" src="https://user-images.githubusercontent.com/38846510/51654732-474f9080-1f67-11e9-96dd-971214ccc528.png">


<img width="1258" alt="screen shot 2019-01-22 at 9 12 52 pm" src="https://user-images.githubusercontent.com/38846510/51578200-bdca9080-1e8a-11e9-8eb4-9ceb22863e7e.png">


To run the application
1) `npm install`
2) create PostgreSQL database with `createdb recipe-quote`
3) `npm run seed`
4) `npm start`

# Future Improvements
1) Switch out recipe API and integrate a search engine and natural language parser for more accurate matching
