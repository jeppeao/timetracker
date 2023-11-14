import styles from './topbar.module.css'
import UserWidget from '../userWidget/userWidget';

interface TopbarProps {
  goToLanding: () => void;
  goToRegister: () => void;
  goToLogin: () => void;
  user: string | null;
  setUser: (user: string | null) => void;
}

const Topbar = (props: TopbarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titlebox} onClick={props.goToLanding}>
        <h2>timetracker</h2>
      </div>
      <div className={styles.userbox}>
        {
          props.user ? 
            <UserWidget 
              user={props.user}
              setUser={props.setUser}
            /> :
          <div>
            <button onClick={props.goToLogin}>Log in</button>
            <button onClick={props.goToRegister}>Register</button>
          </div>
          
        }
      </div>
    </div>
  )
}

export default Topbar;