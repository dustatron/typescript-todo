import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { ITask } from "../interfaces";

export default function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const addTask = (newTask: ITask): void => {
    setTaskList([newTask, ...taskList]);
  };

  const toggleCompleteTask = (index: number): void => {
    const newTaskList = [...taskList];
    newTaskList[index].isDone = !newTaskList[index].isDone;
    setTaskList(newTaskList);
  };

  const deleteTask = (index: number): void => {
    const newTaskList = taskList.filter((task, i) => i != index);
    setTaskList(newTaskList);
  };

  return (
    <>
      <Header addTask={addTask} />
      <TaskList
        list={taskList}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
      />
    </>
  );
}
