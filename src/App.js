// components
import Login from "./Components/Account/Login";

import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  margin-top: 64px;
`;

function App() {
  return (
    <Component>
      <Login />
    </Component>
  );
}

export default App;
