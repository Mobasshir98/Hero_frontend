import {
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createAssignment } from '../../redux/actions/admin';
import { server } from '../../redux/store';
import Sidebar from './Sidebar';

const CreateAssignment = () => {
  const [question, setQuestion] = useState('');
  const [marks, setMarks] = useState('');
  const [topic, setTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [level, setLevel] = useState('');
  const { loading, error, message } = useSelector(state => state.admin);
  const [uploadMessage, setuploadMessage] = useState('');
  const dispatch = useDispatch();

  const uploadCSV = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await axios.post(`${server}/csvUpload`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    setuploadMessage(data.message);
  };

  const submitHandler = e => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append('question', question);
    myForm.append('marks', marks);
    myForm.append('topic', topic);
    myForm.append('subTopic', subTopic);
    myForm.append('level', level);

    dispatch(createAssignment(myForm));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (uploadMessage) {
      toast.success(uploadMessage);
      setuploadMessage('');
    }
  }, [dispatch, error, message, uploadMessage]);
  
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container h={'95vh'}>
        <form onSubmit={submitHandler}>
          <VStack mt={'20'} h={'full'} justifyContent="center" spacing={'16'}>
            <Heading textTransform={'uppercase'} color="red.500">
              Create Assignment
            </Heading>
            <Input
              type={'text'}
              required
              value={question}
              placeholder="Question"
              onChange={e => setQuestion(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={marks}
              placeholder="Marks"
              onChange={e => setMarks(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={topic}
              placeholder="Topic"
              onChange={e => setTopic(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={subTopic}
              placeholder="SubTopic"
              onChange={e => setSubTopic(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={level}
              placeholder="Level"
              onChange={e => setLevel(e.target.value)}
            />

            <Button
              isLoading={loading}
              w="full"
              colorScheme={'red'}
              type="submit"
            >
              Create
            </Button>
          </VStack>
        </form>
        <Text textAlign={'center'}>OR</Text>

        <Input
          type={'file'}
          accept=".csv"
          required
          css={{
            '&::file-selector-button': {
              cursor: 'pointer',
              marginLeft: '-5%',
              width: '110%',
              border: 'none',
              height: '100%',
              color: 'red',
              backgroundColor: 'white',
            },
          }}
          onChange={uploadCSV}
        />
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateAssignment;
