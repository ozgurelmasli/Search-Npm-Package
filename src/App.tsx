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
          <h3 style={{ paddingTop: 10, paddingLeft: 15, fontSize: 35 }}>
            Search for a package
          </h3>
          <RepositoryList />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
