const StateSelector = ({states, selectState, onChange}) => {
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
                <option key = {state.iso2} value = {state.iso2}>{state.name}</option>
            ))}
        </select>
      
    </div>
  )
}

export default StateSelector
