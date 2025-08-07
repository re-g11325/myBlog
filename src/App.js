import logo from "./logo.svg";
import "./App.css";
import { Button, Flex, Spinner } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Amoreeee</p>
        <Spinner></Spinner>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              console.log("clicked main button");
            }}
          >
            Ti
          </Button>
          <Button colorScheme="teal" variant="outline">
            Amo
          </Button>
        </Flex>
      </header>
    </div>
  );
}

export default App;
