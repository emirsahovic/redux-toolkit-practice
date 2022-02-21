import { Link } from 'react-router-dom';

const CharacterItem = ({ chars }) => {
    return (
        <div className="shadow-2xl rounded-xl p-6 mt-4 hover:scale-105 transition duration-500">
            <img className="h-64 w-full rounded-lg" src={chars.img} alt="Profile" />
            <h2 className="text-gray-200 font-bold text-xl mt-2">{chars.name}</h2>
            <p className="font-semibold mt-2 text-gray-300">{chars.occupation[0]}</p>
            <p className="text-sm font-semibold text-gray-400 my-2">Portrayed: {chars.portrayed}</p>
            <Link to={`/character/${chars.char_id}`}><button className="py-2 px-3 my-4 bg-green-800 rounded-lg font-bold hover:bg-green-700 transition duration-500">Read More</button></Link>
        </div>
    )
}

export default CharacterItem;
