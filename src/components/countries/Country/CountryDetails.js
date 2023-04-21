import './CountryDetails.css';
import { useEffect } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import settings from '../../../assets/settings.png';

function CountryDetails() {
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries);
  console.log(countries);
  useEffect(() => {
    if (!countries.countries.length) {
      navigate('/');
    }
  }, []);

  const { name } = useParams();

  let country = {};
  country = countries.countries
    ? countries.countries.find((country) => country.name === name) : null;

  return (
    <div className="country-details">
      <header>
        <button
          onClick={() => {
            navigate('/');
          }}
          type="submit"
        >
          {'<'}
        </button>
        <NavLink to="/"><h2>Countries</h2></NavLink>
        <img src={settings} alt="Usman" />
      </header>
      {countries.isLoading && (
        <div className="quotes">
          <div className="spinner-box">
            <div className="configure-border-1">
              <div className="configure-core" />
            </div>
            <div className="configure-border-2">
              <div className="configure-core" />
            </div>
          </div>
        </div>
      )}
      {country && (
        <div className="country-details__item">
          <img src={country.flag} alt={country.name} />
          <div className="country-details__item-body">
            <p className="country-details__item-body__name">
              {'Name: '}
              {country.name}
            </p>
            <p>
              {'Capital: '}
              {country.capital}
            </p>
            <p>
              {'Continent: '}
              {country.continent}
            </p>
            <a href={country.map} target="blank">Google Maps</a>
            <p>
              {'Region: '}
              {country.region}
            </p>
            <p>
              {'Population: '}
              {country.population}
            </p>
            <p>
              {'Area: '}
              {country.area}
              {' km²'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
