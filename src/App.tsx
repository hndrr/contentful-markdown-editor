import { ChakraProvider } from "@chakra-ui/react";
import Editor from "./components/Editor";
import "./styles.css";

export default function App() {
  return (
    <ChakraProvider cssVarsRoot={undefined}>
      <Editor />
    </ChakraProvider>
  );
}
