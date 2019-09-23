import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import './login.css';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      prenom: "",
      specialite: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      specialite: this.state.specialite,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
    
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-6 border border-danger mx-auto mt-5" id="register">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <center><h2 style={{marginBottom: '40px',color:"#f3671f"}}>Inscription</h2></center>
             
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.nom}
                  error={errors.nom}
                  id="nom"
                  type="text"
                  className={classnames("", {
                    invalid: errors.nom
                  })}
                />
                <label htmlFor="name">Nom</label>
                <span className="red-text">{errors.nom}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.prenom}
                  error={errors.prenom}
                  id="prenom"
                  type="text"
                  className={classnames("", {
                    invalid: errors.prenom
                  })}
                />
                <label htmlFor="name">Prenom</label>
                <span className="red-text">{errors.prenom}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <center>
                <button
                  style={{
                    width: "19.35vh",
                    borderRadius: "0.387vh",
                    letterSpacing: "0.193vh",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect  accent-3 btn1"
                >
                  S'incrire
                </button>
               
                <p className="grey-text text-darken-1">
                Avez vous deja une Compte? <Link to="/login">Se connecter</Link>
              </p>
              </center>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
