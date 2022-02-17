import "react-mde/lib/styles/css/react-mde-all.css";

import React, { useState } from "react";
import ReactMde from "react-mde";
import { v4 } from "uuid";

import { Box, Button, Input, Spacer, Textarea } from "@chakra-ui/react";

// import contentfulMgmtClient from '../clients/contentfulMgmtClient';
import Preview from "./Preview";

export default function Editor() {
  const [markdown, setMarkdown] = useState<string>("**Hello world!!!**");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const uuid = v4();

  const handleClick = async () => {
    // 投稿処理
    // const myEnvironment = await contentfulMgmtClient();
    // const uuid = v4();
    // const res = await myEnvironment.createEntryWithId(
    // 以下objectの中身はContent Modelの定義によって異なる
    //   "blogPost",
    //   `id-${uuid}`,
    //   {
    //     fields: {
    //       title: {
    //         ja: inputRef.current?.value
    //       },
    //       mdbody: {
    //         ja: markdown
    //       },
    //       slug: { ja: uuid },
    //       publishDate: { ja: new Date() }
    //     }
    //   }
    // );
    // // これを書かないとDRAFTのままで投稿される
    // await res.publish();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick();
    alert("メッセージ: " + inputRef.current?.value + markdown);
  };

  return (
    <Box className="post-form min-h-screen" padding={"20px"}>
      <Box as={"h1"} fontWeight={"bold"}>
        Editor
      </Box>
      <Spacer h="4" />
      <Box>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="post-title"
            placeholder="Title"
            ref={inputRef}
          />
          <Spacer h="4" />
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-around"
          >
            <Box flex="1">
              <ReactMde value={markdown} onChange={setMarkdown} />
            </Box>
            <Box flex="1" padding="4">
              <Preview markdown={markdown} />
            </Box>
          </Box>
          <Spacer h="4" />
          <Input type="submit" value="投稿する" color="white" bg="red" />
        </form>
      </Box>
    </Box>
  );
}
