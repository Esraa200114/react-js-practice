import Navbar from './NavBar';
import Home from './Home';

function App() {

  // const title = "Welcome to the new blog";
  // const likes = 50;
  // // const person = {name: "John", age: 33};
  // const link = "https://www.google.com";

  return (
    <div className="App">

      {/* <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes}</p>
        {/* <p>{person}</p> */}
        {/* <p>{10}</p>
        <p>{"Hello, World!"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Navigate to Google</a>
      </div> */}

      <Navbar/>
      {/* Or <Navbar></Navbar> */}

      <div className="content">
        <Home/>
      </div>

    </div>
  );
}

export default App;
