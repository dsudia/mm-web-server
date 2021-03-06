
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sizes', table => {
      table.increments('id');
      table.string('name').unique().notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sizes')
};
