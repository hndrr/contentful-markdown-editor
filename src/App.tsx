import './styles.css';

import { ChakraProvider } from '@chakra-ui/react';

import Editor from './components/Editor';

export default function App() {
  return (
    <ChakraProvider cssVarsRoot={undefined}>
      <Editor />
    </ChakraProvider>
  );
}
