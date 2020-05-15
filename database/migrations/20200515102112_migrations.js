
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments(); // unique ID
        tbl.string('name', 120)
        .notNullable();
        tbl.string('description', 120);
    })
    .createTable('resources', tbl => {
        tbl.increments(); // unique ID
        tbl.string('name', 120)
        .notNullable();
        tbl.string('description', 120);
    })
    .createTable('tasks', tbl => {
        tbl.increments(); // unique ID
        tbl.string('description', 120)
        .notNullable();
        tbl.string('notes', 220);
    })
    .createTable('projects_resources', tbl => {
        tbl.increments(); // unique ID
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        // forgeign key that points to supplies table 
        tbl.integer('resources_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};

//Need to creat 4 tables.  
//Projects Table = ID*, NAME*, DESCRIPTION
//Resources Table = ID*, NAME*, DESCRIPTION
//Tasks Table = ID*, DESCRIPTION*, NOTES
//Projects_Resources Table
