import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import React from 'react';
import Typed from 'typed.js';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {



  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Web Developer", "Web Designer", "UI/UX Designer" ],
      typeSpeed: 150,
      backSpeed: 150,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Rudra`} <span className="txt-rotate" ><span className="wrap" ref={el}></span></span></h1>
                  <p>Iam a highly skilled Front End developer in HTML5, CSS, JavaScript, JQuery, Sass, Bootstrap, Material UI and ReactJs . I
have knowledge of popular frameworks such as Basics Angular, Modern responsive Materialize-CSS .</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}