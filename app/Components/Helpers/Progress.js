import { Box, Flex } from "@chakra-ui/react";

const ProgressBar = ({ complete, inProgress }) => {
  const completedWidth = `${complete}%`;
  const inProgressWidth = `${inProgress}%`;

  return (
    <Flex align="center">
      <Box
        bg="green.300"
        h="8px"
        borderRadius="md"
        mr="1"
        flex={completedWidth}
      />
      <Box
        bg="blue.300"
        h="8px"
        borderRadius="md"
        mr="1"
        flex={inProgressWidth}
      />
    </Flex>
  );
};

export default ProgressBar;
