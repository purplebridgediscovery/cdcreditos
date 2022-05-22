
import React from "react";
import Slider from "react-slick";
import  { Component } from "react";
import "./geral.css";
import "./autos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Header} from "../components/heder";

export default class Autos extends Component {
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
        "credito": "25.000,00",
        "parcelas": "441,57",
        "tempo": 70,
        "entrada": "1.099,82"
      },
      "credito_2": {
        "credito": "35.000,00",
        "parcelas": "618,19",
        "tempo": 70,
        "entrada": "1.539,74"
      },
      "credito_3": {
        "credito": "45.000,00",
        "parcelas": "794,82",
        "tempo": 70,
        "entrada": "1.979,67"
      },
      "credito_4": {
        "credito": "55.000,00",
        "parcelas": "971,44",
        "tempo": 70,
        "entrada": "2.419,59"
      },
      "credito_5": {
        "credito": "70.000,00",
        "parcelas": "1.236,37",
        "tempo": 70,
        "entrada": "3.079,47"
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
                        <div className="front" id="front_autos">
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
                        <div className="front" id="front_autos">
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
                        <div className="front" id="front_autos">
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
                        <div className="front" id="front_autos">
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
                        <div className="front" id="front_autos">
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
