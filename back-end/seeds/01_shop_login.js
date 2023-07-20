/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shop_login').del()
  await knex('shop_login').insert([
    {first_name: 'Yareal', last_name: 'Poof', username: 'unknownJedi', password:'123123'},
    {first_name: 'Bob', last_name: 'Seger', username: 'silverBulletBand', password:'123123'},
    {first_name: 'Dean', last_name: 'Winchester', username: 'sammieLover2005', password:'notMoose'},
  ]);
};
