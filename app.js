const express = require('express');
const app = express();
const port = 3000;


const videoGames = [
  { id: 1, title: "Pong", year: 1972, platform: "Arcade" },
  { id: 2, title: "Space Invaders", year: 1978, platform: "Arcade" },
  { id: 3, title: "Pac-Man", year: 1980, platform: "Arcade" },
  { id: 4, title: "Donkey Kong", year: 1981, platform: "Arcade" },
  { id: 5, title: "Tetris", year: 1984, platform: "Electronika 60" },
  { id: 6, title: "Super Mario Bros.", year: 1985, platform: "NES" },
  { id: 7, title: "The Legend of Zelda", year: 1986, platform: "NES" },
  { id: 8, title: "Street Fighter", year: 1987, platform: "Arcade" },
  { id: 9, title: "Mega Man 2", year: 1988, platform: "NES" },
  { id: 10, title: "SimCity", year: 1989, platform: "PC" },
  { id: 11, title: "Super Mario World", year: 1990, platform: "SNES" },
  { id: 12, title: "Sonic the Hedgehog", year: 1991, platform: "Sega Genesis" },
  { id: 13, title: "Street Fighter II", year: 1991, platform: "Arcade" },
  { id: 14, title: "Mortal Kombat", year: 1992, platform: "Arcade" },
  { id: 15, title: "Doom", year: 1993, platform: "PC" },
  { id: 16, title: "Super Mario Kart", year: 1992, platform: "SNES" },
  { id: 17, title: "Final Fantasy VII", year: 1997, platform: "PlayStation" },
  { id: 18, title: "GoldenEye 007", year: 1997, platform: "N64" },
  { id: 19, title: "The Legend of Zelda: Ocarina of Time", year: 1998, platform: "N64" },
  { id: 20, title: "Half-Life", year: 1998, platform: "PC" }
];

app.get('/games', (req, res) => {
  res.json(videoGames); 
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Video Game API! Use /games to see the data.');
  });