import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <footer className='bg-dark pt-5'>
            <div className='footerSection mx-auto'>
                <div>
                    <p className=' fw-bold fs-1 footerText'><span className='text-primary'>Contact</span> Information</p>
                    <p className='footerText'>Have questions? We're here to help</p>
                    <p className='fontAweSection'><FontAwesomeIcon className='fontAweStyle' icon={faPhone}></FontAwesomeIcon> <p className='px-3 pt-3'>+880-1717522443</p> </p>
                    <p className='fontAweSection'><FontAwesomeIcon className='fontAweStyle' icon={faEnvelope}></FontAwesomeIcon> <p className='px-3 pt-3'>sujonaust2008@gmail.com</p> </p>
                    <p className='fontAweSection'><FontAwesomeIcon className='fontAweStyle' icon={faAddressBook}></FontAwesomeIcon> <p className='px-3 pt-3'>Nilphamari, Rangpur, Bangladesh</p> </p>
                </div>
                <div>
                    <p className='text-primary fw-bold fs-1 footerText'>Contact us!</p>
                    <p className='textFooterDescription'>Our Packages start With $250/per day. Reach out to us on phone, email, facebook group given below and one of our sunviPhotography consultants will be in touch to discuss how we can help you to memorable your enjoying time.</p>

                </div>
            </div>
            <div className='text-white text-center pt-5 pb-3'>
                <p>copy <span>&copy;</span> {year}</p></div>
        </footer>
    );
};

export default Footer;