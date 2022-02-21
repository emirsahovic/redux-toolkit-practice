import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../features/breakingBad/breakingBadSlice";
import CharacterItem from "../CharacterItem/CharacterItem";
import Spinner from "../Spinner/Spinner";

const CharacterList = () => {
    const { characters, loading } = useSelector(state => state.breakingBad);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    return loading ? <Spinner /> : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto justify-center text-center gap-6 px-20 py-4">
            {characters.map(character => (
                <CharacterItem key={character.char_id} chars={character}></CharacterItem>
            ))}
        </div>
    )

}

export default CharacterList;
