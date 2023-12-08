import { useRef, useState } from "react";
import styles from "./userHomeView.module.css"
import { TimeBlock } from "../../utils/util";
import { useTimer } from "../../utils/hooks";
import DayView from "../dayView/dayView";
import { createBlock, getBlocks } from "../../services/timetracker_api";
import { timeFromEpoch, durationFromSeconds } from "../../utils/util";
import BlockView from "../blockView/blockView";
import ControlView from "../controlView copy/controlView";

interface UserHomeViewProps {
  username: string;
}

const UserHomeView = (props: UserHomeViewProps) => {

  const { 
    start, stop, resume, reset, startTime, stopTime, elapsedTime, setStartTime
  } = useTimer();

  const startStr = startTime ? timeFromEpoch(startTime) : "00:00";
  const stopStr = stopTime ? timeFromEpoch(stopTime) : "00:00";
  const elapsedStr = elapsedTime ? durationFromSeconds(elapsedTime) : "00:00";

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
    const text = (!startTime || stopTime) ? "START" : "END";
    const style = (!startTime || stopTime) ? styles.startbtn : styles.stopbtn;
    
    return (
      <button className={`${style} ${styles.button}`} onClick={handleClick}>{text}</button>
    )
  
  }

  return (
    <div className={styles.container}>
      <ControlView/>
      {/* <div className={styles.blockbox}>
        <div className={styles.timebar}>
          <span>{startStr + " - " + stopStr}</span>
          <span className={styles.bold}>{elapsedStr + "h"}</span>
          <button className={styles.tagbtn}>...</button>
          { timerButton() } 

        </div>
        <div className={styles.tagbar}>
          <div className={styles.tagdisplay}>
          </div>
          <div className ={styles.tagcontrol}>
            <button className={styles.tagbtn}>+</button>
            <button className={styles.tagbtn}>-</button>
          </div>
        </div>

      </div> */}
      


      <div className={styles.calenderview}>
        <DayView day={new Date(Date.now())}/>
        {/* <button onClick={makeBlock}>createBlock</button>
        <button onClick={fetchBlocks}>getBlocks</button> */}
      </div>
    </div>
  )
}

export default UserHomeView;