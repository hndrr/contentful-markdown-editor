import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Preview = (props: { markdown: string }) => {
  return (
    <Box>
      <Text fontSize={"md"} fontWeight={"bold"}>
        Preview
      </Text>
      <Spacer height={"2"} />
      <Box>
        <ReactMarkdown remarkPlugins={[gfm]} unwrapDisallowed={false}>
          {props.markdown}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default Preview;
