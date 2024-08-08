import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavApp from './Nav';
import Admin from './Admin';
import Students from './Students';
import Logout from './Logout';
import GetStarted from './GetStarted'; // Import the new component
import { StudentProvider } from './StudentContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavApp />,
    children: [
      {
        index: true,
        element: <GetStarted />, // Set GetStarted as the default route
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return (
    <StudentProvider>
      <RouterProvider router={router} />
    </StudentProvider>
  );
}

export default App;
