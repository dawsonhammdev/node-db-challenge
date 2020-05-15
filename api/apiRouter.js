const router = require("express").Router();

const resourceRouter = require("../router/resource-router");
const projectRouter = require("../router/project-router");
const taskRouter = require("../router/task-router")

router.use("/projects", projectRouter);
router.use("/resources", resourceRouter);
router.use("/tasks", taskRouter);

module.exports = router;