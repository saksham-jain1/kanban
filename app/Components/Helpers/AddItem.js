"use client";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const AddItem = ({ h, w, body, title, type = "text", onSave, ...props }) => {
  const [show, setShow] = useState(false);
  const input = useRef();
  return (
    <Box
      borderRadius="lg"
      h={!show ? h + "px" || "auto" : "max-content"}
      w={w ? w + "px" : "auto"}
      minW="200px"
      border="2px solid #CBD5E0"
      boxShadow="lg"
      bg="white"
      {...props}
    >
      {show ? (
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          h="100%"
          w={w ? w + "px" : "auto"}
          px="3"
          py="2"
        >
          <Input type={type} autoFocus />
          <Flex gap="5" pt="2" w="100%">
            <Button
              size="md"
              variant="outline"
              colorScheme="red"
              flex="1"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button size="md" colorScheme="blue" flex="1">
              Save
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
          onClick={() => {
            if (type === "file") {
              input.current.click();
              onSave();
            } else setShow(true);
          }}
          direction={h < 51 ? "row" : "column"}
          h="100%"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          px="3"
          py="1"
          gap={h < 51 ? 2 : 0}
          {...props}
        >
          {type === "file" && (
            <Input hidden type={type} autoFocus ref={input} />
          )}

          <IoAddOutline size={h < 51 ? 24 : 44} />
          {title}
        </Flex>
      )}
    </Box>
  );
};

export default AddItem;
