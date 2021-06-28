export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;
