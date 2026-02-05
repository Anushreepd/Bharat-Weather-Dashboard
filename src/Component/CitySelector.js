function CitySelector({ cities, selectedCity, onChange }) {
  return (
     <div className="selector-container">
        <label className='search-label'>Search for City:</label>
    <select
      className="state-select"
      value={selectedCity}
      onChange={onChange}
    >
      <option value="">--Select City--</option>

      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
    </div>
  );
}

export default CitySelector;
