import './promo.scss';

const Promo = () => {
    return (
        <section className='promo'>
                <div className="promo__wrapper">
                    <div className="promo__title title_fz72">WE THINK CREATIVE BE CREATIVE</div>
                    <div className="promo__description">LIKE TO DO CREATIVE WORKS</div>
                </div>

                <div className="mouse">
                    <span>
                        <img src="./icons/mouse.png" alt="" />
                    </span>
                    <div className="mouse__descr title_fz16">SCROLL DOWN</div>
                </div>
        </section>
    );
};

export default Promo;