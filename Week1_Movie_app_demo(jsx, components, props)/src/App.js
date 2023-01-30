import Movie from './components/Movie';
import { dummy } from './movieDummy';


function App() {

  console.log(dummy);
  return (
    <div>
      <div className="app-container">
        {
          dummy.results.map((item) => {
            return(
              <Movie 
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;