import {useState , useEffect} from 'react';
import {Button} from './components/Button'
import './App.css'

function App(){
  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [hours, setHours]=useState(0);
  const [running, setRunning]=useState(false);
  const [color , setColor] = useState('green');
  let stopwatch;
  useEffect(() => {
    if(running){
    stopwatch = setInterval(() => {
        setSeconds(seconds + 1)
        if(seconds === 59){
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        if(minutes === 59){
          setSeconds(0);
          setMinutes(0);
          setHours(hours+1);
        }
    }, 1000);
    }
    return ()=> clearInterval(stopwatch)
  }, [hours,seconds,minutes,running])
  const resetStopWatch = () =>{
      setHours(0);
      setMinutes(0);
      setSeconds(0);
  }
  const changeBtnColor = ()=>{
      if(!running){
        setColor('red');
      }else{
        setColor('green');
      }
  }
  return(
    <div className='stopwatch'>
      <h1>{hours === 0 && minutes === 0 && seconds === 0 ? `0${hours}:0${minutes}:0${seconds}`: `${hours <= 9 ? '0'+hours : hours}:${minutes <= 9 ? '0'+minutes:minutes}:${seconds <= 9 ? '0'+seconds: seconds}`}</h1>  
      <div className='btnBorder'>
      <Button 
        style={{backgroundColor: running ? color : color}}
        onClick={() => {
        changeBtnColor();
        setRunning(r => !r)}} 
        value={running ? 'Pause' : 'Start'}/>
            {' '}
      <Button onClick={resetStopWatch} value='Reset'/>
      </div>
    </div>
  )
}
export default App;