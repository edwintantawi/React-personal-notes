import React from 'react';
import { Layout } from '../components/Layout';
import { Typography } from '../components/Typography';
import { Avatar } from '../components/Avatar';

function App() {
  return (
    <Layout>
      <header className="flex justify-center items-center gap-2 py-4">
        <Avatar />
        <Typography
          component="h1"
          variant="heading"
          fontWeight="bold"
          className="text-center text-blue-500"
        >
          React personal notes
        </Typography>
      </header>
    </Layout>
  );
}

export { App };
