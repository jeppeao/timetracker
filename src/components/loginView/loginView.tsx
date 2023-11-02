import styles from "./loginView.module.css"
import { login } from "../../services/timetracker_api"
import { useState } from "react"

interface LoginViewProps {
  // login: (email:string, password: string) => void;
}

const LoginView = (props:LoginViewProps) => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value
  }))
}
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("hello")
  console.log(formData)
  if (formData.username.length > 0 && formData.password.length > 0) {
    login(formData.username, formData.password)
      .then(res => console.log(res))
  }
}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <h2>Login</h2>
      <label htmlFor="userInput">User:</label>
      <input 
        className={ styles.input } 
        name="username" 
        type="text" 
        onChange={handleChange}
      />
      <label htmlFor="passwordInput">Password:</label>
      <input 
        className={ styles.input }
        name="password"
        type="text"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginView;