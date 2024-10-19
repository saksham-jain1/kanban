"use client";
import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import InnerHeader from "../../Components/InnerHeader";
import AddItem from "../../Components/Helpers/AddItem";
import BoardCard from "../../Components/Helpers/BoardCard";

const WorkspacePage = ({ params }) => {
  const data = {
    WorkspaceName: "Hello",
    cards: ["hello", "new", "w1e "],
  };
  return (
    <Box>
      <InnerHeader workspaceId={params.workspaceId} />
      <Heading size="md" mt="10" mx={{ base: "12", lg: "10%" }}>
        Boards
      </Heading>
      <SimpleGrid
        mx={{ base: "12", lg: "8%" }}
        mt="5"
        gap={{ base: 5, md: 10 }}
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        width={{ lg: "80%" }}
      >
        <BoardCard
          data={{ bg: "blue.400", name: "Hello World", id: "1234" }}
          menu
        />
        <BoardCard
          data={{ bg: "blue.400", name: "Hello World", id: "1234" }}
          menu
        />
        <BoardCard
          data={{ bg: "blue.400", name: "Hello World", id: "1234" }}
          menu
        />
        <BoardCard
          data={{ bg: "blue.400", name: "Hello World", id: "1234" }}
          menu
        />
        <BoardCard
          data={{ bg: "blue.400", name: "Hello World", id: "1234" }}
          menu
        />
        <AddItem
          h="140"
          minW="200px"
          w="240"
          maxW="100%"
          title="Create Board"
        />
      </SimpleGrid>
    </Box>
  );
};

export default WorkspacePage;
