import { Modal, show, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Book from './Book';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Book.css';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ titel, poster_path, vote_average, release_date, overview }) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [show, setShow] = useState(false);
    const [count,setCount]=useState(0);
    const [price,setPrice]=useState(count);
    function increment(){
        if(count>=5){
            setCount(count);
        }
        else{
            setCount(count+1);
        }
    }
    function decrement(){
        if(count<=0){
            setCount(count);
        }
        else{
            setCount(count-1);
        }
    }
    function Price(){
        setPrice(price*200 + 0.18*(price*200));
        if(count>=1){
            window.alert('YOU HAVE TO PAY ' + (count*200 + 0.18*(count*200)));
        }
        else{
            window.alert('Please select atleast 1 ticket');
        }
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // const navigate = useNavigate();
    // const navigateToBook = () => {
    //     navigate('/books');
    // };
    function BookPage(){
        const url = 'http://localhost:3000/book';
        window.open(url, '_blank');
    }

    return (
        <>
            <div className="card text-center bg-secondary mb-3">
                <div className="card-body">
                    <img className="card-img-top" src={API_IMG + poster_path} />
                    <div className="card-body">
                        <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} />
                                <h3>{titel}</h3>
                                <h4>IMDb: {vote_average}</h4>
                                <h5>Release Date: {release_date}</h5>
                                <br></br>
                                <h6>Overview</h6>
                                <p>{overview}</p>
                                <div>
                                    <h3>Please Select Date and Time and the number of tickets you need you can make a selection of maximum 5 tickets</h3>
                                    <DateTimePickerComponent placeholder='Choose a date and time' value={date} min={date} format="dd-MM-yyyy HH:mm" step={180}>
                                    </DateTimePickerComponent>
                                </div>
                                <div>
                                
                                </div>
                                <div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={increment}>+</Button>
                                <p>{count}</p>
                                <Button onClick={decrement}>-</Button>
                                <Button variant="secondary" onClick={Price}>Book Now</Button>
                                <Button onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        {/* <Routes>
                            <Route path="/books" element={<Book />} />
                        </Routes> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieBox;