import './App.css';
import Header from './components/header';
import ProjectBar from './components/projectBar';
import RectangleContainer from './components/rectangleContainer';

function App() {
  return (
    <div>
      {/* Main Header */}
      <Header />

      {/* Total Budget and Dates  */}
      <div className='flex justify-between'>
        <RectangleContainer content={"Total Budget"} isBold={true} />
        <div className='flex justify-between'>
          <RectangleContainer content={"July 12, 2023"} />
          <RectangleContainer content={"July 12, 2023"} />
        </div>
      </div>

      {/* List of Projects */}
      <ProjectBar />
      <ProjectBar />
      <ProjectBar />
    </div>
  );
}

export default App;
