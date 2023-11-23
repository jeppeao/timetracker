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
    const handleClick = (!startTime || stopTime) ? start : stop;
    const text = (!startTime || stopTime) ? "START" : "RUNNING...";
    const style = (!startTime || stopTime) ? styles.startbtn : styles.stopbtn;
    
    return (
      <button className={`${style} ${styles.button}`} onClick={handleClick}>{text}</button>
    )
  
  }

  return (
    <div className={styles.container}>
      <div className={styles.timercontainer}>
        { timerButton() }   
       <div className={styles.tagbox}>
         <div>new tag</div>
         <div>tags selected...</div>
         <div>add tags</div>
  
        </div>
      </div>
      <div className={styles.calenderview}>
        <DayView day={new Date(Date.now())}/>
        {/* <button onClick={makeBlock}>createBlock</button>
        <button onClick={fetchBlocks}>getBlocks</button> */}
      </div>
    </div>
  )
}

export default UserHomeView;