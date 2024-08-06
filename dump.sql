CREATE TABLE recipes (
    id serial primary key,
    name text,
    preparationTime text,
    yield text,
    difficulty text,
    instructions text,
    image text
);