exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Start Company",
          project_desc: "Getting company going",
          is_completed: "true"
        },
        {
          id: 2,
          project_name: "Hire People",
          project_desc: "Find the best people",
          is_completed: "true"
        },
        {
          id: 3,
          project_name: "Sell things",
          project_desc: "Make things people want",
          is_completed: "true"
        }
      ]);
    });
};
