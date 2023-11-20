import styles from './landingView.module.css'
import LoginView from "../loginView/loginView";
import RegisterView from "../registerView/registerView";
import { loadLoginInfo } from '../../utils/util';

interface LandingViewProps {
  goToLogin: () => void;
  goToRegister: () => void;
  goToHome: () => void;
  login: (user: string, password: string) => Promise<boolean>;
}

const LandingView = (props: LandingViewProps) => {
  const loginInfo = loadLoginInfo();
  
  if (loginInfo) {
    props.login(loginInfo.user, loginInfo.password)
    .then(res => {
      if (res) {
        props.goToHome();
      }
    })
  }

  return (
    <div className={styles.container}>
      Welcome! Please log in or register

    </div>
  )
}

export default LandingView;