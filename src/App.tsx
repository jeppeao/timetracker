import { useState } from 'react';
import './App.css'
import * as tt from './services/timetracker_api';
import Layout from './components/layout/layout';

function App() {
  const [user, setUser] = useState<string | null>(null);



  return (

    <Layout
      user={user}
      setUser={setUser}
    />
  )
}

export default App
