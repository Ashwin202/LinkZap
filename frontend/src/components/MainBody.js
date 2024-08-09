import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const useAddURL = (longURL, trigger) => {
    return useQuery({
        queryKey: ["addURL", longURL], 
        queryFn: () => {
            if (!longURL) return; 
            return fetch('/api/url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: longURL
                })
            }).then((res) => res.json());
        },
        enabled: !!longURL && trigger, // Ensure query runs only when triggered
    });
}

function MainBody() {
    const [longURL, setLongURL] = useState("");
    const [trigger, setTrigger] = useState(false);
    
    const queryClient = useQueryClient();

    const { error, data } = useAddURL(longURL, trigger);

    function shortenURL() {
        setTrigger(true);
    }

    useEffect(() => {
        if (data) {
            setTrigger(false); // Stop further queries after data is received
            setTimeout(() => queryClient.invalidateQueries(['urlData']), 1000);
        }
    }, [data, queryClient]);

    return (
        <div className="main-body-parent mt-4">
            <div>
                <div className='text-orange text-center inter-xxl-bold'> 
                    <span>Shorten your</span> 
                    <span className='text-blue'> loooooooooooong</span> URLs <br></br>like never before!
                </div>
                <div className='text-center inter-sm text-white mt-2 mb-4'>
                    Paste your long URLs below and click "Shorten!" 💥
                </div>
                <div className='text-left inter-sm mt-1' style={{ fontSize: "12px", color: "#7d7d7d" }}>
                    Your Long URL
                </div>
                <div className='d-flex justify-content-center gap-3'>
                    <Form.Control
                        onChange={(e) => setLongURL(e.target.value)}
                        type="text"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your loooooooooooooong URL"
                        className='shorten-url inter'
                        style={{ backgroundColor: "#374151", color: "white", outline: "none", border: "none" }}
                        value={longURL}
                    />
                    <Button 
                        className='shorten-button inter-lg-bold' 
                        variant="warning" 
                        onClick={shortenURL}>
                        Shorten
                    </Button>
                </div>
                {error && <div className='text-danger'>An error occurred: {error.message}</div>}
                {data && <div className='text-success'>Shortened URL: linkzap.com/{data.short_url}</div>}
            </div>
        </div>
    );
}

export default MainBody;
