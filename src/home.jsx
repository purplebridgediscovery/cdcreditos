import Logo from "./components/logo.png";
import './home.css';
import {Header} from "./components/heder";
import React from "react";
import {Link} from "react-router-dom";


export function Home(){
  return(
    <section>
      <div id="apresentacao">
        <Header/>
        <div id="texto_apresentacao">
          <h1>Discovery</h1>
          <h2>o seu<br/>investimento do<br/>futuro </h2>
          <a href="#escolhas"><div id="button">
            <p> Entenda como funciona o </p>
            <img id="logoBut" src={Logo}/>
          </div></a>
        </div>
      </div>
      <div id="escolhas">
        <div id="button3">
          <p>Vamos dar o proximo passo simule jâ seu cerdito com a</p>
          <img id="logoBut3" src={Logo}/>
        </div>
        <div id="tudo_cred">
       <Link to="/autos" exact><div className="Group_3" id="Group_3">
          <div id="CARROS_1"/>
        </div>
        </Link>

        <Link to="/pesados"><div className="Group_3" id="Group_2">
          <div id="PESADOS_1"/>
        </div>
        </Link>

        <Link to="/imoveis"><div className="Group_3" id="Group_1">
          <div id="PREDIO_1"/>
          <div id="PREDIO_2"/>
        </div>
        </Link>
        </div>
      </div>
      <div id="amostragem">
        <div id="button2">
          <img id="logoBut2" src={Logo}/>
          <p> COOPERATIVA ONDE O BANCO NÃO TEM VEZ!</p>
        </div>
        <div id="vantagens">
            <div id ="vantagens_text_1">    
            <svg id= "img_1" width="756" height="745" viewBox="0 0 756 745" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="278.986" cy="402.925" r="200" transform="rotate(27.3094 278.986 402.925)" fill="white"/>
            <circle cx="301.2" cy="414.395" r="175" transform="rotate(27.3094 301.2 414.395)" fill="#023047"/>
            <path d="M328.387 214.247L251.512 176.551C246.38 174.034 241.724 180.708 245.857 184.656L284.881 221.925C286.396 223.373 286.848 225.612 286.013 227.534L264.901 276.112C262.676 281.233 269.246 285.596 273.103 281.558L329.802 222.19C332.137 219.745 331.423 215.736 328.387 214.247Z" fill="white" stroke="white"/>
            <path d="M329.138 216.077L225.685 156.557C222.371 154.651 222.336 149.882 225.621 147.926L340.203 79.7293C342.043 78.6344 344.375 78.8321 346.004 80.2211L570.982 272.038C572.464 273.301 573.077 275.31 572.554 277.186L483.087 597.915C481.977 601.896 476.79 602.888 474.29 599.597L254.291 310.058C252.809 308.108 252.959 305.37 254.644 303.593L330.272 223.852C332.499 221.504 331.943 217.691 329.138 216.077Z" fill="#023047" stroke="#023047"/>
            </svg>
            <div id ="texto_vantagens_1">
             <h1 id="h1_img_1">100X</h1>
            <p id="p_img_1">MAIS VANTAJOSO QUE O <br/> CONSORCIO TRADICIONAL!</p>
            </div>
            </div>
            
            <div id ="vantagens_text_2">
            <svg id="img_2" width="138" height="358" viewBox="0 0 138 358" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.7603 232.678V5C31.7603 2.23858 33.9988 0 36.7603 0H101.24C104.001 0 106.24 2.23858 106.24 5V232.678C106.24 235.44 104.001 237.678 101.24 237.678H36.7603C33.9988 237.678 31.7603 235.44 31.7603 232.678Z" fill="white"/>
            <path d="M31.7603 262.675H106.24H132.964C137.091 262.675 139.441 267.392 136.955 270.686L106.24 311.396L69 358L31.7603 311.396L1.04458 270.686C-1.44098 267.392 0.909122 262.675 5.03596 262.675H31.7603Z" fill="white"/>
            <path d="M101.24 241.915H36.7603C33.9988 241.915 31.7603 244.153 31.7603 246.915V253.862C31.7603 256.623 33.9988 258.862 36.7603 258.862H101.24C104.001 258.862 106.24 256.623 106.24 253.862V246.915C106.24 244.153 104.001 241.915 101.24 241.915Z" fill="white"/>
            </svg>
            <div id ="texto_vantagens_2">
            <h1 id="h1_img_2">-87,4%</h1>
            <p id="p_img_2"> DE JUROS DO QUE O FINANCIAMENTO</p>
            </div>
            </div>
          </div>
      </div>
    </section>
  );
}