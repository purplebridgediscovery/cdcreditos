import React from "react";
import Slider from "react-slick";
import  { Component } from "react";
import "./geral.css";
import "./imoveis.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Header} from "../components/heder";

export default class Imoveis extends Component {
    render() {
 const creditos={
    "credito_1": {
        "credito": "50.000,00",
        "parcelas": "453,70",
        "tempo": 140,
        "entrada": "2.286,95"
      },
      "credito_2": {
        "credito": "100.000,00",
        "parcelas": "4573,90",
        "tempo": 140,
        "entrada": "907,40"
      },
      "credito_3": {
        "credito": "120.000,00",
        "parcelas": "864,12",
        "tempo": 180,
        "entrada": "5.235,12"
      },
      "credito_4": {
        "credito": "150.000,00",
        "parcelas": "1.080,15",
        "tempo": 180,
        "entrada": "6.543,90"
      },
      "credito_5": {
        "credito": "175.000,00",
        "parcelas": "1.260,18",
        "tempo": 180,
        "entrada": "7.634,55"
      },
      "credito_6": {
        "credito": "200.000,00",
        "parcelas": "1.440,20",
        "tempo": 180,
        "entrada": "8.725,20"
      },
      "credito_7": {
        "credito": "250.000,00",
        "parcelas": "1.800,25",
        "tempo": 180,
        "entrada": "10.906,50"
      },
      "credito_8": {
        "credito": "300.000,00",
        "parcelas": "2.160,30",
        "tempo": 180,
        "entrada": "13.087,80"
      },
      "credito_9": {
        "credito": "370.000,00",
        "parcelas": "2.664,37",
        "tempo": 180,
        "entrada": "16.141,62"
      },
      "credito_10": {
        "credito": "500.000,00",
        "parcelas": "3.600,50",
        "tempo": 180,
        "entrada": "21.813,50"
      }
    };
        const settings = {
            slidesToShow: 3,
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
                        <div className="front">
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
                        <div className="front">
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
                        <div className="front">
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
                        <div className="front">
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
                        <div className="front">
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
