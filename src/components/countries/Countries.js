import './Countries.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries/countriesSlice';
import Country from './Country/Country';
import settings from '../../assets/settings.png';

function Countries() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);

  return (
    <div className="countries">
      <header>
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
      {countries.error && <p className="countries__error">{countries.error}</p>}
      <ul className="countries__list">
        {countries.countries && countries.countries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            capital={country.capital}
            flag={country.flag}
            continent={country.continent}
          />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
