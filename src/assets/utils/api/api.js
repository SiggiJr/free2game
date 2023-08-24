const apiLink = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHost = import.meta.env.VITE_API_HOST;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  },
};

export const getGamesByFilter = (filter) => {
  return fetch(`${apiLink}?${filter}`, options)
    .then((response) => {
      if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};
