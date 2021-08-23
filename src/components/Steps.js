import React from 'react'

export const Steps = ({move, onClick}) => {
    
    const desc = move ? `Go to move # ${move}` : 'Go to game start';  
    
    return (
        <li>
            <button data-testid="step" onClick={() => onClick(move)}>{desc}</button>
        </li>
            
    )
}
