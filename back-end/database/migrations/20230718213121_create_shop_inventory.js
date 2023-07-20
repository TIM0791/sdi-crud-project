/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('shop_inventory', table => {
    table.increments('id');
    table.text('name');
    table.text('description');
    table.integer('quantity');
  })
  .createTable('shop_login', table => {
    table.increments('id');
    table.text('first_name');
    table.text('last_name');
    table.text('username');
    table.text('password');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('shop_inventory')
  .dropTableIfExists('shop_login')
};
