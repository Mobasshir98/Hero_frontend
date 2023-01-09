import {
    Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('')
 const dispatch = useDispatch()
  const registerHandler = (e) =>{
    e.preventDefault()

    const formData = {
      name,
      email,
      password
    }

    // formData.append("name",name)
    // formData.append("password",password)
    // formData.append("email",email)
    console.log(formData)
    dispatch(register(formData))


  }

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'}>Register User</Heading>
        <form onSubmit={registerHandler} style={{ width: '100%' }}>
            <Box my={'4'} display={'flex'} justifyContent='center' >
                <Avatar size={'2xl'}  />
            </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              type={'text'}
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              type={'email'}
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              type={'password'}
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>

          <Button my={'4'} colorScheme={'red'} type="submit">
            Sign Up
          </Button>
          <Box my={'4'}>
            Already a User?
            <Link to="/login">
              <Button colorScheme={'red'} variant="link">
                Login 
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
