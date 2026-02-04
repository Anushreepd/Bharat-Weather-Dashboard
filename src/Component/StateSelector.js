import React from 'react'
import { states } from '../Data/states'

const StateSelector = ({selectState, onChange}) => {
  return (
    <div className="selector-container">
        <label className='search-label'>Search for State:</label>
        <select 
        className='state-select'
        value= {selectState}
        onChange = {onChange}
        >
            <option value=""> --Select State--</option>
            {states.map((state) => (
                <option key = {state.name} value = {state.name}>{state.name}</option>
            ))}
        </select>
      
    </div>
  )
}

export default StateSelector
