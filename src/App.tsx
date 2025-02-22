import { useState } from 'react';
import { createShortUrl, getUrlInfo, deleteShortUrl } from './api/urlService';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  interface UrlInfo {
    originalUrl: string;
    createdAt: string;
    clickCount: number;
  }

  const [urlInfo, setUrlInfo] = useState<UrlInfo | null>(null);

  const handleCreate = async () => {
    const result = await createShortUrl(originalUrl);
    setShortUrl(result.shortUrl);
  };

  const handleGetInfo = async () => {
    const info = await getUrlInfo(shortUrl);
    setUrlInfo(info);
  };

  const handleDelete = async () => {
    await deleteShortUrl(shortUrl);
    setShortUrl('');
    setUrlInfo(null);
  };

  return (
    <div className="App">
      <h1>URL shortener</h1>
      <input
        type="text"
        placeholder="Original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleCreate}>Abbreviation</button>

      {shortUrl && (
        <>
          <h2>Short URL: {shortUrl}</h2>
          <button onClick={handleGetInfo}>Get Info</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}

      {urlInfo && (
        <div>
          <h3>Info:</h3>
          <p>Original URL: {urlInfo.originalUrl}</p>
          <p>Created At: {urlInfo.createdAt}</p>
          <p>Number of clicks: {urlInfo.clickCount}</p>
        </div>
      )}
    </div>
  );
}

export default App;
