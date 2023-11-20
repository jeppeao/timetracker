import styles from "./loginView.module.css"
import { useState } from "react"
import { saveLoginInfo } from "../../utils/util"

interface LoginViewProps {
  goToHome: () => void;
  setUser: (username: string | null) => void;
  login: (user: string, password: string) => Promise<boolean>;
}

const LoginView = (props:LoginViewProps) => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const [remember, setRemember] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    })) 
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.username.length > 0 && formData.password.length > 0) {
      props.login(formData.username, formData.password)
        .then(res => {
          if (res) {
            if (remember) {
              saveLoginInfo(formData.username, formData.password);
            }
            props.goToHome();
          }
        })
    }
  }

  const handleToggle = () => {
    setRemember(remember => !remember);
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
        <div className={styles.submitArea}>
          <button 
            type="submit"
            className={styles.button}
          >Login</button>
          <div className={styles.rememberForm}> 
            <input 
              type="checkbox"
              id="remember"
              name="remember"
              checked={remember}
              onChange={handleToggle}
            ></input>
            <label 
              className={styles.rememberLabel}
              htmlFor="remember"
            >Remember me</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginView;


