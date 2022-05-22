import React from "react";
import Slider from "react-slick";
import  { Component } from "react";
import "./geral.css";
import "./pesados.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Header} from "../components/heder";

export default class Pesados extends Component {
    render() {
        function tamanho() {
            var largura = window.innerWidth;
            if ( 800 < largura ){
              return 3;
            }
            else if (800 > largura > 500){
              return 2;
            }
            else{
              return 1;
            }
          }
 const creditos={
    "credito_1": {
        "credito": "100.000,00",
        "parcelas": "889,72",
        "tempo": 150,
        "entrada": "4.419,22"
      },
      "credito_2": {
        "credito": "150.000,00",
        "parcelas": "1.334,58",
        "tempo": 150,
        "entrada": "6.628,83"
      },
      "credito_3": {
        "credito": "200.000,00",
        "parcelas": "1.779,44",
        "tempo": 150,
        "entrada": "8.838,44"
      },
      "credito_4": {
        "credito": "250.000,00",
       "parcelas": "2.224,3",
        "tempo": 150,
        "entrada": "1.1048,05"
      },
      "credito_5": {
        "credito": "300.000,00",
        "parcelas": "2.669,16",
        "tempo": 150,
        "entrada": "13.257,66"
      }
    };
        const settings = {
            slidesToShow: tamanho(),
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <>
            <Header/>
            <div id="slides">
            <Slider {...settings}>
              <div id= "div2">
                <div className="flip-container">
                    <div className="flipper">
                        <div className="front" id ="pesados">
                            <h1> CREDITO
                            <h2>R${creditos.credito_1.credito}</h2>
                            </h1>
                            
                        </div>
                        <div className="back">
                        <h1 className="credito">Credito: R${creditos.credito_1.credito}</h1>
                                                        <h2 className="parcela">Parcela: R${creditos.credito_1.parcelas}</h2>
                                                        <h2 className="tempo">Tempo: {creditos.credito_1.tempo} Meses</h2>
                                                        <h2 className="entrada">Entrada: R${creditos.credito_1.entrada}</h2>
                                                        <h2 id="Simular" ><a href={"https://api.whatsapp.com/send?phone=5561995037493&text="+ JSON.stringify(creditos.credito_1)} target="_blank">Simular</a></h2>

                        </div>
                    </div>
                </div>
              </div>
              <div id= "div2">
              <div className="flip-container">
                    <div className="flipper">
                        <div className="front" id ="pesados" >
                        <h1> CREDITO
                            <h2>R${creditos.credito_2.credito}</h2>
                            </h1>
                            
                        </div>
                        <div className="back">
                        <h1 className="credito">Credito: R${creditos.credito_2.credito}</h1>
                                                        <h2 className="parcela">Parcela: R${creditos.credito_2.parcelas}</h2>
                                                        <h2 className="tempo">Tempo: {creditos.credito_2.tempo} Meses</h2>
                                                        <h2 className="entrada">Entrada: R${creditos.credito_2.entrada}</h2>
                                                        <h2 id="Simular" ><a href={"https://api.whatsapp.com/send?phone=5561995037493&text="+ JSON.stringify(creditos.credito_2)} target="_blank">Simular</a></h2>
                        </div>
                    </div>
                </div>
              </div>
              <div id= "div2">
              <div className="flip-container">
                    <div className="flipper">
                        <div className="front" id ="pesados">
                        <h1> CREDITO
                            <h2>R${creditos.credito_3.credito}</h2>
                            </h1>
                            
                        </div>
                        <div className="back">
                        <h1 className="credito">Credito: R${creditos.credito_3.credito}</h1>
                                                        <h2 className="parcela">Parcela: R${creditos.credito_3.parcelas}</h2>
                                                        <h2 className="tempo">Tempo: {creditos.credito_3.tempo} Meses</h2>
                                                        <h2 className="entrada">Entrada: R${creditos.credito_3.entrada}</h2>
                                                        <h2 id="Simular" ><a href={"https://api.whatsapp.com/send?phone=5561995037493&text="+ JSON.stringify(creditos.credito_3)} target="_blank">Simular</a></h2>

                        </div>
                    </div>
                </div>
              </div>
              <div id= "div2">
              <div className="flip-container">
                    <div className="flipper">
                        <div className="front" id ="pesados">
                        <h1> CREDITO
                            <h2>R${creditos.credito_4.credito}</h2>
                            </h1>
                            
                        </div>
                        <div className="back">
                        <h1 className="credito">Credito: R${creditos.credito_4.credito}</h1>
                                                        <h2 className="parcela">Parcela: R${creditos.credito_4.parcelas}</h2>
                                                        <h2 className="tempo">Tempo: {creditos.credito_4.tempo} Meses</h2>
                                                        <h2 className="entrada">Entrada: R${creditos.credito_4.entrada}</h2>
                                                        <h2 id="Simular" ><a href={"https://api.whatsapp.com/send?phone=5561995037493&text="+ JSON.stringify(creditos.credito_4)} target="_blank">Simular</a></h2>
 
                        </div> 
                    </div>
                </div>
              </div>
              <div id= "div2">
              <div className="flip-container">
                    <div className="flipper">
                        <div className="front" id ="pesados">
                        <h1> CREDITO
                            <h2>R${creditos.credito_5.credito}</h2>
                            </h1>
                            
                        </div>
                        <div className="back">
                        <h1 className="credito">Credito: R${creditos.credito_5.credito}</h1>
                                                        <h2 className="parcela">Parcela: R${creditos.credito_5.parcelas}</h2>
                                                        <h2 className="tempo">Tempo: {creditos.credito_5.tempo} Meses</h2>
                                                        <h2 className="entrada">Entrada: R${creditos.credito_5.entrada}</h2>
                                                        <h2 id="Simular" ><a href={"https://api.whatsapp.com/send?phone=5561995037493&text="+ JSON.stringify(creditos.credito_5)} target="_blank">Simular</a></h2>
                        </div>
                    </div>
                </div>
              </div>
              
            </Slider>
            </div>
            </>
        );
      }
    }
