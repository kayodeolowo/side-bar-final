import { DataProvider } from "./Context/DataProvider";
import { Home } from "./Pages";

function App() {
  return (
   <> 
    <DataProvider> 
        <Home/>
    </DataProvider>
      
   </>
  );
}

export default App;
