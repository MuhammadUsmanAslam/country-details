import './Country.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country(props) {
  const {
    name, capital, flag, continent,
  } = props;

  Country.propTypes = {
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    continent: PropTypes.string.isRequired,
  };

  return (
    <NavLink to={`/${name}`}>
      <li
        className="country"
      >
        <img className="country__flag" src={flag} alt={name} />
        <p className="country__name">
          {`Name: ${name}`}
        </p>
        <p className="country__capital">
          {`Capital: ${capital}`}
        </p>
        <p className="country__continent">
          {`Continent: ${continent}`}
        </p>
      </li>
    </NavLink>
  );
}

export default Country;
