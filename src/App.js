import { Fragment, useEffect, useState, useMemo } from "react";
import Container from "@mui/material/Container";
import Product from "./Components/Products/Product";

function App() {
  const [socketData, setSocketData] = useState({});

  const socket = useMemo(
    () =>
      new WebSocket(
        "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
      ),
    []
  );

  useEffect(() => {
    socket.onopen = () => {
      setSocketData((pre) => {
        return { ...pre, socket: socket, connected: true };
      });
    };
  }, [socket]);

  return (
    <Fragment>
      <Container maxWidth="sm">
        <Product socketData={socketData} />
      </Container>
    </Fragment>
  );
}

export default App;
