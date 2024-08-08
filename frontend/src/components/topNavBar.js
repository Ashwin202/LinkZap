import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-bar">
      <Container>   
        <Navbar.Brand href="#">LinkZap</Navbar.Brand>
            <div className='inter'>Hi, <span className='text-blue'>Peeps</span></div>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;