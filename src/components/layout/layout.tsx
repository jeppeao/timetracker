import Topbar from "../topbar/topbar";
import LandingView from "../landingView/landingView";
import LoginView from "../loginView/loginView";
import RegisterView from "../registerView/registerView";
import { useState } from "react";
import styles from './layout.module.css'

enum Page {
  Landing = "LANDING",
  Login = "LOGIN",
  Register = "REGISTER"
}

interface LayoutProps {
  user: string | null;
  setUser: (username: string | null) => void;
}

const Layout = (props: LayoutProps) => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);

  const goToLogin = () => {
    setCurrentPage(Page.Login);
  }

  const goToRegister = () => {
    setCurrentPage(Page.Register);
  }

  const goToLanding = () => {
    setCurrentPage(Page.Landing);
  }

  const showPage = (page: Page) => {
    switch (page) {
      case "LANDING":
        return <LandingView 
          goToLogin={goToLogin}
          goToRegister={goToRegister}
        />
      case "LOGIN":
        return <LoginView
          goToRegister={goToRegister}
          setUser={props.setUser}
        />
      case "REGISTER":
        return <RegisterView/>
    }
  }

  return (
    <div className={styles.container}>
      <Topbar 
        goToLanding={goToLanding}
        goToLogin={goToLogin}
        goToRegister={goToRegister}
        user={props.user}
        setUser={props.setUser}
      />
      { showPage(currentPage) }
    </div>
  )
}

export default Layout;