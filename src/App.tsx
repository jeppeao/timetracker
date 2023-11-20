import { useState } from 'react';
import './App.css'
import * as tt from './services/timetracker_api';
import Layout from './components/layout/layout';
import { login } from './services/timetracker_api';

function App() {
  const [user, setUser] = useState<string | null>(null);

  const appLogin = (user: string, password: string) => {
    return login(user, password)
    .then(res => {
      if (res.status === 200) {
        setUser(user);
        return true;
      }
      return false;
    })
  }

  return (

    <Layout
      user={user}
      setUser={setUser}
      login={appLogin}
    />
  )
}

export default App
