import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/common/Input';
import Definition from '../components/Definition'

function Dictionary() {
    const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([])
    const [notFound, setNotFound] = useState(false)

    const navigate = useNavigate()
    const {searchedWord} = useParams()

    useEffect(() => {
        if (searchedWord) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true)
                }
                return response.json() 
            })
            .then((data) => {
                console.log(data)
                setMeanings(data[0].meanings)
                console.log(data[0].meanings[0].definitions[0].definition)
            });
        }
        },
        [searchedWord]
    )

    function handleChange({currentTarget: input}) {
        const {value} = input
        setWord(value)
    }

    function handleClick() {
        if (word !== "") {
            navigate('/dictionary/' + word, {replace: true})
        }
    }

    return (
        <div className='flex flex-col items-center mt-2'>
            <Definition 
                meanings={meanings}
                notFound={notFound}
            />
            <Input 
                name="word"
                type="text"
                value={word}
                placeholder="Search"
                handleChange={handleChange}
            />
            <button 
            className='border-solid border-2 border-black rounded-md mt-2 px-2 bg-black text-white'
            onClick={handleClick}
            >Search</button>
        </div>
    )
}

export default Dictionary;