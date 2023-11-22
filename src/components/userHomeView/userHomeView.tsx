import { useRef, useState } from "react";
import styles from "./userHomeView.module.css"
import { TimeBlock } from "../../utils/util";
import { useTimer } from "../../utils/hooks";
import DayView from "../dayView/dayView";
import { createBlock, getBlocks } from "../../services/timetracker_api";

interface UserHomeViewProps {
  username: string;
}

const UserHomeView = (props: UserHomeViewProps) => {

  const { 
    start, stop, resume, reset, startTime, stopTime, elapsedTime, setStartTime
  } = useTimer();

  const makeBlock = () => {
     const startTime = new Date(Date.now());
     const endTime = new Date(Date.now() + 100000000);
     createBlock(props.username, startTime, endTime);
  }

  const fetchBlocks = () => {
    const from = new Date(0);
    const to = new Date(Date.now()+ 1000000000)
    getBlocks(props.username, from, to)
    .then(res => res.json())
    .then(res => console.log(res))
  }

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
      <DayView/>
      <button onClick={makeBlock}>createBlock</button>
      <button onClick={fetchBlocks}>createBlock</button>
    </div>
  )
}

export default UserHomeView;