import Task from "../model/taskData.js";
export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res, next) => {
  try {
    const task = await Task.find({ createdBy: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(task);
  } catch (error) {
    next(error);
  }
};
