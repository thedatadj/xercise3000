// styles and assets
import '../styles/body.css'
import image1 from '../assets/images/image 1.png'
import pause from '../assets/icons/Pause Button.svg'
import play from '../assets/icons/Circled Play.svg'
import next from '../assets/icons/Next page.svg'
import back from '../assets/icons/Back To.svg'
// hooks
import { useState } from 'react'

const Body = () =>
{
    const [pausePlay, setPausePlay] = useState(play)
    const currentExercise = "Jumping Jacks"
    const currentGoal = 50
    const previousRecord = 40
    const nextExercise = "Burpees"
    const nextGoal = 10
    var time = pausePlay === pause ? "00:01" : ""
    var repetitions = pausePlay === pause ? "1" : ""
    const handleClick = () =>
    {
        pausePlay === pause ? setPausePlay(play) : setPausePlay(pause)
    }
    return (
        <body className='body'>
            <div className='top-titles'>
                <h3 id='goal'>Goal: </h3>
                <h3 id='goal-variable'>{currentGoal + " " + currentExercise}</h3>
                <h3 id='record'>Record: </h3>
                <h3 id='record-variable'>{previousRecord + " " + currentExercise}</h3>
            </div>
            <div className='animations'>
                <h1 id='timer'>{time}</h1>
                <img className='animation' src={image1} alt='animation' />
                <h1 id='counter'>{repetitions}</h1>
            </div>
            <div className='bottom-titles'>
                <h3 id='next'>Next exercise: </h3>
                <h3 id='next-exercise'>{nextGoal + " " + nextExercise}</h3>
            </div>
            <div className='controls'>
                <img src={back} alt='back button' />
                <img onClick={handleClick} src={pausePlay} alt='pause button' />
                <img src={next} alt='next button' />
            </div>
        </body>
    )
}
export default Body