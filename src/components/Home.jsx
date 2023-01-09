import React from 'react'
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import "./home.css"
import {Link} from 'react-router-dom'
import logo from "../assets/images/logo.png"
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'

const Home = () => {
  return (
    <section className='home' >
        <div className="container">
            <Stack direction={["column","row"]} 
            height="100%"
            justifyContent={["center","space-between"]} 
            alignItems="center"
            spacing={["16","56"]}
            >
                <VStack width={"full"} alignItems={['center','flex-end']} spacing={'8'}  >
                    <Heading size={'2xl'} >
                        LEARN FROM THE MASTERS
                    </Heading>
                    <Text  fontSize={'2xl'} textAlign={['center','left']} >
                        We create those who will create the future
                    </Text>
                   <Link to='/courses' >
                    <Button size={"lg"} colorScheme="red" >
                        Explore Now
                    </Button>
                   </Link>
                </VStack>
                <Image boxSize={"200"} src={logo} objectFit="contain" />
            </Stack>
        </div>
        <Box padding={'8'} bg="blackAlpha.700" >
            <Heading
              textAlign={'center'}
              fontFamily='body'
              color={'red.400'}
              children="WHERE OUR LEARNERS WORK"
              />
              <HStack  className='companies' justifyContent={'space-evenly'} marginTop='4' >
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>
              </HStack>
        </Box>

    </section>
  )
}

export default Home