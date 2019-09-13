exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_desc: "Call WA SOS",
          task_notes: "www.wasos.com",
          project_id: 1,
          is_completed: "true"
        },
        {
          id: 2,
          task_desc: "Post job description",
          task_notes: "www.indeed.com",
          project_id: 2,
          is_completed: "false"
        },
        {
          id: 3,
          task_desc: "Check on product shipment",
          task_notes: "www.somethingelse.com",
          project_id: 3,
          is_completed: "false"
        }
      ]);
    });
};
