import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FiMenu } from 'react-icons/fi';
import {RiDashboardFill, RiLogoutBoxLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user';

const Header = ({isAuth=false,user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const HandleLogout = ()=>{
    dispatch(logout())
    onClose()
  }
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'red'}
        width={'12'}
        height={'12'}
        position={'fixed'}
        top="6"
        left="6"
        zIndex={'overlay'}
      >
        <FiMenu />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>HERO VIRED</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link onClick={onClose} to='/'>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link onClick={onClose} to='/courses'>
                <Button variant={'ghost'}>All Courses</Button>
              </Link>

              <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'} width="80%" >
                {isAuth?(<>
                
                <VStack>
                    <HStack>
                    <Link onClick={onClose} to='/profile' >
                        <Button variant={'ghost'} colorScheme={'red'} >
                            Profile
                        </Button>
                    </Link>
                        <Button variant={'ghost'} colorScheme={'red'} onClick={HandleLogout} >
                            <RiLogoutBoxLine/>
                            Logout
                        </Button>
                    </HStack>

                    {
                        user&&user.role==='admin' && <Link onClick={onClose} to='/admin/dashboard'>
                            <Button variant={'ghost'} colorScheme={'red'}  >
                                <RiDashboardFill  style={{margin:'4px'}} />
                                Dashboard
                            </Button>
                        </Link>
                    }

                </VStack>
                
                </>):(
                    <>
                    <Link onClick={onClose} to='/login' >
                        <Button variant={'ghost'} colorScheme={'red'} >
                            Login
                        </Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to='/register' >
                        <Button variant={'ghost'} colorScheme={'red'} >
                            Sign Up
                        </Button>
                    </Link>
                    </>
                )}

              </HStack>
            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
