import { useState } from 'react';
import './form.scss';

const Forms = () => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [emailError, setEmailError] = useState('email field cannot be empty!');
    const [nameError, setNameError] = useState('name field cannot be empty!');

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrected email')
        } else {
            setEmailError('')
        }
    };

    const nameHandler = (e) => {
        setNameDirty(e.target.value)
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameDirty('Incorrected email')
        } else {
            setNameDirty('')
        }
    };

    const handleBlur = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break
            
        }
    }; 

    return (
        <section className='form'>
            <div className="about__title title_fz48">GET IN TOUCH</div>
            <hr className="divider"/>
            <div className="about__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>

            <div className="form__wrapper">
                <div class="field field_v2">
                    <label for="last-name" class="ha-screen-reader">Mail</label>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => handleBlur(e)} name="email" id="last-name"  class="field__input" placeholder="e.g. mail@example.com"/>
                    {(emailDirty && nameError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <span class="field__label-wrap" aria-hidden="true">
                    <span class="field__label">Mail</span>
                    </span>
                </div>
            </div>
            <div className="textarea__wrapper">
                <div class="field field_v3" style={{'width': '600px'}}>
                    <label id='itsLabel' for="email" class="ha-screen-reader">message</label>
                    <input id="email" class="field__input" placeholder="Hello world"/>
                    <span class="field__label-wrap" aria-hidden="true">
                        <span class="field__label">Message</span>
                    </span>
                </div>    
                <button className="form__btn" onClick={() => setEmail('')}>SEND MESSAGE</button>

            </div>
        </section>
    );
};

export default Forms;