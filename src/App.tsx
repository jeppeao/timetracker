import { useState } from 'react';
import './App.css'
import * as tt from './services/timetracker_api';



function App() {
  const [user, setUser] = useState<string | null>(null);
  tt.getUser().then((response:string) => setUser(response))
  return (
    <>
      <div>app works, user: {user || "no user logged in"}</div>
    </>
  )
}

export default App
