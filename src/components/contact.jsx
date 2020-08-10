import React, { Component } from "react";
import axios from 'axios';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', response:'none'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getResponse = async (event) => {
    this.setState({response:"loading..."})
    const res = await axios.post(this.props.data.api_addr,{query:this.state.value});
    this.setState({response:res['data']['result']})
    console.log("get response called")
    console.log(res['data']['result'])
  }

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>How Was the movie?</h2>
                  <p>
                    Enter Your Review Here and Press the 'Send Message' Button.
                  </p>
                  <p>
                    Your Sentiment is:  {this.state.response}
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      value={this.state.value}
                      onChange={this.handleChange}
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg" onClick={this.getResponse}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
