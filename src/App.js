import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataProvider";
import { AuthProvider } from "./Context/LoginAuth";
import { ThemeProvider } from "./Context/ThemeContext";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";

function App() {
  return (
   <> 
      <AuthProvider> 
          <DataProvider> 
            <ThemeProvider> 
               <div className='lg:flex'>
                 <SideBar/>

                <div className='w-full'> 
                    {/* <Navbar/> */}
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                          
                          
                    </Routes>
                </div>
            </div>
            
            </ThemeProvider>
        </DataProvider>
      </AuthProvider>
      
   </>
  );
}

export default App;
