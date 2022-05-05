import './styles.css'
import Logo from '../../assets/logo.svg';
function Footer() {
    return(
        <footer>
            <div className='footer-left'>
            <img src={Logo} alt='logo' />
            <p>
                Lorem
            </p>
            </div>
            <div className='footer-right'>
            <p>
                Lorem
            </p>

            </div>
        </footer>
    )
}
export default Footer;