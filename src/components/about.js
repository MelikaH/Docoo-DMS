import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdbreact";

const styles = {
  bigAvatar: {
    margin: 40,
    width: 100,
    height: 100
  }
};

function About(props) {
  const { classes } = props;
  return (
    <div>
      <div className="aboutBack" />

      <Grid container className="muigrid">
        <MDBCard className="aboutCard my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <h2
              className="h1-responsive font-weight-bold my-5"
              id="welcomeText"
            >
              Welcome
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Docoo believes that everyone deserves a great document management
              system that helps organizations save time. Our goal is to remove
              unefficient, time consuming activities allowing their users
              effective workflow without stressful search over an office for
              some important paper. Everything is right here at your screen!
              Your success is our happiness; together we create merrier work
              environment!
            </p>
            <section className="text-center my-5">
              <h2
                className="h1-responsive font-weight-bold text-center my-5"
                id="heading"
              >
                Our products
              </h2>
              <p className="grey-text text-center w-responsive mx-auto mb-5">
                Here you can find some of our best products!
              </p>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade
                      src="https://www.gloriafood.com/wp-content/uploads/2013/12/featured-image-order-taking-system-870x400.png"
                      top
                      alt="sample photo"
                      height="193"
                    />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Food Ordering system</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Crunches</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        minima veniam elit.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade
                      src="https://27kkdqbrpxwygunh-zippykid.netdna-ssl.com/wp-content/uploads/2018/07/508e71c2dcd805f0793641de015278923950e89431f47740dcbc4e143cc27cad.jpg"
                      top
                      alt="sample photo"
                      height="193"
                    />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Personal Web Page</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Web Page</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        minima veniam elit.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade
                      src="https://www.esdw.eu/wp-content/uploads/events/5603/image/hepatitis.jpg"
                      top
                      alt="sample photo"
                    />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Mobile Apps</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">Infectious Diseases</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        minima veniam elit.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBCardBody>
        </MDBCard>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
