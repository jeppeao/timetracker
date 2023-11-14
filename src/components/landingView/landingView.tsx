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
      Welcome! Please log in or register
    </div>
  )
}

export default LandingView;