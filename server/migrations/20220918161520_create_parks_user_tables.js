const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema
    .createTable("park", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("city").notNullable();
      table.string("lat").notNullable();
      table.string("lng").notNullable();
    })
    .createTable("park_info", (table) => {
      table.increments("id").primary();
      table.string("phone").notNullable();
      table.string("address").notNullable();
      table.string("size").notNullable().defaultTo("N/A");
      table.integer("established").notNullable().defaultTo(0);
      table.string("social").notNullable();
      table.string("parkID").notNullable().references("id").inTable("park");
    })
    .createTable("park_trails", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("length").notNullable();
      table.string("difficulty").notNullable();
      table.string("description", 1000).notNullable();
      table.string("parkID").notNullable().references("id").inTable("park");
    })
    .createTable("park_highlights", (table) => {
      table.increments("id").primary();
      table.string("highlight").notNullable();
      table.string("parkID").notNullable().references("id").inTable("park");
    })
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("userName").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("user_favourites", (table) => {
      table.increments("id").primary();
      table
        .string("parkID")
        .notNullable()
        .references("id")
        .inTable("park")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("userID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("parkHighlights")
    .dropTable("parkTrails")
    .dropTable("favourites")
    .dropTable("park")
    .dropTable("user");
};
