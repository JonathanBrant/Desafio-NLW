import { useContext } from 'react';
import {CountdownContext } from '../contexts/CountdownContexte'
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { minutes, 
            seconds, 
            hasFinished, 
            isActive, 
            startCountdown, 
            resetCountdown 
            } = useContext(CountdownContext)

    const [minuteLeft, minutetRight] = String(minutes).padStart(2, "0").split('');
    const [secondLeft, secontRIght] = String(seconds).padStart(2, "0").split('');

    
    return(
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minutetRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secontRIght}</span>
            </div>
        </div>

        { hasFinished ? (
             <button 
             disabled 
             className={styles.countdownButton}
             >
                 Ciclo encerrado
             </button>
        ) : (
            <>
                { isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
            >
                Abandonar ciclo
            </button>
        ) : (
            <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>  
        )}
            </>
        )}
    </div>
    );
}