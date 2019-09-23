import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SwiftSlider from 'react-swift-slider'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            adresse: '',
            prêt: '',
            remise: '',
            profil: []
        };
        this.onChange = this.onChange.bind(this)

    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        axios.get('https://polar-reef-70255.herokuapp.com/newArticle')
            .then(response => {
                this.setState({ profil: response.data });
                console.log('profil: ', this.state.profil);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {
        let imgUrl = './image/livre6.jpg';
        const data = [
            { 'id': '1', 'src': './image/livre6.jpg' },
            { 'id': '2', 'src': './image/livre5.jpg' },
            { 'id': '3', 'src': './image/livre1.jpg' },
            // { 'id': '4', 'src': 'https://i.ytimg.com/vi/DxUi8I5aSgc/maxresdefault.jpg' },
            // { 'id': '5', 'src': 'https://s3-eu-west-1.amazonaws.com/com.okpal.media/o/7/qpm6G-89739663-o.jpg' }
        ];
        return (
            <div>
                {/* <div style={{
                    backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
                }} id="image"

                >
                    <div className="text-white  px-md-5 mx-md-5 py-5 px-4">
                        <div className="py-5">
                            <h2 id="h2">ATELIER DE CUISINE</h2>
                            <p  id="verdana" className="mb-4 pb-2 px-md-5 ">
                                <span>Aimez-vous cuisiner?Personnes âgés de 25 à 35 ans?</span> <br /><br />
                                Un atelier de cuisine est fait pour vous si vous aimez <br />la cuisine facile et créative !
                            </p>
                        </div>
                    </div>
                </div> */}
                <div className="slide mx-auto mt-2">
                    <SwiftSlider data={data} />
                    <div className="text-white">
                        <div className="py-5">
                            <h2 id="h2">Plongez dans le merveilleux monde de lecture</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mx-auto mt-5">
                            <a href="/tousLesAteliers"><center> <img class="card-img-top" id="sary1" src='https://images-na.ssl-images-amazon.com/images/I/51VCicyFLZL._SX330_BO1,204,203,200_.jpg' alt="Cardimagecap" /></center></a>
                            <p class="card-title title">A CANTICLE FOR LEIBOWITZ</p>
                            <p class="card-title author ">by WALTER M. MILLER JR.</p>
                        </div>
                        <div className="col-md-3 mx-auto mt-5">
                            <a href="/tousLesAteliers"><center> <img class="card-img-top" id="sary1" src='https://images-na.ssl-images-amazon.com/images/I/51amCG5ezcL._SX326_BO1,204,203,200_.jpg' alt="Cardimagecap" /></center></a>
                            <p class="card-title  title">KAVALIER & CLAY</p>
                            <p class="card-title author">by MICHAEL CHABON</p>
                        </div>
                
                        <div className="col-md-3 mx-auto mt-5">
                            <a href="/tousLesAteliers"> <center> <img class="card-img-top" id="sary1" src='https://images-na.ssl-images-amazon.com/images/I/51VCicyFLZL._SX330_BO1,204,203,200_.jpg' alt="Cardimagecap" /></center></a>
                            <p class="card-title title">A CANTICLE FOR LEIBOWITZ</p>
                            <p class="card-title author">by WALTER M. MILLER JR.</p>
                        </div>
                        <div className="col-md-3 mx-auto mt-5">
                            <a href="/tousLesAteliers"> <center> <img class="card-img-top" id="sary1" src='https://images-na.ssl-images-amazon.com/images/I/51amCG5ezcL._SX326_BO1,204,203,200_.jpg' alt="Cardimagecap" /></center></a>
                            <p class="card-title title">KAVALIER & CLAY</p>
                            <p class="card-title author">by MICHAEL CHABON</p>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}