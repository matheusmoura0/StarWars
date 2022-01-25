import React, { useContext, useState } from 'react';
import MyContext from '../helpers/Context';

function Table() {
  const data = useContext(MyContext);
  const [q, setQ] = useState('');
  if (!data) return <p> loading... </p>;
  console.log(data);
  // ajuda do israel :B
  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (e) => setQ(e.target.value) }
        value={ q }
        type="text"
        placeholder="filtrar"
      />
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
          {data.length > 0 && data
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
