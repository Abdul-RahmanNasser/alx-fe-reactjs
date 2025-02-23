/* eslint-disable */
import React from "react";
const UserContext = React.createContext();
function UserProvider({children}) {
    const [user, setUser] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });
      return (
        <UserContext.Provider value={user}>
          <UserDetails/>
        </UserContext.Provider>
      );
}
export default UserProvider;