import { Task } from "../model/task_model.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = new Task({
      title,
      description,
      user: req.user._id,
    });

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error("Error in createTask:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });

    res.status(200).json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    console.error("Error in getAllTasks:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get Task by ID
export const getATask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task fetched successfully",
      task,
    });
  } catch (error) {
    console.error("Error in getATask:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Update Task Status
export const updateTask = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ["pending", "in-progress", "completed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    console.error("Error in updateTask:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteTask:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
