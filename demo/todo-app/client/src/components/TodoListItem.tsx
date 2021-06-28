import { ListItem, Stack, Text } from "@chakra-ui/react";

import { Todo, ToggleComplete } from "../model";

import "./TodoListItem.css";

export type TodoListItemProps = {
  todo: Todo;
  toggleComplete: ToggleComplete;
};

export function TodoListItem({ todo, toggleComplete }: TodoListItemProps) {
  return (
    <ListItem>
      <Stack direction="row" padding={4} spacing={4} align="center">
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.done}
        />
        <Text fontSize="large" className={todo.done ? "complete" : undefined}>{todo.text}</Text>
      </Stack>
    </ListItem>
  );
};
