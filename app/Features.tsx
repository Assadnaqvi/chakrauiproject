import { Box, HStack ,Icon ,Text ,Flex} from '@chakra-ui/react'
import React from 'react'
import Icon1 from './icons/Icon1'
import Icon2 from './icons/Icon2'
import Icon3 from './icons/Icon3'

const Features = () => {
  return (
   <Box  maxW={"800"} m={"auto"} mt={'18'}>
    <Flex direction={{base:"column" , lg:"row"}}>
    <HStack mb={"20px"}>
        <Icon as={Icon1}/>
        <Text>30 days money back Guarantee</Text>
    </HStack>
    <HStack mb={"20px"}>
        <Icon as={Icon2}/>
        <Text>No setup fees
100% hassle-free</Text>
    </HStack> <HStack mb={"20px"}>
        <Icon as={Icon3}/>
        <Text>No monthly subscription
Pay once and for all</Text>
    </HStack>
    </Flex>
   </Box>
  )
}

export default Features