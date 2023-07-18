/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('shop_inventory', table => {
    table.increments('id');
    table.string('name');
    table.string('description');
    table.integer('quantity');
  })
  .createTable('shop_login', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.string('password');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('shop_invntory');
  .dropTableIfExists('shop_login')
};
