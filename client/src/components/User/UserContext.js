import React from "react";

const UserContext = React.createContext({
  name: {
    value: "",
    onChange: () => {}
  },
  image: "",

  nickname: {
    value: "",
    onChange: () => {}
  },
  
  
});

export default UserContext;