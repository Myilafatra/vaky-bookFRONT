import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropAtelier from "../propAtelier/propAtelier";
import Afficher from "../newPart/afficherPart";
import Acheter from "../newPart/Acheter";
import Atelier from "../newAtelier/NewAtelier"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    console.log('localStorage.local sur dashbord' + localStorage.id);

    const { user } = this.props.auth;

    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-2">
            <center>
              <h4>
                  <b>Bienvenue</b> <br />{user.nom.split(" ")[0]}
              </h4>
              <div class="d-flex" id="wrapper">

                <div class="bg-light border-right" id="sidebar-wrapper">
                  <div class="list-group list-group-flush">
                  <a href="#" class="list-group-item list-group-item-action bg-light">
                    <button className="btn deconex" onClick={()=>{
                          document.getElementById('ajoutcuisinier').style.display = "block"
                          document.getElementById('tableget').style.display = "none"
                      }}>Ajouter un livre</button>
                      </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                      <button className="btn deconex"  onClick={()=>{
                          document.getElementById('tableget').style.display = "block"
                          document.getElementById('ajoutcuisinier').style.display = "none"
                          document.getElementById('afficher').style.display = "none"
                          document.getElementById('acheter').style.display = "none"
                      }}>Votre livre</button>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                      <button className="btn deconex" id="botton" onClick={()=>{
                          document.getElementById('afficher').style.display = "block"
                          document.getElementById('ajoutcuisinier').style.display = "none"
                          document.getElementById('tableget').style.display = "none"
                          document.getElementById('acheter').style.display = "none"
                      }}>Empruntés</button>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                      <button className="btn deconex" id="botton" onClick={()=>{
                          document.getElementById('acheter').style.display = "block"
                          document.getElementById('ajoutcuisinier').style.display = "none"
                          document.getElementById('tableget').style.display = "none"
                          document.getElementById('afficher').style.display = "none"
                      }}>Achetés</button>
                    </a>
                  </div>
                </div>
              </div>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  // letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick} className="btn btn-danger"
              >
                Deconnecter
            </button>
            </center>
            </div>
            <div className="col-md-9">
              <Atelier/>
              <PropAtelier />
              <Afficher />
              <Acheter />
            </div>
            <div className="landing-copy col s12 center-align">


            </div>
          </div>
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
