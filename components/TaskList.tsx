import React, { FC, ChangeEvent } from "react";
import { ITask } from "../interfaces";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  Button,
} from "@chakra-ui/react";

interface Props {
  list: ITask[];
  toggleCompleteTask(index: number);
  deleteTask(index: number);
}

const TaskList: FC<Props> = ({ list, toggleCompleteTask, deleteTask }) => {
  return (
    <div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Task</Th>
            <Th>Date</Th>
            <Th> Completed </Th>
            <Th> Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((item: ITask, key: number) => (
            <Tr key={key} bgColor={item.isDone ? "#E6FFFA" : ""}>
              <Td>{key + 1}</Td>
              <Td> {item.taskName} </Td>
              <Td> {item.date} </Td>
              <Td>
                <Switch
                  colorScheme="teal"
                  isChecked={item.isDone}
                  onChange={() => toggleCompleteTask(key)}
                />
              </Td>
              <Td onClick={() => deleteTask(key)}>
                {" "}
                <Button variant="ghost"> 🗑️ </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TaskList;
