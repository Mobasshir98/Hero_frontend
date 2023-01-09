import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import CreateAssignment from './components/Admin/CreateAssignment';
import CreateCourse from './components/Admin/CreateCourse';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CoursePage from './components/CoursePage';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { myProfile } from './redux/actions/user';
import Protected from './components/Protected';

function App() {
  const dispatch = useDispatch();
  const { isAuth, user, message, error } = useSelector(state => state.user);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(myProfile());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuth={isAuth} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:title" element={<CoursePage />} />
        {!isAuth && <Route path="/login" element={<Login />} />}
        <Route
          path="/login"
          exact
          element={<Navigate replace to="/profile" />}
        />
        <Route
          path="/register"
          exact
          element={<Register/>}
        />

        {/* {!isAuth && <Route path="/register" element={<Register />} />} */}
        <Route element={<Protected isAuth={isAuth} />}>
          <Route path="/profile" element={<Profile user={user} />} />
        </Route>
        <Route path="/admin/dashboard" element={<Dashboard user={user} />} />
        <Route
          element={<Protected isAdmin={user?.role==='admin'?true:false} />}
        >
          <Route
            path="/admin/dashboard/createCourse"
            element={<CreateCourse />}
          />
          <Route
            path="/admin/dashboard/createAssignment"
            element={<CreateAssignment />}
          />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
