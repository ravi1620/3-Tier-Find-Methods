import React, { useRef, useState } from "react";

function PlayersForm() {

  let countrySelectedRef=useRef();
  let genderSelectedRef=useRef();
  let ageSlecetdRef=useRef();
  let [players, setPlayers] = useState([]);

  const getPlayersFromDB = async () => {
    try {
      const jsonData = await fetch("http://localhost:1234/getPlayers?country=Russia&gender=Male&age=30", {
        method: "GET",
      });

      const jsoData = await jsonData.json();
      console.log(jsoData);
      console.log("Successfully fetched the data");

      setPlayers(jsoData);
    } catch (error) {
      console.error("There is a problem in fetching the data", error);
    }
  };

  return (
    <div>
      <div>
        <form className="form">
      
          <div>
            <label className="label">Country</label>
          <select className="select" ref={countrySelectedRef}>
            <option>

            </option>
          </select>
          </div>
        
          <div>
            <label className="label" ref={genderSelectedRef}>Gender</label>
            <select className="select">
              <option>

              </option>
            </select>
          </div>
       <div>
       <label className="label">Age</label>
       <select className="select" ref={ageSlecetdRef}>
        <option>

        </option>
       </select>
       </div>
        

          <div>
            <button type="button" onClick={getPlayersFromDB}>
              Get Players
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {players.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.id}</td>
                <td>{ele.first_name}</td>
                <td>{ele.last_name}</td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default PlayersForm;
