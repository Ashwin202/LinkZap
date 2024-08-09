import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    useQuery,
} from '@tanstack/react-query'
import { useState, useEffect } from 'react';

function useURLData() {
    return useQuery({
        queryKey: ['urlData'],
        queryFn: () =>
            fetch('/api/url').then((res) =>
                res.json(),
            ),
    });
}

function HistoryPanel() {
    const [urlData, setUrlData] = useState([]);
    const { isPending, error, data } = useURLData();

    useEffect(() => {
        if (data) {
            setUrlData(data);
        }
    }, [data]);

    return (
        <div className="">
            <div className='text-blue text-center inter-xxl-bold my-3'>HOHO!</div>
            <div className='text-white text-center inter my-2'>Here are your shortned URLs! Now you can share them with others😊.</div>
            <Container className=''>
                <Row className='mt-3'>
                    {isPending && <div className="text-white text-center my-2">Loading...<i className='fa fa-spinner'></i></div>}
                    {error && <div className="text-red text-center my-2">An error has occurred: {error.message}</div>}
                    {urlData.map((url, index) => (
                        <Col key={index} md="3">
                            <Card className="card-parent w-100 mb-3">
                                <Card.Body>
                                    {/* <Card.Title>Card Title</Card.Title> */}
                                    <div className='inter-md'>{(url.url).substring(0, 25) + '...'}</div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <div className='inter text-blue'>linkzap.com/{url.short_url}</div>
                                        <div><i className="text-orange inter fa fa-external-link icon-hover" onClick={() => window.open(`linkzap.com/${url.short_url}`)}></i></div>
                                    </div>
                                    <div className='d-flex justify-content-between inter-sm mt-2'>
                                        <div className='text-grey'><i className="fa fa-eye"></i> {url.clicks}</div>
                                        <div className='inter-md'><i className="fa fa-copy text-blue icon-hover" onClick={() => navigator.clipboard.writeText(`linkzap.com/${url.short_url}`)}></i><i className="ml-3 fa fa-trash text-red ml-2 icon-hover"></i></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HistoryPanel;