import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";

function App() {
  return (
    <div className="App">
      <h1 className="title"> 연락처 </h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
