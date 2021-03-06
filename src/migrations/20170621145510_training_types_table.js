
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('training_types', table => {
      table.increments('id');
      table.string('name').unique().notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('training_types')
};
