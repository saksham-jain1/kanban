import { Box, SimpleGrid, Heading, Divider } from "@chakra-ui/react";
import WorkspaceCard from "../Components/Helpers/WorksapceCard";
import AddItem from "../Components/Helpers/AddItem";

const dashboardPage = () => {
  return (
    <Box>
      <Heading
        mt="7"
        mx="auto"
        w="max-content"
        textAlign="center"
        borderBottom="4px solid black"
        fontSize="1.8rem"
      >
        Welcome to eKanban Board
      </Heading>
      <Heading fontSize="1.5rem" mt="6" mx={{ base: "12", lg: "10%" }} py="4">
        Workspaces
      </Heading>
      <SimpleGrid
        mx={{ base: "12", lg: "10%" }}
        gap={{ base: 5, md: 10 }}
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        width={{ lg: "80%" }}
      >
        <WorkspaceCard key={"123"} id={"123"} title="Hello" menu />
        <WorkspaceCard title="World" menu />
        <WorkspaceCard title="New" menu />
        <AddItem h="80" title="Create Workspace" />
      </SimpleGrid>
      <Box
        mx={{ base: "12", lg: "10%" }}
        mt="10"
        mb="6"
        borderBottom="1px groove #CBD5E0"
      />
      <Heading fontSize="1.5rem" mx={{ base: "12", lg: "10%" }} pb="4">
        Shared Workspaces
      </Heading>
      <SimpleGrid
        mx={{ base: "12", lg: "10%" }}
        gap={{ base: 5, md: 10 }}
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        width={{ lg: "80%" }}
      >
        <WorkspaceCard title="Hello" />
        <WorkspaceCard title="World" />
        <WorkspaceCard title="New" />
      </SimpleGrid>
    </Box>
  );
};

export default dashboardPage;
