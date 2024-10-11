import './Header.css';
import ham from '../assets/hamburger.png';
import logo from '../assets/navigation.png';

const Header = () => {
    return (
        <div>
            <div className="bg-marian-blue">
                <div className="left flex p-2 ">
                    <img src={logo} alt="logo" className="p-2"/>
                    <p className="min-h-full content-center px-2 text-alice-blue font-bold text-2xl">FishTrek</p>
                </div>
                <div className="flex right-0 absolute top-0 p-2 w-1/2 ">
                <img src={ham} alt="logo" className="absolute right-0 top-0 bg-powder-blue content-center"/>
                    <ul type='none' className="lg:flex p-2 w-full justify-evenly text-powder-blue font-bold hidden ">
                        <li className='hoverEffect'>Fishes</li>
                        <li className='hoverEffect'>Locations</li>
                        <li className='hoverEffect'>About Us</li>
                        <li className='hoverEffect'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;