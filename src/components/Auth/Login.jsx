import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const loginHandler = (e) =>{
    e.preventDefault();
    dispatch(login(email,password))

  }

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading>Welcome to Hero Vired</Heading>
        <form onSubmit={loginHandler} style={{ width: '100%' }}>
         <Box my={'4'} >

          <FormLabel htmlFor="email" children="Email Address" />
          <Input
            type={'email'}
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            </Box>
            <Box my={'4'} >

          <FormLabel htmlFor="password" children="Password" />
          <Input
            type={'password'}
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            </Box>

            <Button my={'4'} colorScheme={'red'} type='submit' >
                Login
            </Button>
            <Box my={'4'} >
                New User? <Link to='/register'>
                    <Button colorScheme={'red'} variant='link' >
                        Sign Up
                    </Button>
                </Link>

            </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
