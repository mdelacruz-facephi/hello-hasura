import { Box, ChakraProvider, Container, Text } from "@chakra-ui/react";

import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import ApolloProvider from "./providers/ApolloProvider";
import useTodos from "./hooks/useTodos";

function App() {
  const { loading, todos, addTodo, toggleComplete } = useTodos();

  if (loading) return <Text>Loading...</Text>;

  return (
    <ChakraProvider>
      <Container>
        <Box margin={4} borderWidth="1px" borderRadius="lg">
          <TodoList todos={todos} toggleComplete={toggleComplete} />
          <AddTodoForm addTodo={addTodo} />
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default () => (
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
