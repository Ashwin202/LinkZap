import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MainBody() {
    return (
        <div className="main-body-parent mt-4">
            <div>
                <div className='text-orange text-center inter-xxl-bold'> <span >Shorten your</span> <span className='text-blue'>loooooooooooong</span> URLs <br></br>like never before!</div>
                <div className='text-center inter-sm text-white mt-2 mb-4'>Paste your long URLs below and click "Shorten!" 💥</div>
                <div className='text-left inter-sm mt-1' style={{ fontSize: "12px", color: "#7d7d7d" }}>Your Long URL</div>
                <div className='d-flex justify-content-center gap-3'>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your loooooooooooooong URL"
                        className='shorten-url inter'
                        style={{backgroundColor: "#374151", color: "white", outline: "none", border: "none"}}
                    />
                    <Button className='shorten-button inter-lg-bold' variant="warning">Shorten</Button>
                </div>
            </div>
        </div>
    );
}

export default MainBody