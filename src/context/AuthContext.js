// // src/context/AuthContext.js
// import React, { useContext, useEffect, useState } from 'react';
// import { auth } from '../firebase';

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe; // Cleanup on unmount
//   }, []);

//   const value = {
//     currentUser,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
