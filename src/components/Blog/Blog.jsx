import './blog.scss';

const Blog = () => {
    return (
        <section className='blog'>
            <div className="about__title title_fz48">BLOG POSTS</div>
            <hr className="divider"/>
            <div className="about__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>

            <div className="cards_wrapper">
            <div className="blog__cards">
                <div className="blog__cards-content">
                    <div className="blog__cards-content-images">
                        <img src="./imgs/blog/gray.png" alt="" />
                    </div>
                    <div className="blog__cards-content-title">Creat Creative & Clean</div>
                    <div className="blog__cards-content-descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore <br /> magna aliqua.</div>
                    
                    <div className="cards__ratings">
                        <div className="cards__ratings-date">
                            <img src="./icons/clock.png" alt="" />
                            <div className="cards__ratings-descr">25 Jan 2015</div>
                        </div>
                       <div className="socials">
                            <div className="cards__ratings-date">
                                <img src="./icons/likes.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                            <div className="cards__ratings-date">
                                <img src="./icons/comments.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            
            <div className="blog__cards">
                <div className="blog__cards-content">
                    <div className="blog__cards-content-images">
                        <img src="./imgs/blog/nature.png" alt="" />
                    </div>
                    <div className="blog__cards-content-title">Creat Creative & Clean</div>
                    <div className="blog__cards-content-descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore <br /> magna aliqua.</div>
                    
                    <div className="cards__ratings">
                        <div className="cards__ratings-date">
                            <img src="./icons/clock.png" alt="" />
                            <div className="cards__ratings-descr">25 Jan 2015</div>
                        </div>
                       <div className="socials">
                            <div className="cards__ratings-date">
                                <img src="./icons/likes.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                            <div className="cards__ratings-date">
                                <img src="./icons/comments.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className="blog__cards">
                <div className="blog__cards-content">
                    <div className="blog__cards-content-images">
                        <img src="./imgs/blog/gray.png" alt="" />
                    </div>
                    <div className="blog__cards-content-title">Creat Creative & Clean</div>
                    <div className="blog__cards-content-descr">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore <br /> magna aliqua.</div>
                    
                    <div className="cards__ratings">
                        <div className="cards__ratings-date">
                            <img src="./icons/clock.png" alt="" />
                            <div className="cards__ratings-descr">25 Jan 2015</div>
                        </div>
                       <div className="socials">
                            <div className="cards__ratings-date">
                                <img src="./icons/likes.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                            <div className="cards__ratings-date">
                                <img src="./icons/comments.png" alt="" />
                                <div className="cards__ratings-descr">25</div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Blog;