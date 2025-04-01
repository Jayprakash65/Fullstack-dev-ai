import logo from '../../assets/logo.png'
import './Navigation.css'

const Navigation = () => {

    return(
        <nav className='container'>
            <div className="logo">
                <img src={logo} alt="do some coding" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;