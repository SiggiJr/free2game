const apiLink = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d3c088315mshaec6b2406b87386p1ee597jsnb8fa3e52af4c",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const getGamesByFilter = (filter) => {
  return fetch(`${apiLink}?${filter}`, options).then((response) => {
    if (!response.ok) {
      throw new Error("Fetch ist Fehlgeschlagen");
    }
    return response.json();
  });
};
