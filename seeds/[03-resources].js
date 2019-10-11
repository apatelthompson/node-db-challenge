exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "printer",
          resource_desc: "large",
          project_id: 1
        },
        {
          id: 2,
          resource_name: "recruiter",
          resource_desc: "external",
          project_id: 2
        },
        {
          id: 3,
          resource_name: "factory",
          resource_desc: "overseas",
          project_id: 3
        }
      ]);
    });
};
