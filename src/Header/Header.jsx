import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="bg-marian-blue">
                <div className="left flex p-2 ">
                    <img src="./src/navigation.png" alt="logo" className="p-2"/>
                    <p className="min-h-full content-center px-2 text-alice-blue font-bold text-2xl">FishTrek</p>
                </div>
                <div className="flex right-0 absolute top-0 p-2 w-1/2">
                    <ul type='none' className="flex p-2 w-full justify-evenly text-powder-blue font-bold">
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