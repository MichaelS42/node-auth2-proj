exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
    })

    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 64).notNullable().unique().index();
      tbl.string("hash", 128).notNullable();
      tbl.string("department", 64).notNullable();
      tbl
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
