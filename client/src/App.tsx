import './App.css'
import * as tt from './services/timetracker_api';



function App() {
  tt.getUser().then((response:any) => console.log(response))
  return (
    <>
      <div>app works</div>
    </>
  )
}

export default App
