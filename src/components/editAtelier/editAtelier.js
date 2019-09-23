import React from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class EditAtelier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      utilisateur: '',
      date: '',
      prix: '',
      debut: '',
      duree: '',
      place: '',
      description: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8080/modifierAtl/'+this.props.match.params.id)
        .then(response => {
              console.log("donné à modifier" , response.data)
            this.setState({
                titre: response.data.titre,
                prix: response.data.prix,
                debut: response.data.debut,
                date: response.data.date,
                description : response.data.description,
                duree: response.data.duree,
                place: response.data.place
            })
        });
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre', this.state.titre);
    data.append('prix', this.state.prix);
    data.append('debut', this.state.debut);
    data.append('date', this.state.date);
    data.append('duree', this.state.duree);
    data.append('place', this.state.place);
    data.append('placeRes', this.state.placeRes);
    data.append('idUser', localStorage.id);
    data.append('description', this.state.description)

    fetch('http://localhost:8080/putArticle/' + this.props.match.params.id, {
      method: 'PUT',
      body: data,
    }).then((response) => {
      console.log('ity n response ' + response);
      console.log('this.props.match.params.id ' + this.props.match.params.id);


      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/newArticle/${body.image}` });
        console.log('ity ilay body.image', body.image);

      });
    });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 border border-danger mx-auto mt-5" id="register">
            <center><h2 style={{ marginBottom: '40px', color: "#f3671f" }}>Modification</h2></center>
            <form onSubmit={this.handleUploadImage} className="md-form">
              <div className="form-group mx-sm-3 mb-2 container">

                <div className="col-xs-6 ">
                 <span>Titre</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.titre}
                    onChange={this.onChange}
                    name="titre"  />
                </div>

                <div className="col-xs-6">
                <span>Auteur</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.duree}
                    onChange={this.onChange}
                    name="duree"  />
                </div>

                <div className="col-xs-6">
                <span>Genre</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.debut}
                    onChange={this.onChange}
                    name="debut"  />
                </div>

                <div className="col-xs-6">
                <span>Editeur</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.place}
                    onChange={this.onChange}
                    name="place"  />
                </div>

                <div className="col-xs-6">
                <span>Resumé</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.description}
                    onChange={this.onChange}
                    name="description" />
                </div>

                <div className="col-xs-6">
                <span>Année de parution</span><br/>
                  <input className="form-control" type="text"
                    value={this.state.date}
                    onChange={this.onChange}
                    name="date"  />
                </div>

                <div className="col-xs-6">
                <span>Prix</span><br/>
                  <input className="form-control" type="number"
                    value={this.state.prix}
                    onChange={this.onChange}
                    name="prix" />
                </div>
                <br />

                <div className="row">
                  <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                </div>
                <center>
                  <button className="btn btn-outline-orange" type="submit" onClick={() => {
                    confirmAlert({
                      customUI: () => {
                        return (
                          <div className='custom-ui'>
                            <h1>Modification reussi! </h1>
                            <center></center><a href="/dashboard" id="okajout" className="btn btn-primary">OK</a>
                          </div>
                        );
                      }
                    });
                  }} type="submit" id="ajouter_boutton">
                    Valider
                      </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAtelier;