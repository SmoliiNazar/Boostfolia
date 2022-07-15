import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import About from "../About/About";
import Scene from "../Scene/Scene";
import Works from "../Works/Works";
import MultipleItems from "../Carousel/Carousel";
import Skills from "../Skills/Skills";
import Features from "../Features/Features";
import Blog from "../Blog/Blog";
import Plan from "../Plan/Plan";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

import { useState } from "react";
import Menu from "../Menu/Menu";

function App() {
    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {value: 'MAIN PAGE', href: 'promo'}, 
        {value: 'ABOUT US', href: 'about'}, 
        {value: 'OUR WORKS', href: 'works'},
        {value: 'CONTACTS', href: 'form'},
    ]

    return (
        <>
            <Header/>
                <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <Promo/>
            <About/>
            <Scene/>
            <Works/>
            <MultipleItems/>
            <Skills/>
            <Features/>
            <Blog/>
            <Plan/>
            <Form/>
            <Footer/>
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </>
    )
}

export default App;
