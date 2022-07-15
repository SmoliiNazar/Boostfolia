import { useState } from 'react';
import './scene.scss';

const Scene = () => {
    const [popup, setPopup] = useState(false);

    const setActive = () => {
        setPopup(!popup);
    };

    return (
        <section className="scene">
            <div className="scene-wrapper">
                <div className="scene-wrapper__title title_fz30">WATCH BEHIND THE SCENE</div>
                <div className="scene-wrapper__descr title_fz14">Lorem ipsum dolo the lorem r sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat. Duis aute irure</div>
                <button onClick={setActive} className='scene-wrapper__btn btn'>PLAY NOW</button>
            </div>
            <div className="scene__woman">
                <img src="./imgs/woman.png" alt="" />
            </div>
            

            //popup
            <div className={popup ? 'popup popup-active' : 'menu'} onClick={() => setActive(false)}>
                <div className="popup-block" onClick={e => e.stopPropagation()}>
                    <div className="popup-close" onClick={() => setActive(false)}>
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="white"/>
                        </svg>
                    </div>

                    {popup ? <div className='popup-video'>
                        <iframe width="800" height="600" 
                                src="https://www.youtube.com/embed/wE6pEsjgdHo" title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div> : null}
                </div>
                <div className="menu__overlay"></div>
            </div>
        </section>
    );
};

export default Scene;