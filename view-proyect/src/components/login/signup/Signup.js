import React from 'react';

export default function SignUp(props) {

  const {handlerLogin} = props;

  return (
    <div className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="card card--up">
        <div className="card-header">
          <h3>Sign In</h3>
          <div className="d-flex justify-content-end social_icon">
            <span><i className="fab fa-facebook-square"></i></span>
            <span><i className="fab fa-google-plus-square"></i></span>
            <span><i className="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Username"/>
              
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
              </div>
              <input type="number" className="form-control form-control-age" placeholder="Age"/>
              <div className="input-group-prepend">
                <span className="input-group-text input-group-text-status"><i className="fas fa-users"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Marital Status"/>
            </div>
            <div className="input-group form-group">
              
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn float-right login_btn"/>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Already have an account?<a onClick={handlerLogin}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}