import { useEffect, useState } from "react";
import "../styles/ResetPaswd.css"



function CountdownTimer(){

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [countdownActive, setCountdownActive] = useState(true);
  
    useEffect(() => {
      let countdownInterval;
  
      if (countdownActive) {
        countdownInterval = setInterval(() => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            setCountdownActive(false);

          } else if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
      }
  
      return () => {
        clearInterval(countdownInterval);
      };
    }, [minutes, seconds, countdownActive]);
    

    function restartCountdown() {
        setMinutes(1);
        setSeconds(0);
        setCountdownActive(true);
    }


    return(
        <div className="countdownDiv">
            <h5 className="countdown_Timer" id="countdown_Timer">{`${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`}</h5>
            <button className="resend-verification timeDiv" onClick={restartCountdown} disabled={countdownActive}>
                Resend
            </button>        
        </div>
    )
}

export default CountdownTimer;