import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import './App.css'

function App() {

  // create a state variable to hold the data from the mock api
  const [businesses, setBusinesses] = useState([]);

  // fetch data from mock api
 
  const business = () => { fetch('https://846333da-2b01-4f41-90b0-1c4245c09639.mock.pstmn.io/businesses')
  .then(response => response.json())
  // i want to console.log and see the data from the mock api
  .then(data => 
    //render all the data from the mock api
    setBusinesses(
      data.businesses.map(business => ({
        name: business.name,
        category: business.category,
        address: business.address,
        phone: business.phone
      }))
    ),
    );
  }
    
    useEffect(() => {
      business();
    }, []);

  return (
    // fetched data from mock api is displayed here
    
    <div>

      <h1 className="text-center mt-5 mb-5"
      >Businesses</h1>

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
                    {businesses.map(business => (
                      <div key={business.name}>
                        {business.name}
                        </div>
                    ))}
                  </td>
                  <td>
                    {businesses.map(business =>((
                      <div key={business.category}>
                        {business.category}
                        </div>
                    )))}
                  </td>
                  <td>
                    {businesses.map(business => (
                      <div key={business.address}>
                        {business.address}
                        </div>
                    ))}
                  </td>
                  <td>
                    {businesses.map(business => (
                      <div key={business.phone}>
                        {business.phone}
                        </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>
            </div>
            </div>

    </div>
  )
}

export default App
