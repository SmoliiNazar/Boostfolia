import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__wrapper">
                <div className="footer__wrapper-img">
                    <img src="./icons/logo.png" alt="" />
                </div>
                <div className="footer__wrapper-title">BOOSTFOLIA</div>
                <div className="footer__wrapper-descr">MADE WITH LOVE BY CREATIVEPRODUCT ♥</div>
                <div className="footer__wrapper-socials">
                    <img src="./icons/telegram.svg" alt="dwdw" />
                    <img src="./icons/twitter.svg" alt="wdwdw" />
                    <img src="./icons/facebook.svg" alt="wdw" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;