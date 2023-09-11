import  { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from "react-bootstrap";
import SearchBar from "./components/searchBar";
import "./App.css";

function App() {
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  // fetch data from mock api

  const business = () => {
    fetch(
      "https://0f1927a7-ccd3-467c-9337-87d326c59ce2.mock.pstmn.io/businesses"
    )
      .then((response) => response.json())
      // i want to console.log and see the data from the mock api
      .then((data) =>
        //render all the data from the mock api
        setFilteredBusinesses(
          data.businesses.map((business) => ({
            name: business.name,
            category: business.category,
            address: business.address,
            phone: business.phone,
          }))
        )
      ).catch((
        error // if there is an error show the user this message
      ) =>
        toast.error("There was an error fetching the data. Please try again later.", {
          position: toast.POSITION.TOP_CENTER
        }, console.log(error)));
  };

  useEffect(() => {
    let fetched = true; // create a variable to hold the state of the component
    if (fetched) {
      business();
    }

    // clean up
    return () => {
      fetched = false;
    };
  }, []);

  return (
    // fetched data from mock api is displayed here

    <div className="App flex flex-col justify-center items-center ">
      <h1 className="text-center mt-3 mb-3 text-white">Businesses</h1>

      <SearchBar
        filteredBusinesses={filteredBusinesses}
        setFilteredBusinesses={setFilteredBusinesses}
        business={business}
      />

      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col">
            <Table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {filteredBusinesses.map((business) => (
                      <div key={business.name}>{business.name}</div>
                    ))}
                  </td>
                  <td>
                    {filteredBusinesses.map((business) => (
                      <div key={business.category}>{business.category}</div>
                    ))}
                  </td>
                  <td>
                    {filteredBusinesses.map((business) => (
                      <div key={business.address}>{business.address}</div>
                    ))}
                  </td>
                  <td>
                    {filteredBusinesses.map((business) => (
                      <div key={business.phone}>{business.phone}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
