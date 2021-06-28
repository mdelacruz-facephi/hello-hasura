import { Box, UnorderedList } from "@chakra-ui/react";

import { TodoListItem } from "./TodoListItem";

import { Todo, ToggleComplete } from "../model";

export type TodoListProps = {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
};

export function TodoList({ todos, toggleComplete }: TodoListProps) {
  return (
    <UnorderedList style={{ listStyleType: "none" }}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </UnorderedList>
  );
};
