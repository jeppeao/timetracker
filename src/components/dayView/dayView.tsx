import styles from "./dayView.module.css"

interface DayViewProps {
  day: Date;
}

enum DAYS {
  MON=1,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

const DayView = (props: DayViewProps) => {

  const date = props.day.getDate();
  const month = props.day.getMonth();
  const year = props.day.getFullYear().toString().substring(2);
  const dato = [date, month + 1, year].join('/')

  const top = (14) / 24 * 100;
  const height = (16-14) / 24 * 100;

  const testStyle = {
    height: height + "%",
    top: top + "%"
  }
  
  const addTimeScale = (hInterval: number) => {
    const nInterval = 24 / hInterval;
    const intervals = []
    for (let i=0; i<nInterval; i++) {
      const hours = i * hInterval;
      const label = String(hours).padStart(2, '0') + ':00';
      intervals.push(
        <div 
          key={i}
          className={i+1<nInterval ? styles.scalebox : styles.lastscalebox}
        >{label}</div>
      );
    }

    return (
      <>
        {intervals}
      </>
    )
  }

  return (
    <div className={styles.container}>
      <h4>
        <span>{DAYS[props.day.getDay()]}</span>
        <span>{dato}</span>
      </h4>
      <div className={styles.scalecontainer}>
        { addTimeScale(4)}
        <div className={styles.test} style={testStyle}>

        </div>
      </div>
    </div>
  )
}

export default DayView;