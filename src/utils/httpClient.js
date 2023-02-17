const API = "https://www.thecocktaildb.com/api/json/v1/1/";

export function get(path) {
  console.log(API+path)
  return fetch(API + path).then((result) => result.json());
}