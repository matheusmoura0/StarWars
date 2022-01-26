import React, { useContext, useState } from 'react';
import MyContext from '../helpers/Context';

function Table() {
  const dropdown = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const { data, setData } = useContext(MyContext);
  const [drop, setDrop] = useState(dropdown);
  const [q, setQ] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueF, setValueF] = useState(0);

  const filterFunction = () => {
    const number = Number(valueF);
    let filtered = data;
    switch (comparison) {
    case 'maior que':
      filtered = data.filter((x) => Number(x[column]) > number);
      break;
    case 'menor que':
      filtered = data.filter((x) => Number(x[column]) < number);
      break;
    case 'igual a':
      filtered = data.filter((x) => Number(x[column]) === number);
      break;
    default:
      filtered = data;
    }
    setData(filtered);
    const filterDropd = drop.filter((x) => x !== column);
    setDrop(filterDropd);
    setColumn(drop[0]);
    console.log(drop);
  };

  if (!data) return <p> loading... </p>;
  return (
    <div>
      <label
        htmlFor="dropdown"
      >
        Coluna:
        <select
          onChange={ (e) => setColumn(e.target.value) }
          data-testid="column-filter"
          htmlFor="dropdown"
        >
          {drop.map((x, i) => (
            <option
              key={ i }
            >
              { x }
            </option>))}
        </select>
      </label>
      <label
        htmlFor="comparison"
      >
        Operador:
        <select
          onChange={ (e) => setComparison(e.target.value) }
          data-testid="comparison-filter"
          htmlFor="comparison"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

      </label>
      <input
        value={ valueF }
        onChange={ (e) => setValueF(e.target.value) }
        data-testid="value-filter"
        type="number"
      />

      <input
        data-testid="name-filter"
        onChange={ (e) => setQ(e.target.value) }
        value={ q }
        type="text"
      />
      <button
        onClick={ filterFunction }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gavity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((x) => (q === ''
              ? true
              : x.name.toLowerCase().includes(q.toLowerCase())))
            .map((planet, i) => (
              <tr key={ i }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
