import './features.scss';

const Features = () => {
    return (
        <section className="features">
            <div className="title title_fz36 features__title">SOME FEATURES</div>
            <div className="features__divider"></div>

            <div className="features__wrapper">
                <div className="features__wrapper-content">
                    <div className="features__wrapper-image">
                        <img src="./icons/features/pc.png" alt="" className='icon pc' /> 
                    </div>
                    <div className="features__wrapper-subtitle pc-title">Shortcodes</div>
                    <div className="title title_fz48 features__wrapper-counter">46</div>
                </div>

                <div className="features__wrapper-content">
                    <div className="features__wrapper-image">
                        <img src="./icons/features/plugins.png" alt="" className='icon plugins' /> 
                    </div>
                    <div className="features__wrapper-subtitle">Integrated Plugins</div>
                    <div className="title title_fz48 features__wrapper-counter">128</div>
                </div>

                <div className="features__wrapper-content">
                    <div className="features__wrapper-image">
                        <img src="./icons/features/products.png" alt="" className='icon ' /> 
                    </div>
                    <div className="features__wrapper-subtitle products">Creative Products</div>
                    <div className="title title_fz48 features__wrapper-counter">450</div>
                </div>

                <div className="features__wrapper-content">
                    <div className="features__wrapper-image">
                        <img src="./icons/features/worldwides.png" alt="" className='icon worldwide'/> 
                    </div>
                    <div className="features__wrapper-subtitle worldwide-title">Clients Worldwide</div>
                    <div className="title title_fz48 features__wrapper-counter">100+</div>
                </div>
            </div>
        </section>
    );
};

export default Features;