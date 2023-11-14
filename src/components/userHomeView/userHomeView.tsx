import styles from "./userHome.module.css"

interface UserHomeViewProps {
  username: string;
}

const UserHomeView = (props: UserHomeViewProps) => {
  return (
    <div>
      Home of {props.username}
    </div>
  )
}

export default UserHomeView;