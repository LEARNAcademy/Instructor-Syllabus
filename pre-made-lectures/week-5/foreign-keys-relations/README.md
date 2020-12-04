# my_closet App

## Objective

We are tasked with creating an app that catalogs people's closets. Create a set of tables/associations that will document the following:

1. Petunia has: a jacket and two pairs of shoes
2. Joaquin has: two pairs of jeans and a hat
3. Esmeralda has: a tee shirt, a bandana, and a pair of shorts

### Set-up
- Create app
- Create DB
- G model Person
- Migrate
- Create some people
- G model Article with foreign key
- Migrate
- Update relations in models
- Using foreign key, add article to person

## Schema

This app will include two tables: Person and Article. People tend to own more than one item of clothing. Rather than making a bunch of emptu columns in `Person` for all of their potential clothes, we are creating a new table called `Article` that will have an association to `Person` via a _foreign key_.

## Person table

What will this model look like visually?

What would the relationship with `Article` look like?

## Article table

What will this model look like visually?

What does the relationship with `Person` look like?

<a href="https://docs.google.com/spreadsheets/d/1lm6s2rlO7mxJ7DN0yQO5IG9CflRibm044fQIrh57G10/edit#gid=1803880198">Google Sheets Schema</a>

