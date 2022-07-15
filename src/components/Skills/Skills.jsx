import './skills.scss';

const Skills = () => {
    return (
        <section className='skills'>
            <div className="container">
                <div className="about__title title_fz48">WHO WE ARE</div>
                    <hr className="divider"/>
                    <div className="about__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>

                <div className="about__Jame-wrapper">
                    <div className="skills-wrapper">
                        <div className="avatar">
                        <img src="./imgs/robert.jpg" alt="robert" />
                        </div>
                        <div className="skills-wrapper__name">JANE SMITH</div>
                        <div className="skills-wrapper__prof">DESIGNER</div>

                        <div className="skills-wrapper__links">
                            <a href="#">
                                <img src="./icons/telegram.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="./icons/facebook.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="./icons/twitter.svg" alt="" />
                            </a>
                        </div>
                </div>

                <div className="skills-block">
                    <div className="skills-ratings">
                        <div className="skills__ratings-name">MY SKILLS</div>
                        <div className="title_fz14 skills__ratings-descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna.nsectetur adipisicing elit, sed do eiusmod tempor.</div>
                    </div>

                    <div className="ratings">
                        <div className="ratings__wrapper">
                            <div className="ratings__wrapper-name photoshop">PHOTOSHOP</div>
                            <div className="ratings__wrapper-line">
                                <span style={{'width': '88%'}}></span>
                            </div>
                            <div className="ratings__wrapper-counter">88%</div>
                        </div>
                    </div>

                    <div className="ratings">
                        <div className="ratings__wrapper">
                            <div className="ratings__wrapper-name illustrator">ILLUSTRATOR</div>
                            <div className="ratings__wrapper-line ">
                                <span style={{'width': '92%'}}></span>
                            </div>
                            <div className="ratings__wrapper-counter">92%</div>
                        </div>
                    </div>

                    <div className="ratings">
                        <div className="ratings__wrapper">
                            <div className="ratings__wrapper-name sketch">SKETCH</div>
                            <div className="ratings__wrapper-line">
                                <span style={{'width': '90%'}}></span>
                            </div>
                            <div className="ratings__wrapper-counter">90%</div>
                        </div>
                    </div>

                    <div className="ratings">
                        <div className="ratings__wrapper">
                            <div className="ratings__wrapper-name afterEffects">AFTER EFFECTS</div>
                            <div className="ratings__wrapper-line">
                                <span style={{'width': '98%'}}></span>
                            </div>
                            <div className="ratings__wrapper-counter ">98%</div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;