import MarkdownView from 'react-showdown';

import { Box, Image, Spacer, Text } from '@chakra-ui/react';

const Preview = (props: { markdown: string }) => {
  return (
    <Box>
      <Text fontSize={"md"} fontWeight={"bold"}>
        Preview
      </Text>
      <Spacer height={"2"} />
      <Box>
        <MarkdownView
          markdown={props.markdown}
          options={{ tables: true, emoji: true }}
          // これを書くとBox, Image, Spacer, Textが使えるはずだが書くとwhiteoutする
          // components={{ Box, Image, Spacer, Text }}
        />
      </Box>
    </Box>
  );
};

export default Preview;
