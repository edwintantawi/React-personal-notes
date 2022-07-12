import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../layouts/AppLayout';
import { AppBar } from '../components/AppBar';
import { TabBars, TabBar } from '../components/Tabs';
import { Divider } from '../components/Divider';
import { HomePage } from '../components/pages/HomePage';

function App() {
  return (
    <AppLayout>
      <AppBar />

      <TabBars>
        <TabBar to="/">Home</TabBar>
        <Divider />
        <TabBar to="/archived">Archived</TabBar>
      </TabBars>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<p>archived</p>} />
      </Routes>
    </AppLayout>
  );
}

export { App };
