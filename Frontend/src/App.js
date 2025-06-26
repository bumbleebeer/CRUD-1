import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Form from "./Components/form.js"
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const Title = styled.h2``;

function App() {
  return (
    <div>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
      </Container>    
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
