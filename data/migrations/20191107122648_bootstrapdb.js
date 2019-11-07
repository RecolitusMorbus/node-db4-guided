
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
        .integer() // Define our Foreign Key
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') //
        .onUpdate('CASCADE'); //
    })
    .createTable('animals_zoos', tbl => {
      tbl.increments();

      tbl
        .integer()
        .references('id')
        .inTable('zoos')
        .notNullable();
      tbl
        .integer()
        .references('id')
        .inTable('animals')
        .notNullable();
    })
    .createTable('zoos', tbl => {
      tbl.increments();

      tbl.string('name').notNullable();
      tbl.string('address');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('species')
};
