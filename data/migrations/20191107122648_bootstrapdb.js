
exports.up = function(knex) {
  return knex.schema
    .createTable('species', tbl => {
      /* The type of Primary Key is an 'unsigned' key, or an integer without negative values */
      tbl.increments();

      tbl.string('name', 225).notNullable();
    })
    .createTable('animals', tbl => {
      tbl.increments();
      
      tbl.string('name', 255).notNullable();
      tbl
        .integer('species_id') // Define our Foreign Key
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') //
        .onUpdate('CASCADE'); //
    })
    .createTable('animals_zoos', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl
        .integer('zoo_id')
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable();
      tbl
        .integer('animal_id')
        .references('id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable();
      tbl.date('from').notNullable();
      tbl.date('to');
    })
    .createTable('zoos', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('address', 255);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('species')
    .dropTableIfExists('animals')
    .dropTableIfExists('animals_zoos')
    .dropTableIfExists('zoos');
};
