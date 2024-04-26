import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headerbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TODO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Developed By:
            <a href='https://github.com/ArtemisNyx3' target='_blank'>
              ArtemisNyx3
            </a></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headerbar;