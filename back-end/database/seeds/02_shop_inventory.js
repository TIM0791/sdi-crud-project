/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shop_inventory').del()
  await knex('shop_inventory').insert([
    {name: 'Scroll of Hold Person', description: 'Choose a humanoid that you can see within range. The target must succeed on a wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another wisdom saving throw. On a success, the spell ends on the target.', quantity: 3},
    {name: 'Leather Armor +1', description: 'Leather Armor enchanted to give the wearer increased protection from harm. When worn it gives the owner +1 to Armor Class', quantity: 6},
    {name: 'Poison', description: 'when applied to food, the individual that ingests it must make a DC 13 Constitution Saving Throw or go unconscious. If a successful Medicine check DC 15 does not immediatly occur, the victim gets one death save before succuming to death.', quantity: 9}
  ]);
};
