import React, { FC } from "react";
import { ITask } from "../interfaces";

interface Props {
  list: ITask[];
}

const TaskList: FC<Props> = ({ list }) => {
  return (
    <div>
      <h2>Task List </h2>
      {list.map((item: ITask, key: number) => (
        <div key={key}> {item.taskName}</div>
      ))}
    </div>
  );
};

export default TaskList;
