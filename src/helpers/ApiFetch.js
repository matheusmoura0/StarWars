export default async function FetchApi() {
  const apiResults = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((data) => data.results);
  return apiResults;
}
