// styles and assets
import '../styles/header.css'
import menu from '../assets/icons/Menu.svg'

const Header = () =>
{
    return (
        <header className='header'>
            <img src={menu} alt='menu' />
            <h1>Xercise 3000</h1>
        </header>
    )
}
export default Header