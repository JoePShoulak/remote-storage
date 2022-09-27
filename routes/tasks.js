import express from "express";

const router = express.Router();

var taskList = [{
        id: 1,
        title: "Testing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        dueDate: "2022-09-27",
        weather: true,
        completed: false,
    }, {
        id: 2,
        title: "Testing 2",
        description: "Wassup Wassup Wassup Wassup Wassup.",
        dueDate: "2022-09-27",
        weather: false,
        completed: true,
    }
];

router.get("/", (req, res) => res.send(taskList) );

router.post("/", (req, res) => {
    taskList = req.body;
    res.send("");
})

export default router;