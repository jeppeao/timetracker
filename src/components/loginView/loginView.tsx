import styles from "./loginView.module.css"
import { login } from "../../services/timetracker_api"
import { useState } from "react"

interface LoginViewProps {
  goToRegister: () => void;
  setUser: (username: string | null) => void;
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
  if (formData.username.length > 0 && formData.password.length > 0) {
    login(formData.username, formData.password)
      .then(res => {
        if (res.status === 200) {
          props.setUser(formData.username);
        }
      })
  }
}

  return (
    <div className={styles.container}>
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
        <button 
          type="submit"
          className={styles.button}
        >Login</button>
      </form>
      <button 
        onClick={props.goToRegister}
        className={styles.button}
      >Register</button>
    </div>
  )
}

export default LoginView;