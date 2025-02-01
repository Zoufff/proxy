import axios from 'axios';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const apiUrl = 'https://ghoapi.azureedge.net/api/WHOSIS_000001';
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Fout bij het ophalen van data:', error);
    res.status(500).send('Er is een fout opgetreden bij het ophalen van de data.');
  }
});

// Exporteer de Express-app als een handler voor Vercel
export default app;
