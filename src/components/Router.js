import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import LoginForm from './LoginForm';
import ProtectedRoute from './ProtectedRoute';
import Workouts from './Workouts';
import MealsPlan from './MealsPlan';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/workouts'
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
          }
        />
        <Route
          path='/meals-plan'
          element={
            <ProtectedRoute>
              <MealsPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user'
          element={
            <ProtectedRoute>
              <></>
            </ProtectedRoute>
          }
        />
        <Route path='sign-in' element={<LoginForm />} />
      </Route>
    </Routes>
  );
}
