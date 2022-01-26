import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchApi from './ApiFetch';
import MyContext from './Context';

function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [charactereFilter, setChacactereFilter] = useState();
  const [valuesFilter, setValusFilter] = useState();

  useEffect(() => {
    FetchApi().then((planets) => setData(planets));
  }, []);

  return (
    <main>
      <MyContext.Provider
        value={ { data,
          charactereFilter,
          valuesFilter,
          setValusFilter,
          setChacactereFilter,
          setData } }
      >
        {children}
      </MyContext.Provider>
    </main>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
