import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Index from './pages/Index';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import NoPage from './pages/NoPage';


function App() {
  const [user, setUser] = useState();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="create-account" element={<CreateAccount setUser={setUser} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
