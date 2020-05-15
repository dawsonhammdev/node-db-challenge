const db = require('../database/dbConfig');

module.exports = {
    getAllProjects,//done
    getResources,//done
    getTasks,//done
    addTask,//done
    addProject,//done
    addResource,//done
}

function getAllProjects() {
    // SELECT * FROM projects
    return db.select('*').from('projects');
}

function getResources() {
    return db.select("*").from("resources")

}

function getTasks() {
    // return db.select('tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
    // .from('tasks')
    // .join('projects')
    // .on('tasks.id = projects.id')

    return db('tasks')
    .join('projects')
    .select('tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
}

//select t.description, t.notes, t.completed, p.name, p.description
// from [tasks] as t
// join projects as p
// on t.id = p.id

function addTask(taskData) {
    return db("tasks")
    .insert(taskData)
    .then(ids => {
        return ids
    })
}

function addProject(projectData) {
    return db("projects")
    .insert(projectData)
    .then(ids => {
        return ids
    })
}

function addResource(resourceData) {
    return db("resources")
    .insert(resourceData)
    .then(ids => {
        return ids
    })
}

