import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities,setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
    console.log(response)  
    //setActivities(response.data);
    })
  },[])
// const activities = [{"id":"592b8968-ba9d-4584-90b7-4c19c20a3263","title":"Past Activity 1","date":"2020-09-30T13:44:08.311074","description":"Activity 2 months ago","category":"drinks","city":"London","venue":"Pub"},{"id":"c3a6972a-eaa9-4de2-b1c0-8672686c9d23","title":"Past Activity 2","date":"2020-10-30T13:44:08.321595","description":"Activity 1 month ago","category":"culture","city":"Paris","venue":"Louvre"},{"id":"7be619c7-0e4e-4d77-ab36-3b28d0268845","title":"Future Activity 1","date":"2020-12-30T13:44:08.321598","description":"Activity 1 month in future","category":"culture","city":"London","venue":"Natural History Museum"},{"id":"8f2ca449-efb0-410a-923d-aa1dc07f32ae","title":"Future Activity 2","date":"2021-01-30T13:44:08.321598","description":"Activity 2 months in future","category":"music","city":"London","venue":"O2 Arena"},{"id":"e80c88e7-3823-4bb7-8ecf-a5249e7091d4","title":"Future Activity 3","date":"2021-02-28T13:44:08.321598","description":"Activity 3 months in future","category":"drinks","city":"London","venue":"Another pub"},{"id":"c56cb3dd-c1e8-4cb2-a83d-4b696225941f","title":"Future Activity 4","date":"2021-03-30T13:44:08.321599","description":"Activity 4 months in future","category":"drinks","city":"London","venue":"Yet another pub"},{"id":"f1c2d2be-1b88-493e-b6a9-576a0a1005f2","title":"Future Activity 5","date":"2021-04-30T13:44:08.3216","description":"Activity 5 months in future","category":"drinks","city":"London","venue":"Just another pub"},{"id":"ec482513-08e0-4f1a-9171-86e7749ee6ed","title":"Future Activity 6","date":"2021-05-30T13:44:08.3216","description":"Activity 6 months in future","category":"music","city":"London","venue":"Roundhouse Camden"},{"id":"f0a66cf4-217e-4b7e-a854-dd5c15b6e37b","title":"Future Activity 7","date":"2021-06-30T13:44:08.3216","description":"Activity 2 months ago","category":"travel","city":"London","venue":"Somewhere on the Thames"},{"id":"b156196a-4032-41d3-a4c3-83bdb7d0a92a","title":"Future Activity 8","date":"2021-07-30T13:44:08.3216","description":"Activity 8 months in future","category":"film","city":"London","venue":"Cinema"}]
  return (
    <div className="App">
      <Header  as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity:any) => (
            <List.Item key = {activity.id}>{activity.title}</List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
