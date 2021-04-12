import React, { FC, useState } from "react";
import { ITask } from "../interfaces";

interface Props {
  addTask(ITask);
}

const Header: FC<Props> = ({ addTask }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleAdd = (): void => {
    if (taskName.length > 0) {
      const newTask: ITask = {
        taskName: taskName,
        date: "Now",
        isDone: false,
      };

      addTask(newTask);
      setTaskName("");
    }
  };

  return (
    <div>
      <input
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default Header;
