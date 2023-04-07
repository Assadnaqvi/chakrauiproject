import React from 'react'
import { Box ,Center,Heading,Text} from '@chakra-ui/react'
const Header = () => {
  return (
    <Box textAlign={{base:"left", md:"left" ,lg:"center"}} pl={"15px"} bg="#6B46C1" pt="88px" pb="250" color="white">
        <Heading pb="10px">Simple pricing for your business</Heading>
   <Text>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}

export default Header