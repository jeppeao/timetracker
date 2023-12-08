import styles from "./controlView.module.css"

interface ControlViewProps {

}

const ControlView = (props: ControlViewProps) => {
   const startStr = "00:00";
   const stopStr = startStr;
   const elapsedStr = startStr;
   return (
    <div className={styles.container}>
      <div className={styles.timebar}>
        <span className={styles.startstop}>{startStr + " - " + stopStr}</span>
        <span 
          className={`${styles.bold} ${styles.elapsed}`}
        >{elapsedStr + "h"}</span>
        <button className={styles.editbtn}>e</button>
      </div>
      <div className={styles.tagbar}>
        <div className={styles.tag}>work</div>
        <div className={styles.tag}> timetracker</div>
        <button className={styles.editbtn}>e</button>
      </div>
      <div className={styles.controlbar}>
        <button className={styles.startbtn}>&gt;</button>
      </div>
    </div>
  )
}

export default ControlView;