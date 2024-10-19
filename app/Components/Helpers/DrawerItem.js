import { Text, Button,Icon } from "@chakra-ui/react";
import Link from "next/link";

const DrawerItem = ({ type = "text", href, icon, title, ...props }) => {
  if (type == "link") {
    return (
      <Link href={href}>
        <Text
          display="flex"
          alignItems="center"
          gap="2"
          _hover={{ bg: "gray.200" }}
          px="6"
          py="2"
          {...props}
        >
          <Icon as={icon} />
          {title}
        </Text>
      </Link>
    );
  }
  if (type == "button") {
    return (
      <Button
        mx="5"
        mt="3"
        mb="1"
        rightIcon={<Icon as={icon} boxSize={5} />}
        {...props}
      >
        {title}
      </Button>
    );
  }
  return (
    <Text
      display="flex"
      alignItems="center"
      gap="2"
      cursor="pointer"
      _hover={{ bg: "gray.200" }}
      px="6"
      py="2"
      {...props}
    >
      <Icon as={icon} />
      {title}
    </Text>
  );
};

export default DrawerItem;
