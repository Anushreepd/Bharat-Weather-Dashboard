const LOCATION_KEY = process.env.REACT_APP_LOCATION_API_KEY;

export async function getStates() {
  const res = await fetch(
    "https://api.countrystatecity.in/v1/countries/IN/states",
    {
      headers: {
        "X-CSCAPI-KEY": LOCATION_KEY
      }
    }
  );

  return res.json();
}

export async function getCities(stateCode) {
  const res = await fetch(
    `https://api.countrystatecity.in/v1/countries/IN/states/${stateCode}/cities`,
    {
      headers: {
        "X-CSCAPI-KEY": LOCATION_KEY
      }
    }
  );

  return res.json();
}
