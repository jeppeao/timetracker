import { useRef, useState } from "react";
import styles from "./userHomeView.module.css"
import { TimeBlock } from "../../utils/util";
import { useTimer } from "../../utils/hooks";

interface UserHomeViewProps {
  username: string;
}

const UserHomeView = (props: UserHomeViewProps) => {

  const { 
    start, stop, resume, reset, startTime, stopTime, elapsedTime, setStartTime
  } = useTimer();



  const timerButton = () => {
    if (! startTime || stopTime) {
      return (
      <button className={styles.button} onClick={start}>Start</button>
      )
    } else {
      return (
        <button className={styles.button} onClick={stop}>Stop</button>
      )
    }
  }

  return (
    <div className={styles.container}>
      Home of {props.username}
      <div>
        {"Elapsed seconds: " + (elapsedTime || "0")}
      </div>
      
      { timerButton() }
      {stopTime ? <button className={styles.button} onClick={resume}>Extend</button> : false}
    </div>
  )
}

export default UserHomeView;