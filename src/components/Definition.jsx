import {v4 as uuidv4} from 'uuid';
import NotFound from '../pages/NotFound';


function Definition({meanings, notFound}) {

    if (notFound) {
        return <NotFound />
    }

    return (<>
        {
            meanings.map(meaning => {
                return <h2 key={uuidv4()}>{meaning.definitions[0].definition}</h2>
            })
        }
    </>)
}

export default Definition;