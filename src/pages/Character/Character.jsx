import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacter } from "../../features/breakingBad/breakingBadSlice";
import Spinner from "../../components/Spinner/Spinner";
import { FaUserAlt, FaUserEdit, FaUserSecret } from 'react-icons/fa';

const Character = () => {
    const { character, loading } = useSelector(state => state.breakingBad);

    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(fetchCharacter(params.char_id));
    }, [dispatch, params.char_id]);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="grid grid-cols-2 container mx-auto px-24 mt-36 justify-center" style={{ height: 45 + 'rem' }}>
            <img src={character.img} className="h-4/6 w-10/12 hover:scale-105 transition duration-300" alt="Character profile" />
            <div className="mt-12">
                <div className="flex items-center mt-6">
                    <FaUserAlt className="text-5xl text-green-500" /> <span className="text-2xl mx-5">Name</span>
                    <h1 className="bg-gray-700 rounded-lg text-2xl font-bold ml-6 max-w-md p-4">{character.name}</h1>
                </div>
                <div className="flex items-center mt-6">
                    <FaUserEdit className="text-5xl text-green-500" /> <span className="text-2xl mx-5">Nickname</span>
                    <h1 className="bg-gray-700 rounded-lg text-2xl font-bold ml-6 max-w-md p-4">{character.nickname}</h1>
                </div>
                <div className="flex items-center mt-6">
                    <FaUserSecret className="text-5xl text-green-500" /> <span className="text-2xl mx-5">Portrayed</span>
                    <h1 className="bg-gray-700 rounded-lg text-2xl font-bold ml-6 max-w-md p-4">{character.portrayed}</h1>
                </div>
                <div className="flex items-center mt-6">
                    <FaUserAlt className="text-5xl text-green-500" /> <span className="text-2xl mx-5">Status</span>
                    <h1 className={`rounded-lg text-2xl font-bold ml-6 max-w-md p-4 ${character.status === "Alive" ? "bg-green-400" : "bg-red-400"}`}>{character.status}</h1>
                </div>
            </div>
        </div>
    )
}

export default Character;
