import MainBody from './components/MainBody';
import TopNavBar from './components/topNavBar';
import HistoryPanel from './components/HistoryPanel';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MainBody />
      <HistoryPanel />
    </div>
  );
}

export default App;
