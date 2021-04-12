import React, { FC, useState } from "react";
import { ITask } from "../interfaces";
import { Button, Input, Center, Box, Stack, Heading } from "@chakra-ui/react";

interface Props {
  addTask(ITask);
}

const Header: FC<Props> = ({ addTask }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleAdd = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const date = new Date();

    if (taskName.length > 0) {
      const newTask: ITask = {
        taskName: taskName,
        date: date.toDateString().toString(),
        isDone: false,
      };

      addTask(newTask);
      setTaskName("");
    }
  };

  return (
    <Center h="200px" w="90%" color="white">
      <Box
        p={6}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        color="black"
      >
        <form onSubmit={handleAdd}>
          <Stack spacing={3}>
            <Heading fontSize="3xl" align="center">
              Add a Task
            </Heading>
            <Input
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              size="md"
              variant="filled"
            />
            {/* <button onClick={handleAdd}>Add Task</button> */}
            <Button colorScheme="twitter" type="submit">
              Add Task
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default Header;
