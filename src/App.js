import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataProvider";
import { AuthProvider } from "./Context/LoginAuth";
import Login from "./Auth/Login";
import Layout from "./Pages/Layout";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
   <> 
      <AuthProvider> 
          <DataProvider> 
            <ThemeProvider> 
                <Routes>
                  <Route path="/login" element={<Login/>} /> 
                </Routes>
             <Layout/>
            </ThemeProvider>
        </DataProvider>
      </AuthProvider>
      
   </>
  );
}

export default App;
