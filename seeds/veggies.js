/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('veggies').del()
    .then(function () {
      return knex('veggies').insert([//I love veggies, but we could always add even more instead of just the base 3, I mean who even eats spinach?
        { name: 'Carrot' },
        { name: 'Broccoli' },
        { name: 'Spinach' }
      ]);
    });
};
