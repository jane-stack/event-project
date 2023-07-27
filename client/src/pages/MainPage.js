// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"


// function MainPage () {
//   const { user } = useContext(UserContext);

//     return (
//         <div>
//           <h3>My Attending Events</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Event Name</th>
//                 <th>Event Date</th>
//                 <th>Event Location</th>
//               </tr>
//             </thead>
//             <tbody>
//                 {user.attended_events.map(a => (
//                   <tr key={a.id}>
//                     <td>{a.name}</td>
//                     <td>{a.date}</td>
//                     <td>{a.location}</td>
//                   </tr>
//                 ))}
//               </tbody>
//           </table>
//           <br/><br/>
//           <h3>My Organized Events</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Event Name</th>
//                 <th>Event Date</th>
//                 <th>Event Location</th>
//               </tr>
//             </thead>
//             <tbody>
//               {user.organized_events.map(a => (
//                 <tr key={a.id}>
//                   <td>{a.name}</td>
//                   <td>{a.date}</td>
//                   <td>{a.location}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     )
// }

// export default MainPage