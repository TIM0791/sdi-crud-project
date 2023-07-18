/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shop_inventory').del()
  await knex('shop_inventory').insert([
    {id: 1, name: '', description: '', quantity: 3},
    {id: 2, name: '', description: '', quantity: 6},
    {id: 3, name: '', description: '', quantity: 9}
  ]);
};
