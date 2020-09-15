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
  count: {
    value: "",
    onChange: () => {}
  },
  count2: {
    value: "",
    onChange: () => {}
  },
  
  
});

export default UserContext;