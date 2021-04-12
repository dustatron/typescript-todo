import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { ITask } from "../interfaces";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const addTask = (newTask: ITask): void => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className={styles.container}>
      <Header addTask={addTask} />
      <TaskList list={taskList} />
    </div>
  );
}
