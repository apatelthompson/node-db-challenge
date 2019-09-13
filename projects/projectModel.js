const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getTasks,
  getResources
  // addResources,
  // addProjects,
  // addTasks
};

function getProjects() {
  return db("projects");
}

function getTasks(id) {
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .where("projects.id", id)
    .select(
      "projects.project_name",
      "projects.project_desc",
      "tasks.task_desc",
      "tasks.task_notes",
      "tasks.is_completed"
    )
    .then(tasks => {
      return tasks;
    });
}

function getResources(id) {
  return db("projects")
    .join("resources", "projects.id", "resources.project_id")
    .where("projects.id", id)
    .select("projects.id", "resources.resource_name", "resources.resource_desc")
    .then(resources => {
      return resources;
    });
}
