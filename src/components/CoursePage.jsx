import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
 
  Container,
  Heading,
  HStack,
 
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { server } from '../redux/store';

const CoursePage = () => {
 const {title} = useParams() 
 const [assignments, setAssignments] = useState([])
//  console.log(id)
useEffect(()=>{
   axios.get(`${server}/course/${title}`,{
    withCredentials:true,
}).then((res)=>{
  setAssignments(res.data.assignments)
})
},[title])

const CustomAccordian = ({question,marks,topic,subTopic,level,index})=>{
  return (
    <Accordion mb={'4'} allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          {`Question-${index}`}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <VStack spacing={'12'} alignItems={['center', 'flex-start']}>
    <AccordionPanel>
      {question}
          <HStack>
            <Text color={'red.500'} fontWeight={'bold'}>
              Marks
            </Text>
            <Text>{marks}</Text>
          </HStack>
          <HStack>
            <Text color={'red.500'} fontWeight={'bold'}>
              Topic
            </Text>
            <Text>{topic}</Text>
          </HStack>
          <HStack>
            <Text color={'red.500'} fontWeight={'bold'}>
              subTopic
            </Text>
            <Text>{subTopic}</Text>
          </HStack>
          <HStack>
            <Text color={'red.500'} fontWeight={'bold'}>
              Level
            </Text>
            <Text>{level}</Text>
          </HStack>
    </AccordionPanel>
        </VStack>
  </AccordionItem>
</Accordion>
  )
}

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading textAlign={'center'} color={'red.500'} textTransform={'uppercase'} m={'8'}>{title} Assignments</Heading>
     
        {
          assignments?.length>0?(assignments?.map((item,index)=> {

           return <CustomAccordian
            question={item.question}
            marks={item.marks}
            topic={item.topic}
            subTopic={item.subTopic}
            level={item.level}
            key={index}
            index={index}
            
            />

          })

          ):(
            <Heading mt={'5'} fontSize={'2rem'} color={'red.400'} >No Assignments </Heading>
          )
        }

      
    </Container>
  );
};

export default CoursePage;
