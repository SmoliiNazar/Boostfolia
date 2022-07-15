import './header.scss'

const Header = () => {
    return (
        <section className='header'>
            <div className="container">
                <div className="header__logo-wrapper">
                    <img src="./icons/logo.png" alt="logo of bostfolia" />
                    <span class="header__title title_fz40">BOOSTFOLIA</span>
                </div>
            </div>
        </section>            
    );
};

export default Header;