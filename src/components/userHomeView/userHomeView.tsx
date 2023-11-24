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
      <div className={styles.timerbar}>
        <div className={styles.tagdisplay}></div>
        <input type="text" placeholder="Add new tag"></input>
        <button>tags</button>
        <span>00:00 - 00:00</span>
        <span className={styles.bold}>00:00h</span>
        { timerButton() } 
      </div>


      {/* <div className={styles.timercontainer}>
          
       <div className={styles.tagbox}>
       </div>
       <div className={styles.controlbox}>
         { timerButton() }          
         <div>
           <input></input>
           <button>+</button>  
         </div>
         <select>
           <option selected disabled hidden>Add</option>
         </select>
         <select>
           <option selected disabled hidden>Remove</option>
         </select>
        </div>
         <div className={styles.infobox}>
           <div>00:00h</div>
           <div>xx:yy-xx:yy</div>
           <div className={styles.taginfo}>
             <div>tag1</div>
             <div>tag2</div>
             <div>tag3</div>
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