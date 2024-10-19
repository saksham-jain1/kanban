"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import useBgModal from "../../Hooks/useBgModal";
import MyModal from "./MyModal";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const BgModal = () => {
  const { isOpen, onClose } = useBgModal();
  const [search, setSearch] = useState("");
  const [backgrounds, setBackgrounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const clientId = process.env.UNSPLASH_CLIENT_ID;

  const searchBg = async () => {
    if (search.length < 4) return;
    const data = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=16&query=${search}&client_id=${clientId}`
    );
    setBackgrounds(data.data);
  };

  const body = (
    <Box>
      <InputGroup autoFocus>
        <Input
          placeholder="Enter search keywords"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && searchBg()}
        />
        <InputRightAddon p="0">
          <Button
            borderRadius="0"
            onClick={searchBg}
            colorScheme="blue"
            rightIcon={<IoSearch />}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      {backgrounds.results && (
        <Checkbox size="md" colorScheme="green">
          Set random similar backgrounds
        </Checkbox>
      )}
      <Flex w="100%" wrap="wrap" justifyContent="space-evenly" gap="3" mt="4">
        {backgrounds?.results?.map((item) => {
          return (
            <Flex
              key={item.id}
              cursor="pointer"
              position="relative"
              color="transparent"
            >
              <Image
                alt={item.slug}
                borderRadius="md"
                width="200"
                height="150"
                src={item.urls.thumb}
              />
              <Flex
                h="100%"
                borderRadius="md"
                w="100%"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                _hover={{ color: "white", bgColor: "blackAlpha.600" }}
              >
                Click to set wallpaper
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
  return (
    <MyModal
      isOpen={isOpen}
      onClose={onClose}
      title="Set Background"
      body={body}
      secondaryActionLabel="Close"
      secondaryAction={onClose}
    />
  );
};

export default BgModal;
