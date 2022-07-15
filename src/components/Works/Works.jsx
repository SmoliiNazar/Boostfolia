import { useState } from 'react';

import './works.scss';

const Works = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='works'>
            <div className="about__title title_fz48">OUR WORKS</div>
                <hr className="divider"/>
                <div className="about__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div>
                <ul className='works__tabs-wrapper'>
                    <li className={toggleState === 1 ? 'tabs tabs_active' : 'tabs'}><a onClick={() => toggleTab(1)}>ALL PROJECTS</a></li>
                    <li className={toggleState === 2 ? 'tabs tabs_active' : 'tabs'}><a onClick={() => toggleTab(2)}>RED</a></li>
                    <li className={toggleState === 3 ? 'tabs tabs_active' : 'tabs'}><a onClick={() => toggleTab(3)}>GREEN</a></li>
                    <li className={toggleState === 4 ? 'tabs tabs_active' : 'tabs'}><a onClick={() => toggleTab(4)}>BLUE</a></li>
                    <li className={toggleState === 5 ? 'tabs tabs_active' : 'tabs'}><a onClick={() => toggleTab(5)}>YELLOW</a></li>
                </ul>
                
                <div className="tab-wrapper">
                    <div className='content'>
                        {toggleState === 1 ? 
                            <div className='wrappered'>
                                <div className='tab-wrapper__content-red'></div>
                                <div className='tab-wrapper__content-green'></div>
                                <div className='tab-wrapper__content-blue'></div>
                                <div className='tab-wrapper__content-yellow'></div>
                            </div> : null
                        }
                    </div>
                    <div className={toggleState === 2 ? 'tab-wrapper__content-red' : 'content'} style={{'margin': '26px auto'}}></div>
                    <div className={toggleState === 3 ? 'tab-wrapper__content-green' : 'content'} style={{'margin': '26px auto'}}></div>
                    <div className={toggleState === 4 ? 'tab-wrapper__content-blue' : 'content'} style={{'margin': '26px auto'}}></div>
                    <div className={toggleState === 5 ? 'tab-wrapper__content-yellow' : 'content'} style={{'margin': '26px auto'}}></div>
                </div>
            </div>
        </section>
    );
};

export default Works;