import React from "react";

const UserContext = React.createContext({
  name: {
    value: "",
    onChange: () => {}
  },
  image: "",
  
  status: {
    value: "",
    onChange: () => {}
  },
  
  
});

export default UserContext;