import '../../styles/header.css'
import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <>
            <nav className='header-nav'>
                <img src={logo} alt="" className='logo-image' />
            </nav>
        </>
    );
}
export default Header;
