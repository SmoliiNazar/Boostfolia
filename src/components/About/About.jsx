import './about.scss';

const About = () => {
    return (
        <section className='about'>
            <div className="about__title title_fz48">ABOUT US</div>
            <hr className="divider"/>
            <div className="about__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>

            <div className="blocks">
                <div className="blocks-wrapper">
                    <img src="./icons/blocks/brush.png" alt="" />
                    <div className="blocks-wrapper__title title_fz17">CREATIVE DESIGN</div>
                    <div className="blocks-wrapper__descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do . . .
                    </div>
                </div>

                <div className="blocks-wrapper">
                    <img src="./icons/blocks/portfolio.png" alt="" className='portfolio'/>
                    <div className="blocks-wrapper__title title_fz17">UNIQU PORTFOLIO</div>
                    <div className="blocks-wrapper__descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do . . .
                    </div>
                </div>

                <div className="blocks-wrapper">
                    <img src="./icons/blocks/infinite.png" alt="" className='infinite' />
                    <div className="blocks-wrapper__title title_fz17">INFINITE UPDATES</div>
                    <div className="blocks-wrapper__descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do . . .
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;