import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent } from "react";

import { AddTodo } from "../model";

export type AddTodoFormProps = {
  addTodo: AddTodo;
};

export function AddTodoForm({ addTodo }: AddTodoFormProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <Stack direction="row" padding={4} spacing={4} align="center">
        <Input type="text" value={newTodo} onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit}>
          Add Todo
        </Button>
      </Stack>
    </form>
  );
};
