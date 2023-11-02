import { useState } from 'react';
import './App.css'
import * as tt from './services/timetracker_api';
import Layout from './components/layout/layout';

function App() {
  // const [user, setUser] = useState<string | null>(null);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: ""
  // })

  // const loadUser = async () => {
  //   tt.getUser().then((response:string) => setUser(response))
  // }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value
  //   }))
  // }
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   tt.register(formData.username, formData.password);
  // }
  return (
    <>
    <Layout/>
      {/* <div>app works, user: {user || "no user logged in"}</div>
      <button onClick={() => tt.login('testUser', 'pass')}>Login</button>
      <button onClick={tt.logout}>Logout</button>
      <button onClick={loadUser}>getUser</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="enter username" onChange={handleChange}/>    
        <input type="text" name="password" placeholder="enter password" onChange={handleChange}/>    
        <button type="submit">Register</button>
      </form> */}
    </>
  )
}

export default App
