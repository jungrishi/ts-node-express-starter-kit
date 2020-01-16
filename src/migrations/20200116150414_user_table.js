
exports.up = function(knex) {
  return knex.schema.createTable("test", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("age");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("test");
};
