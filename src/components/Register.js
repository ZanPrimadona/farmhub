import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-8">
          <h1 class="display-1">Register</h1>
          <div class="card p-2">
            <div class="mt-2">
              <a href="google.com"><i class="fab fa-twitter fa-lg -md-5 fa-2x"></i> Register With Google</a >
            </div>
            <div class="mt-2">
              <a href="google.com"><i class="fab fa-google fa-lg -md-5 fa-2x"></i> Register With Facebook</a >
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register

