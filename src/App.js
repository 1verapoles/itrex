import React, { useState, useEffect } from 'react';

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setAllData(data);
    });
  }, []);
  return (
    <div className="container">
     { allData.length > 0 && <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Наименование иностранной валюты</th>
      <th scope="col">Количество единиц иностранной валюты, буквенный код валюты</th>
      <th scope="col">Официальный курс</th>
    </tr>
  </thead>
  <tbody>
  {allData.map((data) =>
  <tr key={data.Cur_Abbreviation}>
  <td>{data.Cur_Name}</td>
  <td>{data.Cur_Scale} {data.Cur_Abbreviation}</td>
  <td>{data.Cur_OfficialRate}</td>
</tr>
)}
    {/* <tr>
      <td>{data.Cur_Name}</td>
      <td>{data.Cur_Scale} {data.Cur_Abbreviation}</td>
      <td>{data.Cur_OfficialRate}</td>
    </tr> */}
  </tbody>
</table>}
    </div>
  );
}

export default App;
