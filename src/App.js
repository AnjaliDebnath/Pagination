import './App.css';
import { JobsProvider } from './components/Jobsdata';
import Pagination from './pages/Pagination';

function App() {
  return (
   <>
   <JobsProvider>
    <Pagination /> 
  </JobsProvider>
   </>
  );
}

export default App;
