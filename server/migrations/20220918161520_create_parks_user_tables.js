exports.up = function (knex) {
  return knex.schema
    .createTable("parks", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("parkInformation", (table) => {
      table.increments("id").primary();
      table.string("phone").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("coordinates").notNullable();
      table.string("size").notNullable();
      table.integer("established").notNullable().defaultTo(0);
      table.string("social").notNullable();
      table
        .integer("parkID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("parkTrails", (table) => {
      table.increments("id").primary();
      table.string("length").notNullable();
      table.string("difficulty").notNullable();
      table.string("description").notNullable();
      table
        .integer("parkID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("parkHighlights", (table) => {
      table.increments("id").primary();
      table.string("highlight").notNullable();
      table
        .integer("parkID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("userName").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("favourites", (table) => {
      table
        .integer("parkID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("userID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("parks")
    .dropTable("parkInformation")
    .dropTable("parkHighlights")
    .dropTable("parkTrails")
    .dropTable("users")
    .dropTable("favourites");
};
