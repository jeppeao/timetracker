import styles from './landingView.module.css'
import LoginView from "../loginView/loginView";
import RegisterView from "../registerView/registerView";


interface LandingViewProps {
  goToLogin: () => void;
  goToRegister: () => void;
}

const LandingView = (props: LandingViewProps) => {
  return (
    <div className={styles.container}>
      LandingView works
      <button onClick={props.goToLogin}>Login</button>
      <button onClick={props.goToRegister}>Register</button>
    </div>
  )
}

export default LandingView;