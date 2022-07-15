import { useState } from 'react';

import './plan.scss';

const Plan = () => {
    const [state, setState] = useState(0);
    const toggleState = (index) => {
        setState(index);
    };

    return (
        <section className='plan'>
            <div className="title title_fz36 features__title">CHOSE PLAN</div>
            <div className="features__divider"></div>

            <div className="cards-wrapper">
                <div className={state === 1 ? "plan__cards active" : "plan__cards"}>
                    <div className="plan__cards-content">
                        <div className="plan__cards-content-bg">
                            <div className="plan__cards-content-bg-title">BASIC <br /> <span>Free</span></div>
                        </div>

                        <div className="plan__cards-wrapper">
                            <div className="plan__cards-point">
                                <span>20</span> Pages
                            </div>
                            <div className="plan__cards-point">
                                <span>2</span> GB Storage
                            </div>
                            <div className="plan__cards-point">
                                <span>150</span> Members
                            </div>
                            <div className="plan__cards-point">
                                <span>2</span> Contributors
                            </div>

                            <button className='btn plan__cards-purchase' onClick={() => toggleState(1)}>PURCHASE</button>
                        </div>
                    </div>
                </div>

                <div className={state === 2 ? "plan__cards active" : "plan__cards"}>
                    <div className="plan__cards-content">
                        <div className="plan__cards-content-bg">
                            <div className="plan__cards-content-bg-title">STANDART <br /> <span>$24.00</span></div>
                        </div>

                        <div className="plan__cards-wrapper">
                            <div className="plan__cards-point">
                                <span>25</span> Pages
                            </div>
                            <div className="plan__cards-point">
                                <span>10</span> GB Storage
                            </div>
                            <div className="plan__cards-point">
                                <span>300</span> Members
                            </div>
                            <div className="plan__cards-point">
                                <span>5</span> Contributors
                            </div>

                            <button className='btn plan__cards-purchase' onClick={() => toggleState(2)}>PURCHASE</button>
                        </div>
                    </div>
                </div>

                <div className={state === 3 ? "plan__cards active" : "plan__cards"}>
                    <div className="plan__cards-content">
                        <div className="plan__cards-content-bg">
                            <div className="plan__cards-content-bg-title">PREMIUM <br /> <span>$40.00</span></div>
                        </div>

                        <div className="plan__cards-wrapper">
                            <div className="plan__cards-point">
                                <span>30</span> Pages
                            </div>
                            <div className="plan__cards-point">
                                <span>20</span> GB Storage
                            </div>
                            <div className="plan__cards-point">
                                <span>500</span> Members
                            </div>
                            <div className="plan__cards-point">
                                <span>10</span> Contributors
                            </div>

                            <button className='btn plan__cards-purchase' onClick={() => toggleState(3)}>PURCHASE</button>
                        </div>
                    </div>
                </div>

                <div className={state === 4 ? "plan__cards active" : "plan__cards"}>
                    <div className="plan__cards-content">
                        <div className="plan__cards-content-bg">
                            <div className="plan__cards-content-bg-title">PROFESSIONAL <br /> <span>$75.00</span></div>
                        </div>

                        <div className="plan__cards-wrapper">
                            <div className="plan__cards-point">
                                <span>40</span> Pages
                            </div>
                            <div className="plan__cards-point">
                                <span>40</span> GB Storage
                            </div>
                            <div className="plan__cards-point">
                                <span>1000</span> Members
                            </div>
                            <div className="plan__cards-point">
                                <span>20</span> Contributors
                            </div>

                            <button className='btn plan__cards-purchase' onClick={() => toggleState(4)}>PURCHASE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plan;