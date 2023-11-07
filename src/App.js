import React, { useEffect, useState } from "react";
import { useMode, ColorModeContext } from "./theme";
// import { ThemeProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./layouts/dashboard";
import Table from "./components/Table";
import Form from "./components/DoctorInfo";
import ErrorPage from "./components/ErrorPage";
import EditDoctor from "./components/EditDoctor";
import AddDoctor from "./components/AddDoctor";
import Sidebar from "./layouts/global/Sidebar";
import axios from "axios";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [theme, colorMode] = useMode();
  // Use useParams to access the id parameter from the URL
  // const { id } = useParams();

  useEffect(() => {
    // Only make the GET request if id is defined (i.e., when visiting /user/:id route)
    axios
      .get("http://localhost:3000/doctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        alert("Error fetching doctor data:", error);
      });
  }, []);

  const onUpdateDoctor = (formData) => {
    // Find the index of the doctor to update in the doctors array
    const doctorIndex = doctors.findIndex((emp) => emp.id === formData.id);

    if (doctorIndex !== -1) {
      // Create a copy of the doctors array
      const updateDoctors = [...doctors];

      // Update the doctor with the new data
      updateDoctors[doctorIndex] = formData;

      // Update the state with the new array
      setDoctors(updateDoctors);
    }
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <>
              {/* <Link to="/table"> Table </Link>
            <br />
            <Link to="/form"> Form </Link>
            <br />
            <Link to="/doctor"> Employees </Link>
            <br />
            <Link to="/"> Dashboard </Link> */}
              <Sidebar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/table" element={<Table />} />
                  <Route path="/form" element={<Form />} />
                  <Route
                    path="/doctor/id"
                    element={
                      <EditDoctor
                        doctors={doctors}
                        onUpdateDoctor={onUpdateDoctor}
                      />
                    }
                  />
                  {/* /:id the path shouldn't be like this /employee/:id */}

                  <Route path="/doctor" element={<EditDoctor />} />
                  <Route path="/create" element={<AddDoctor />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
            </>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
