import { gql, useMutation, useSubscription } from "@apollo/client";
import { useCallback } from "react";
import { Todo } from "../model";

const TODOS_SUBSCRIPTION = gql`
  subscription TodosSubscription {
    todos(order_by: {text: asc}) {
      id
      text
      done
    }
  }
`;

const ADD_TODO_MUTATION = gql`
  mutation AddTodoMutation($text: String!) {
    insert_todos_one(object: {text: $text}) {
      id
    }
  }
`;

const COMPLETE_TODO_MUTATION = gql`
  mutation CompleteTodoMutation($id: uuid!, $done: Boolean!) {
    update_todos_by_pk(pk_columns: {id: $id}, _set: {done: $done}) {
      id
    }
  }
`;

export default function() {
  const { data, loading } = useSubscription(TODOS_SUBSCRIPTION);
  const [addTodo] = useMutation(ADD_TODO_MUTATION);
  const [completeTodo] = useMutation(COMPLETE_TODO_MUTATION);

  const toggleComplete = useCallback((id: string) => {
    completeTodo({
      variables: {
        id,
        done: !data.todos.find((todo: Todo) => todo.id === id).done
      }
    });
  }, [data]);

  return {
    loading,
    todos: data?.todos,
    addTodo: (text: string) => addTodo({ variables: { text } }),
    toggleComplete: ({ id }: Todo) => toggleComplete(id),
  };
}