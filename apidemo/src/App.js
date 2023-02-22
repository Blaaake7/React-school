import axios from 'axios';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6bedce92f708cdeb65b084ee01b825c0`;
  // ${API_KEY_NAME}
const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await axios({
      method: 'get',
      url: url
    })
    console.log(data);
    setResult(data);
  }
  catch (err) {
    alert(err);
  }
}

  return (
    <div className="appContentWrap">
      <form onSubmit={onSubmit}>
        <input
        placeholder='도시를 입력하세요'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type='text'
        />
      </form>
      <div>{result.data.name}</div>
    </div>
  );
}

export default App;
