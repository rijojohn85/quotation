import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./styles/componenets/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default App;
