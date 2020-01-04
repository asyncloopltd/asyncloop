import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="AsyncLoop"/>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="LearnMore" className="main special">
            <header className="major">
              <h2>What we love</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Infrastracture as Code</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate arcu a sollicitudin gravida. 
                Ut eu egestas nunc, ac hendrerit erat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Cloud</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Serverless Architecture</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Data Engineering</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Event Sourcing</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          <section id="8hours" className="main special">
          <header className="major">
              <h2>8 Hours</h2>
              <p>
              We are committed to invest at lest 8 hours a week to code for a good cause.
              </p>
            </header>
            <p className="content">
              We would love to hear what you have in mind and we would like to help.
              We can provide our resources and experties for free.
              We believe that with a bit of help we can make the world a better place.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="mailto:uncini.michel@gmail.com?subject=8%20Hours" class="btn btn-light btn-lg btn-block">Contact Us</a>
                </li>
              </ul>
            </footer>
          </section>
          <section id="GetInTouch" className="main special">
            <header className="major">
                <h2>We want hear from you</h2>
                <p>
                  Donec imperdiet consequat consequat. Suspendisse feugiat congue
                  <br />
                  posuere. Nulla massa urna, fermentum eget quam aliquet.
                </p>
              </header>
              <footer className="major">
                <ul className="actions">
                  <li>
                    <a href="mailto:uncini.michel@gmail.com?subject=Contact%20Us" class="btn btn-light btn-lg btn-block">Contact Us</a>
                  </li>
                </ul>
              </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
