import './App.css';

function App() {
  return (
    <div className="main-container">

      <img className="logo" height="100%" src="logo.svg" alt="logo"></img>

      <div className="sub-container">
        <img alt="phone" src="mock.png"></img>
        <div className="rect">
          <div className="text">Join today - it's free!</div>
          <div className="market">
            <img width="215" height="64" src="android.png" alt="android"></img>
            <img width="215" height="64" src="ios.png" alt="ios"></img>
          </div>
          <div className="social-icons">
            <img height="50" width="50" src="facebook.svg" alt="facebook"></img>
            <img height="50" width="50" src="meta.svg" alt="meta"></img>
            <img height="50" width="50" src="instagram.svg" alt="instagram"></img>
            <img height="50" width="50" src="linkedin.svg" alt="linkedin"></img>
            <img height="50" width="50" src="twitter.svg" alt="twitter"></img>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
