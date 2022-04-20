
import Services from '../services/Services';
import './Home.css';


const Home = () => {
    
    return (
        <div>
            <div className='bannerSection'>
                <h1 className='text-white fst-italic textPosition text-center' >Ready to Create some Magic!!</h1>
            </div>
            <Services></Services>
            
        </div>
    );
};

export default Home;
