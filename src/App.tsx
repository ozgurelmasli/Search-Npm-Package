import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "./App.css";
import { RepositoryList } from "./components/RepositoryList";
import { store } from "./state";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div>
          <h1>Search for a package</h1>
          <RepositoryList />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
