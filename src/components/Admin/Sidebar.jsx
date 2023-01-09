import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiAddBoxFill, RiBook2Fill,  RiDashboardFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
  return (
    <VStack
      spacing={'8'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193.0.5)'}
    >
      <Link to="/admin/dashboard">
        <Button variant={'ghost'} fontSize={'larger'} colorScheme={location.pathname==='/admin/dashboard'?'red':''}>
          <RiDashboardFill style={{ margin: '4px' }} />
          Dashboard
        </Button>
      </Link>
      <Link to="/admin/dashboard/createCourse">
        <Button variant={'ghost'} fontSize={'larger'} colorScheme={location.pathname==='/admin/dashboard/createCourse'?'red':''}>
          <RiAddBoxFill style={{ margin: '4px' }} />
          Creat Courses
        </Button>
      </Link>
      <Link to="/admin/dashboard/createAssignment">
        <Button variant={'ghost'} fontSize={'larger'} colorScheme={location.pathname==='/admin/dashboard/createAssignment'?'red':''}>
          <RiBook2Fill style={{ margin: '4px' }} />
          Create Assignment
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;
