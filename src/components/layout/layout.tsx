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

const Layout = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);

  const goToLogin = () => {
    setCurrentPage(Page.Login);
  }

  const goToRegister = () => {
    setCurrentPage(Page.Register)
  }

  const showPage = (page: Page) => {
    switch (page) {
      case "LANDING":
        return <LandingView 
          goToLogin={goToLogin}
          goToRegister={goToRegister}
        />
      case "LOGIN":
        return <LoginView/>
      case "REGISTER":
        return <RegisterView/>
    }
  }

  return (
    <div className={styles.container}>
      <Topbar/>
      { showPage(currentPage) }
    </div>
  )
}

export default Layout;