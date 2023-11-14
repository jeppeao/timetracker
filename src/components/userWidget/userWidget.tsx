import styles from "./userWidget.module.css";
import { logout } from '../../services/timetracker_api';
import { useState } from "react";

interface UserWidgetProps {
  user: string | null;
  setUser: (user:string | null) => void;
}

const UserWidget = (props: UserWidgetProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  const handleLogout = () => {
    logout();
    props.setUser(null);
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