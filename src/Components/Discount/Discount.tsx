import React,{useState, useEffect} from 'react'
import {Row, Col } from 'react-bootstrap';

// style
import './Discount.css';

const Discount = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Deadline for event
  const DeadLine = new Date('Dec, 27, 2027');

  // function
  const getTimer = () => {
    const now = new Date();
    const timer = DeadLine.getTime() - now.getTime();
    if (timer < 0) {
      console.log('Date have passed');
    } else {
      // setting seconds
      const secs = Math.floor((timer / 1000) % 60);
      setSeconds(secs);
      // setting minutes
      const mins = Math.floor((timer / 1000 / 60) % 60);
      setMinutes(mins);
      // setting hours
      const hrs = Math.floor((timer / (1000 * 60 * 60)) % 24);
      setHours(hrs);
      // setting days
      const ds = Math.floor(timer / (1000 * 60 * 60 * 24));
      setDays(ds);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
<section className="countdown-timer section-padding">
      <div className="container">
        <Row className=" text-center">
          <Col md={12} sm={12} xs={12}>
            <div className="heading-count">
              <h6 className="wrapper">Sale Starts In</h6>
            </div>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <div className="row time-countdown justify-content-center ">
              <div id="clock" className="time-count">
                <div className="time-entry days">
                  <span>{days}</span>
                  <div className="">Days</div>
                </div>
                <div className="time-entry hours">
                  <span>{hours}</span>
                  <div className="">Hours</div>
                </div>
                <div className="time-entry minutes">
                  <span className="">{minutes}</span>
                  <div className="">Minutes</div>
                </div>
                <div className="time-entry seconds">
                  <span className="">{seconds}</span>
                  <div className="">Seconds</div>
                </div>
              </div>
            </div>
            
          </Col>
        </Row>
      </div>
    </section>
	
    )
}
export default Discount;