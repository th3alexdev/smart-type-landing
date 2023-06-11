import React, { useEffect, useState, useContext } from 'react'
import { checkWord } from '../../utils/wordValidator'
import { renderCommandLetters } from '../../helpers/CommandLetters';
import { ManageContext } from '../../contexts/ContextProvider';

function TestCommand({ }) {
    const { command, inputValue } = useContext(ManageContext);
    
    const [progress, setProgress] = useState('');
    const [matchingPart, setMatchingPart] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    
    useEffect(() => {
        if(Array.isArray(inputValue)) return
        const result = checkWord({ text: inputValue, command });

        if (result) {
            const { progress, matchingPart } = result;
            setProgress(progress);
            setMatchingPart(matchingPart);
            setIsComplete(matchingPart === command);
        } 

    }, [inputValue, command]);

      return (

        <div className='flex mb-5 items-center'>
            <h2 className='inline mr-2 h-max'>
                Type this: 
            </h2>

            <div className='font-medium flex gap-2 rounded-md' role='textbox' aria-label='Command'>
                { renderCommandLetters(command, matchingPart, isComplete) }
            </div>
            {/* 
            <div>
                <p>Progress: { progress} </p>
                <p>Match: {matchingPart}</p>
            </div>
            */}
        </div>
  )
}

export default TestCommand
