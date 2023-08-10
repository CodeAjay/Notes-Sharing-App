import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your code to submit the note to your backend or perform any other actions.
    console.log("Note submitted:", noteText);
    setNoteText(""); // Clear the input field after submitting the note.
  };

  return (
    <div>
      <div className="container">
        <h2>Dashboard</h2>
        {isAuthenticated ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <form onSubmit={handleSubmit}>
              <div>
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Enter your note here"
                  rows="4"
                  cols="50"
                />
              </div>
              <div>
                <button type="submit">Submit Note</button>
              </div>
            </form>
          </div>
        ) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;



// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Dashboard = () => {
//   const { user, isAuthenticated } = useAuth0();
//   return (
//     <div>
//         <div className="container">
//             <h2>Dashboard</h2>
//             {localStorage.isLoggedIn ? (
//               <div>
//                 <p>Welcome, {user.name}!</p>
//                 {/* Add note upload form */}
//               </div>
//             ) : (
//               <p>Please log in to access the dashboard.</p>
//             )}
//         </div>
//     </div>
//   );
// };

// export default Dashboard;
