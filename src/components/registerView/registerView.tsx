import styles from "./registerView.module.css"
import { register } from "../../services/timetracker_api"
import { useState } from "react"

interface RegisterViewProps {
  goToHome: () => void;
  setUser: (username: string | null) => void;
}

const RegisterView = (props: RegisterViewProps) => {
 
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
    register(formData.username, formData.password)
      .then(res => {
        props.setUser(formData.username);
        props.goToHome();
      })
  }
}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterView;