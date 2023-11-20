import styles from "./userWidget.module.css";
import { logout } from '../../services/timetracker_api';
import { clearLoginInfo } from "../../utils/util";
import { useState } from "react";

interface UserWidgetProps {
  user: string | null;
  setUser: (user:string | null) => void;
  goToLanding: () => void;
}

const UserWidget = (props: UserWidgetProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  const handleLogout = () => {
    logout();
    clearLoginInfo();
    props.setUser(null);
    props.goToLanding();
  }

  const userOptions = () => {
    return (
      <div className={styles.optionsmenu}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  return (
    <>
      <button onClick={toggleMenu}>{props.user}</button>
      {isOpen ? userOptions() : false}
    </>
  )
}

export default UserWidget;