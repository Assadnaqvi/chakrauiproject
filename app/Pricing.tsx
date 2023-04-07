import React from 'react'
import { Box,Flex,Text,Heading,Button,Icon,HStack} from '@chakra-ui/react'
import checkMarkicon from './icons/checkMarkicon'

const Pricing = () => {
  return (
    <Box mx={{base:"20px",lg: "auto"}} maxW={"950px"} m={"auto"} mt={"-150px"} bg={"white"} borderRadius={"16px"} overflow={"hidden"} boxShadow={" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>
        <Flex direction={{base:"column" , md:"column" , lg:"row"}}>
        <Box bg="#cbb8ee" p="40px" textAlign={"center"}>
            <Text fontSize={"24px"} fontWeight={"bold"}>Premium PRO</Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Text>billed just once</Text>
            <Button mt={"12"} w={"280px"} color={"white"} bg={"#805AD5"}>Get Started</Button>
        </Box>
    <Box pt={"50px"} pl={"25"} pr={"10px"}>
        <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
    <HStack mb={15}>
        <Icon as={checkMarkicon}/>
        <Text >International calling and messaging API</Text>
    </HStack>
    <HStack mb={15}>
        <Icon as={checkMarkicon}/>
        <Text >Additional phone numbers</Text>
    </HStack><HStack mb={15}>
        <Icon as={checkMarkicon}/>
        <Text >Automated messages via Zapier</Text>
    </HStack><HStack mb={15}>
        <Icon as={checkMarkicon}/>
        <Text  >24/7 support and consulting</Text>
    </HStack>
    </Box>
    </Flex> </Box>
  )
}

export default Pricing