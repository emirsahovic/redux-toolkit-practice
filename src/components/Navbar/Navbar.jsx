import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-slate-700 shadow-xl w-full p-4 mb-16">
            <div className="container mx-auto flex justify-between items-center px-24">
                <Link to="/"><img src={logo} className="w-32 h-20" alt="Logo" /></Link>
                <h3 className="text-green-600 text-2xl font-bold">Breaking Bad App</h3>
            </div>
        </nav>
    )
}

export default Navbar;
