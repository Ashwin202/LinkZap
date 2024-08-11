import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-bar">
      <Container>   
        <Navbar.Brand href="#" className='inter-xl'> <img src="/linkzap.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" /> LinkZap</Navbar.Brand>
            <div className='inter'>Hi, <span className='text-blue'>Peeps</span></div>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;