import React from 'react';
import myPic from '../../Images/CSC_4393.jpg';
import './About.css';

const About = () => {
    return (
        <div className='AboutStyle'>
            <div className='about'>
                <h2>HELLLLLOOOOOOOOO <br></br>IS IT ME YOUR'RE lOOKING<br></br>FOR?</h2>
                <p>I'm Mazhar. Located in Bangladesh, but will travel for love.</p>
                <p>I want to be <span className='fw-bold'> SMART.</span></p>
                <p>Setting <span className=' fw-bold'> SMART goals</span> means that: </p>
                <ul>
                    <li>Specific</li>
                    <li>Measurable</li>
                    <li>Attainable</li>
                    <li>Relevant</li>
                    <li>Timely</li>
                </ul>
                <p>I want to be a professional web developer in next five years. Now I am deeply focus on a core set of 5 technologies. HTML, CSS, JavaScript, React and Next.js. React is the first real choice of mine. I want to be master on it.And now Next.js is a super popular framework so i want to learn it with my dedication. <br></br></p>
                <p>After getting master on font-end developer i want to focus on back-end and learn Node.js and different types of database which is more stablish, simplicity, workable, satisfy.</p>

            </div>
            <div>
                <img src={myPic} alt="" />
            </div>
        </div>
    );
};

export default About;