export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
    status: "online",
    api_url: process.env.HEROKU_API_URL || "https://std-music-8fb1fd982073.herokuapp.com/",
    gateway_version: "1.0.0",
    app_name: "STD MUSIC",
    developer: "STD DEEPANSHU",
    last_updated: "2026-09-22"
  });
}
