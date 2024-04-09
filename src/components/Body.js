// styles and assets
import '../styles/body.css'
import image1 from '../assets/images/image 1.png'
import pause from '../assets/icons/Pause Button.svg'
import next from '../assets/icons/Next page.svg'
import back from '../assets/icons/Back To.svg'

const Body = () =>
{
    const currentExercise = "Jumping Jacks"
    const currentGoal = 50
    const previousRecord = 40
    const nextExercise = "Burpees"
    const nextGoal = 10
    return (
        <body className='body'>
            <div className='top-titles'>
                <h3 id='goal'>Goal: </h3>
                <h3 id='goal-variable'>{currentGoal + " " + currentExercise}</h3>
                <h3 id='record'>Record: </h3>
                <h3 id='record-variable'>{previousRecord + " " + currentExercise}</h3>
            </div>
            <div className='animations'>
                <img className='animation' src={image1} alt='animation' />
            </div>
            <div className='bottom-titles'>
                <h3 id='next'>Next exercise: </h3>
                <h3 id='next-exercise'>{nextGoal + " " + nextExercise}</h3>
            </div>
            <div className='controls'>
                <img src={back} alt='back button' />
                <img src={pause} alt='pause button' />
                <img src={next} alt='next button' />
            </div>
        </body>
    )
}
export default Body