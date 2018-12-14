//Web Components
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
// import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@polymer/paper-tooltip/paper-tooltip.js';

//Card Data
import '/src/portfolio-app/carddata/skills.js';
import '/src/portfolio-app/carddata/projects.js';
import '/src/portfolio-app/scripts/requests.js'
/**
* @customElement
* @polymer
*/
class PortfolioApp extends PolymerElement {
  static get template() {
    return html`
    <style id="main-styles">
    :host {
      display: block;
      height:100%;
      width:100%;
    }

    .frame{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title-text{
      font-family: 'Montserrat', sans-serif;
      margin:0px;
      padding:0px;
      font-weight:bold;
      letter-spacing: 1px;
    }
    .body-text{
      font-weight: 100;
      font-family: 'Montserrat', sans-serif;
    }
    .toolbar-wrapper{
      height: 8%;
      width:100%;
    }
    .toolbar-container{
      height: 100%;
      width: 100%;
    }
    .toolbar{
      height: 100%;
      width: 100%;
      background-color:black;
      color:white;
    }
    .toolbar-title{

    }
    .menu-icon{

    }
    .menu-button{
      font-size: .8em;
    }
    div.toolbar-wrapper > app-header > app-toolbar > paper-button:nth-child(4) > iron-icon:hover .menu-button {
      background:red;
    }
    div.toolbar-wrapper > app-header > app-toolbar > paper-button:nth-child(4):hover .menu-button{
      color:red;
    }
    .vaadin-menu-icon{
      height: 20px;
      width:20px;
      padding-right:5px;
    }
    .vaadin-menu-icon{
      -webkit-transition: color .25s linear;
      -ms-transition: color .25s linear;
      transition: color .25s linear;
    }
    .banner-wrapper{
      height: 76%;
      width: 100%;
      background-color:#292C33;
    }
    .banner-title-wrapper{
      height: 42%;
      width: 100%;
      background:;
      font-weight: 800;
      font-size:1.16em;
      text-align:center;
    }
    .banner-title{
      font-size:3em;
      color:;
      font-weight:bold;
      margin-top:5%;

    }
    .mtc{
      transition: margin-bottom .25s;
      position:relative;

    }
    .mtc:hover{

    }
    .banner-description-wrapper{
      height: 20%;
      width: 100%;
    }
    .banner-description{
      font-size:1em;
      margin-bottom:.6%;
      font-weight:medium;
      text-align: center;
      margin-left:10%;
      margin-right:10%;
    }
    .banner-button-wrapper{
      height: 20%;
      width: 100%;
      background:;
    }
    .banner-button{
      height: 50%;
      width: 15%;
      background:black;
      color:white;
f      font-weight: 100;
    }
    .skills-wrapper{
      height: ;
      width: 100vw;
      background:white;
    }
    .header-wrapper{
      height: 27vh;
      width: 100vw;
      background-color:;
      text-align: center;
    }
    .header-container{
      height:100%;
      width:100%;
    }
    .header{
      font-family: 'Montserrat', sans-serif;
    }
    .header-title{
      font-size:2.25em;
      font-family: sans-serif;
      font-weight:bold;
    }
    .header-description{
      /* padding-top:2.5%; */
      font-size:1.2em;
      font-weight: 300;
      margin-left: 10%;
      margin-right: 10%;
    }
    .content-wrapper{
      height:;
      width:100vw;
      background-color: ;
    }
    .content-container{
      height: ;
      width:90%;
      background-color: ;
    }
    .skill-card-wrapper{
      height: 33.3vh;
      width:25%;
      background:;
      float:right;
    }
    .card-container{
      height: 90%;
      width: 90%;
      font-family: 'Montserrat', sans-serif;
      background:#292C33;
      border-radius: 12px;
      -webkit-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
      transition: box-shadow .33s;
    }
    .card-container:hover{
      -webkit-box-shadow: 0px 9px 21px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 9px 21px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 9px 21px 0px rgba(0,0,0,0.75);
    }
    .skill-card{
      height: 100%;
      width: 100%;
    }
    .skill-card-image-container{
      height: 70%;
      width:100%;
    }
    .skill-card-image{
      height:12vh;
      width:12vh;
      background-color:;
    }
    .skill-card-image:hover{
    }
    .skill-card-title-container{
      height: 30%;
      width: 100%;
      background:;
      text-align: center;
    }
    .skill-card-progress{
      margin-bottom: 0;
      align-self: flex-end;
      background:;
      position:relative;
      bottom:0px;
      width: 100%;
    }
    .skill-card-title{
      color:#f2f2f2;
      font-size:1em;
      font-weight: bold;
    }
    .projects-wrapper{
      height:;
      background-color: ;
    }
    .projects-container{
    }
    .project-card-wrapper{
      height: 40vh;
      width:33.3%;
      background-color: ;
      float:right;
    }
    .project-card-container{
      height: 90%;
      width:95%;
      background-color: black;
      border-radius: 12px;
      position:relative;
    }
    .project-image-wrapper{
      height: 80%;
      width: 80%;
      background-color: ;
    }
    .project_image{
      height: 100%;
      width:100%;
      border-radius: .33em;
    }
    .project-image-overlay{
      height: 100%;
      width: 100%;
      background:orange;
    }
    .contact-wrapper{
      width:100vw;
      /* height: 100vh; */
      display: flex;
      justify-content: center;
    }
    .footer-piece{
      background:#292C33;
    }
    .footer-header{
      height: 10vh;
      width: 100vw;
      background: ;
      font-size:1.5em;
      margin-top:3%;
    }
    .footer-description{
      height: 10vh;
      width: 100vw;
      background:;
      font-size:1em;
      text-align: center;
    }
    .footer-social-wrapper{
      height: 15vh;
      width: 100vw;
      background:;
    }
    .footer-social-container{
      height: 15vh;
      width: 15vh;
      background:;
    }
    .footer-closer{
      height: 5vh;
      width: 100vw;
      background:black;
      color:white;
      font-weight: 100;
      font-size: .8em;
    }
    .footer-icon{
      height: 3em;
      width: 3em;
      transition: all .33s;
      color:white;
}
    .footer-icon:hover{
      height:3.6em;
      width:3.6em;
      cursor:pointer;
    }
    .twitter-icon:hover{
      color:#1DA1F2;
    }
    .github-icon:hover{
      color:#FFFFFF;
    }
    .linkedin-icon:hover{
      color:#0077B5;
    }
    .email-icon:hover{
      color:#DC4A3E;
    }
    .paypal-icon:hover{
      color:#EBF3F6;
    }
    .footer-link{
      text-decoration: inherit;
      color: inherit;
      cursor: auto;
    }

    .footer-link:visited{
      text-decoration: inherit;
      color: inherit;
      cursor: auto;
    }
    .drawer{
      z-index:2;
    }
    .drawer-button-wrapper{
      height:10%;
      width:100%;
    }
    .drawer-button{
      height: 100%;
      width:100%;
      font-size:1.2em;
    }
    .drawer-icon{
      margin:10px;
    }
    </style>

    <div class="toolbar-wrapper">
      <app-header class="toolbar-container">
        <app-toolbar class="toolbar">
          <div class="menu-spacer" spacer></div>
          <div class="toolbar-title title-text" main-title><span style="color: #b3b3b3">Niye </span><span style="font-size:1.16em;">Turner</span></div>
          <paper-button id="blog" class="menu-button-getter menu-button body-text"><iron-icon icon="vaadin:newspaper" class="vaadin-menu-icon"></iron-icon><span class="menu-icon-text">Blog</span></paper-button>
          <paper-button id="skills" class="menu-button menu-button-getter body-text"><iron-icon icon="vaadin:lightbulb" class="vaadin-menu-icon"></iron-icon><span class="menu-icon-text">Skills</span></paper-button>
          <paper-button id="contact" class="menu-button menu-button-getter body-text"><iron-icon icon="vaadin:comments-o" class="vaadin-menu-icon"></iron-icon><span class="menu-icon-text">Contact</span></paper-button>
          <paper-button id="projects" class="menu-button menu-button-getter body-text"><iron-icon icon="vaadin:records" class="vaadin-menu-icon"></iron-icon><span class="menu-icon-text">Projects</span></paper-button>
          <paper-icon-button icon="menu" class="menu-button drawer-icon" style="display:none;" onclick="(function(){document.querySelector('portfolio-app').root.querySelector('.drawer').open()})()"></paper-icon-button>
          <div class="menu-spacer" spacer></div>
        </app-toolbar>
      </app-header>
    </div>

    <app-drawer style="visibility:hidden" class="drawer" closed align="right">
      <div class="drawer-button-wrapper">
        <paper-button id="blog"  class="drawer-button menu-button-getter"><iron-icon icon="vaadin:newspaper" class="drawer-icon"></iron-icon>Blog</paper-button>
      </div>
      <div class="drawer-button-wrapper">
        <paper-button id="skills" class="drawer-button menu-button-getter"><iron-icon icon="vaadin:lightbulb" class="drawer-icon"></iron-icon>Skills</paper-button>
      </div>
      <div class="drawer-button-wrapper">
       <paper-button id="contact" class="drawer-button nenu-button-getter"><iron-icon icon="vaadin:comments-o" class="drawer-icon"></iron-icon>Contact</paper-button>
      </div>
      <div class="drawer-button-wrapper">
        <paper-button id="projects" class="drawer-button menu-button-getter"><iron-icon icon="vaadin:records" class="drawer-icon"></iron-icon>Projects</paper-button>
      </div>
    </app-drawer>

    <div class="banner-wrapper title-text">
    <div class="banner-title-wrapper frame">
    <div class="banner-title">
    <span style="font-size:1.2em;color:#00cc00">Full</span><span style="color:white;">-</span><span style="color:#3333ff">Stack </span><span style="color:white;"><span class="mtc">D</span><span class="mtc">e</span><span class="mtc">v</span><span class="mtc">e</span><span class="mtc">l</span><span class="mtc">o</span><span class="mtc">p</span><span class="mtc">e</span><span class="mtc">r</span></span>
    </div>
    </div>
    <div class="banner-description-wrapper frame">
    <div class="banner-description" style="line-height:1.7em;color:white;margin-right:10%;margin-left:10%;">
      Hey I'm Niye, a <span style="color:#00cc00">full-stack</span> developer (primarily server-side)<br>with an eye for <span style="color:#00cc00">quality</span>.
    </div>
    </div>
    <div class="banner-button-wrapper frame">
    <paper-button style="text-align:center;" class="banner-button" raised toggles>Contact Me</paper-button>
    </div>
    </div>

    <div class="header-wrapper projects-tag">
    <div class="header-container frame">
    <div class="header">
    <div class="header-title">Projects<br><br></div>
    <div class="header-description">A few of my more recent projects. <br>Feel free to get in touch and give me something to work on.
    </div>
    </div>
    </div>

    <div class="projects-wrapper frame">
    <div class="projects-container content-container">

    </div>
    </div>

    <div class="skills-wrapper skills-tag">
    <div class="header-wrapper">
    <div class="header-container frame">
    <div class="header">
    <div class="header-title">Technical Skills<br><br></div>
    <div class="header-description">Some of my current skills, which I'm always practicing and acquiring more of!</div>
    </div>
    </div>
    </div>


    <div class="skills-content-wrapper content-wrapper frame">
    <div class="skills-content-container content-container">
    </div>
    </div>

    </div>
<!--
    <div class="header-wrapper projects-tag">
    <div class="header-container frame">
    <div class="header">
    <div class="header-title">Projects<br><br></div>
    <div class="header-description">A few of my more recent projects. <br>Feel free to get in touch and give me something to work on!</div>
    </div>
    </div>
    </div>

    <div class="projects-wrapper frame">
    <div class="projects-container content-container">

    </div>
    </div>
-->

    <div class="skills-wrapper skills-tag contact-tag">
    <div class="header-wrapper">
    <div class="header-container frame">
    <div class="header" style="margin-bottom:20px;margin-top:20px">
    <div class="header-title">Contact<br><br></div>
    <div class="header-description" style="margin-bottom:">You can email me at <span style="color:#3333ff;">niyeturner@gmail.com</span> <br>or using one of the social media platforms beneath this form.</div>
    </div>
    </div>
    </div>

<!--
   <div class="header">
    <div class="header-title">Contact<br><br></div>
    <div class="header-description">You can email me at <span style="color:#3333ff;">niyeturner@gmail.com</span> <br>or using one of the social media platforms beneath this form.</div>
    </div>
    </div>
    </div>
-->
    <div class="contact-wrapper frame">
    <custom-style>
      <style is="custom-style">
        .custom-parent {
          font-size: 12px;
          width:50%;
        }
        .custom{
          width:100%;
        }
        paper-input.custom,paper-textarea:hover {
          border: 1px solid #29B6F6;
        }
        paper-input.custom,paper-textarea {
          margin-bottom: 14px;
          --primary-text-color: #01579B;
          --paper-input-container-color: black;
          --paper-input-container-focus-color: black;
          --paper-input-container-invalid-color: black;
          border: 1px solid #BDBDBD;
          border-radius: 5px;

          /* Reset some defaults */
          --paper-input-container: { padding: 0;};
          --paper-input-container-underline: { display: none; height: 0;};
          --paper-input-container-underline-focus: { display: none; };

          /* New custom styles */
          --paper-input-container-input: {
            box-sizing: border-box;
            font-size: inherit;
            padding: 4px;
          };
          --paper-input-container-input-focus: {
            background: rgba(0, 0, 0, 0.1);
          };
          --paper-input-container-input-invalid: {
            background: rgba(255, 0, 0, 0.3);
          };
          --paper-input-container-label: {
            top: -8px;
            left: 4px;
            background: white;
            padding: 2px;
            font-weight: bold;
          };
          --paper-input-container-label-floating: {
            width: auto;
          };
        }
      </style>
    </custom-style>

    <div class="custom-parent">
      <paper-input class="custom" label="Name" value="" always-float-label>
      </paper-input>
      <paper-input class="custom" label="Email" always-float-label auto-validate pattern="[^@]+[^\.]+\..+">
      </paper-input>
      <paper-textarea class="custom" label="Message" style="height:15em" always-float-label>
      </paper-textarea>
      <input id="INPUT_9" class="contact-send-button" type="" value="Send" action="">
    </div>

    <style>
    #FORM_1 {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      height: 509.5px;
      text-decoration: none solid rgb(45, 45, 45);
      width: 586px;
      column-rule-color: rgb(45, 45, 45);
      perspective-origin: 293px 254.75px;
      transform-origin: 293px 254.75px;
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 400 normal 16px / 25.6px "nunito sans", sans-serif;
      margin: 0px;
      outline: rgb(45, 45, 45) none 0px;
    }/*#FORM_1*/

    #FORM_1:after {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      text-decoration: none solid rgb(45, 45, 45);
      column-rule-color: rgb(45, 45, 45);
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 400 normal 16px / 25.6px "nunito sans", sans-serif;
      outline: rgb(45, 45, 45) none 0px;
    }/*#FORM_1:after*/

    #FORM_1:before {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      text-decoration: none solid rgb(45, 45, 45);
      column-rule-color: rgb(45, 45, 45);
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 400 normal 16px / 25.6px "nunito sans", sans-serif;
      outline: rgb(45, 45, 45) none 0px;
    }/*#FORM_1:before*/

    #LABEL_2, #LABEL_4, #LABEL_6 {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      display: block;
      height: 25.5px;
      text-decoration: none solid rgb(45, 45, 45);
      width: 586px;
      column-rule-color: rgb(45, 45, 45);
      perspective-origin: 293px 12.75px;
      transform-origin: 293px 12.75px;
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 700 normal 16px / 25.6px "nunito sans", sans-serif;
      margin: 0px 0px 8px;
      outline: rgb(45, 45, 45) none 0px;
    }/*#LABEL_2, #LABEL_4, #LABEL_6*/

    #LABEL_2:after, #LABEL_4:after, #LABEL_6:after {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      text-decoration: none solid rgb(45, 45, 45);
      column-rule-color: rgb(45, 45, 45);
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 700 normal 16px / 25.6px "nunito sans", sans-serif;
      outline: rgb(45, 45, 45) none 0px;
    }/*#LABEL_2:after, #LABEL_4:after, #LABEL_6:after*/

    #LABEL_2:before, #LABEL_4:before, #LABEL_6:before {
      box-sizing: border-box;
      color: rgb(45, 45, 45);
      text-decoration: none solid rgb(45, 45, 45);
      column-rule-color: rgb(45, 45, 45);
      caret-color: rgb(45, 45, 45);
      border: 0px none rgb(45, 45, 45);
      font: normal normal 700 normal 16px / 25.6px "nunito sans", sans-serif;
      outline: rgb(45, 45, 45) none 0px;
    }/*#LABEL_2:before, #LABEL_4:before, #LABEL_6:before*/

    #INPUT_3, #INPUT_5 {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      display: block;
      height: 5%;
      width: ;
      perspective-origin: 293px 26.5px;
      transform-origin: 293px 26.5px;
      border: 1px solid rgb(222, 224, 224);
      border-radius: 6px 6px 6px 6px;
      font: normal normal 400 normal 17.6px / normal Arial;
      margin: 0px 0px 16px;
      padding: 16px;
    }/*#INPUT_3, #INPUT_5*/

    #INPUT_3:after, #INPUT_5:after {
      box-sizing: border-box;
      font: normal normal 400 normal 17.6px / normal Arial;
    }/*#INPUT_3:after, #INPUT_5:after*/

    #INPUT_3:before, #INPUT_5:before {
      box-sizing: border-box;
      font: normal normal 400 normal 17.6px / normal Arial;
    }/*#INPUT_3:before, #INPUT_5:before*/

    #TEXTAREA_7 {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      display: block;
      height: 204px;
      width: ;
      perspective-origin: 293px 102px;
      transform-origin: 293px 102px;
      border: 1px solid rgb(222, 224, 224);
      border-radius: 6px 6px 6px 6px;
      font: normal normal 400 normal 14.3px / normal monospace;
      margin: 0px 0px 16px;
      padding: 16px;

    }/*#TEXTAREA_7*/

    #TEXTAREA_7:after {
      box-sizing: border-box;
      font: normal normal 400 normal 14.3px / normal monospace;
    }/*#TEXTAREA_7:after*/

    #TEXTAREA_7:before {
      box-sizing: border-box;
      font: normal normal 400 normal 14.3px / normal monospace;
    }/*#TEXTAREA_7:before*/

    #INPUT_8 {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      display: none;
      width: 100%;
      border: 1px solid rgb(222, 224, 224);
      border-radius: 6px 6px 6px 6px;
      font: normal normal 400 normal 17.6px / normal Arial;
      margin: 0px 0px 16px;
      padding: 16px;
    }/*#INPUT_8*/

    #INPUT_8:after {
      box-sizing: border-box;
      font: normal normal 400 normal 17.6px / normal Arial;
    }/*#INPUT_8:after*/

    #INPUT_8:before {
      box-sizing: border-box;
      font: normal normal 400 normal 17.6px / normal Arial;
    }/*#INPUT_8:before*/

    #INPUT_9 {
      box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 8px 0px;
      color: rgb(255, 255, 255);
      cursor: pointer;
      height: 7%;
      width:15%;
      margin-bottom:3%;
      text-align: center;
      text-decoration: none solid rgb(255, 255, 255);
      vertical-align: middle;
      white-space: pre;
      column-rule-color: rgb(255, 255, 255);
      align-items: flex-start;
      perspective-origin: 49.5078px 25.5px;
      transform-origin: 49.5078px 25.5px;
      user-select: none;
      caret-color: rgb(255, 255, 255);
      border: 0px none rgb(255, 255, 255);
      border-radius: 6px 6px 6px 6px;
      font: normal normal 700 normal 17.6px / normal Arial;
      outline: rgb(255, 255, 255) none 0px;
      padding: 16px 28px;
    }/*#INPUT_9*/

    #INPUT_9:after {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      cursor: pointer;
      text-align: center;
      text-decoration: none solid rgb(255, 255, 255);
      white-space: pre;
      column-rule-color: rgb(255, 255, 255);
      user-select: none;
      caret-color: rgb(255, 255, 255);
      border: 0px none rgb(255, 255, 255);
      font: normal normal 700 normal 17.6px / normal Arial;
      outline: rgb(255, 255, 255) none 0px;
    }/*#INPUT_9:after*/

    #INPUT_9:before {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      cursor: pointer;
      text-align: center;
      text-decoration: none solid rgb(255, 255, 255);
      white-space: pre;
      column-rule-color: rgb(255, 255, 255);
      user-select: none;
      caret-color: rgb(255, 255, 255);
      border: 0px none rgb(255, 255, 255);
      font: normal normal 700 normal 17.6px / normal Arial;
      outline: rgb(255, 255, 255) none 0px;
    }/*#INPUT_9:before*/

    .contact-send-button{
      background-color:#33ccff;
      transition:all .33s;
    }
    .contact-send-button:hover{
      background-color:#3333ff;
    }
    .input-box{
      width:250px;
      outline:none;
      margin:0px;
    }
    </style>
    </div>

    <div class="footer-header frame footer-piece title-text"><span style="color:#00cc00">Niye&nbsp;</span>
    <span style="color:#3333ff">Turner</span></div>
    <div class="footer-description frame footer-piece title-text" style="color:white">Self taught developer,<br>visionary, and nature lover.</div>
    <div class="footer-social-wrapper frame footer-piece title-text">
    <div class="footer-social-container frame">
    <iron-iconset-svg name="inline" size="24">
    <svg id="shape" viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path></svg>
    </iron-iconset-svg>
    <a class="footer-link" href="https://twitter.com/Niy3Turn3r" target="_blank" style="none">
    <iron-icon class="twitter-icon footer-icon" id="twitter_tooltip" icon="inline:shape" role="img" aria-label="A shape"></iron-icon>
    <paper-tooltip for="twitter_tooltip" position="right" animation-delay="0">Twitter</paper-tooltip>
    </a>
    </div>

    <div class="footer-social-container frame">
    <iron-iconset-svg name="inline" size="24">
    <svg id="shape" viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path></svg>
    </iron-iconset-svg>
    <a class="footer-link" href="https://github.com/niyet" target="_blank" style="none">
    <iron-icon id="github_tooltip" class="github-icon footer-icon" icon="inline:shape" role="img" aria-label="A shape"></iron-icon>
    <paper-tooltip for="github_tooltip" position="right" animation-delay="0">Github</paper-tooltip>
    </a>
    </div>

    <div class="footer-social-container frame">
    <iron-iconset-svg name="inline" size="24">
    <svg id="shape" viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path></svg>
    </iron-iconset-svg>
    <a class="footer-link" href="https://www.linkedin.com/in/niy3turn3r/" target="_blank" style="none">
    <iron-icon class="linkedin-icon footer-icon" id="linkedin_tooltip" icon="inline:shape" role="img" aria-label="A shape"></iron-icon>
    <paper-tooltip for="linkedin_tooltip" position="right" animation-delay="0">LinkedIn</paper-tooltip>
    </a>
    </div>

    <div class="footer-social-container frame">
    <iron-iconset-svg name="inline" size="24">
    <svg id="shape" viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path></svg>
    </iron-iconset-svg>
    <iron-icon class="email-icon footer-icon" id="gmail" icon="inline:shape" role="img" aria-label="A shape"></iron-icon>
    <paper-tooltip class="gmail-tooltip" for="gmail" position="right" animation-delay="0">Copy email to clipboard</paper-tooltip>
    <paper-tooltip class="gmail-tooltip-copied" for="gmail" position="right" animation-delay="0" style="display:none;">Copied!</paper-tooltip>
    </div>

    <div class="footer-social-container frame">
    <iron-iconset-svg name="inline" size="24">
    <svg id="shape" viewBox="0 0 512 512"><path d="M374.6 173.4c0 61.3-54 109.9-145.6 109.9h-26.7l-20.5 89.6h-64.3l62.8-283h106.6C343.5 89.8 374.6 125.5 374.6 173.4zM307.1 175.2c0-25.7-21.2-32.5-45.8-32.5h-28.4l-18.8 84.8h25.3C276.1 227.5 307.1 213 307.1 175.2zM393.1 161.4c12.2 95.9-78.6 145.2-173.4 143.8l-20.7 88.1h-44.6l-5 22.8h68.8l19.9-87.9C376.8 324 430.1 222.9 393.1 161.4z"></path></svg>
    </iron-iconset-svg>
    <iron-icon id="paypal" class="paypal-icon footer-icon" icon="inline:shape" role="img" aria-label="A shape"></iron-icon>
    <paper-tooltip class="paypal-tooltip" for="paypal" position="right" animation-delay="0">Copy Paypal email to clipboard</paper-tooltip>
    <paper-tooltip class="paypal-tooltip-copied" for="paypal" position="right" animation-delay="0" style="display:none;">Copied!</paper-tooltip>
    </div>

    </div>
    <div class="footer-closer frame footer-piece title-text">By Niye Turner (Last Updated: 2018)</div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'portfolio-app'
      }
    };
  }
  clipboardCopy(value){
    const aux = document.createElement("input");
    aux.setAttribute("value", value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
  menuButtonsHover(menu_button,index,hovering){
    if(hovering){
      menu_button.querySelector('.vaadin-menu-icon').style.color=this.menuColors[index]
    }else{
      menu_button.querySelector('.vaadin-menu-icon').style.color="white"
    }
  }
  menuButtonsHandler(){
    const _this=this;
    let hovering=true;
    const drawer=this.root.querySelector('.drawer');
    if(this.mobile){drawer.style.visibility=""}
    const menu_buttons=this.root.querySelectorAll('.menu-button-getter');
    menu_buttons.forEach((currentValue,index)=>{
      if(!this.mobile){
        currentValue.addEventListener('mouseover',()=>{
          _this.menuButtonsHover(currentValue,index,hovering)
          hovering=!hovering;
        })
        currentValue.addEventListener('mouseout',()=>{
          _this.menuButtonsHover(currentValue,index,hovering);
          hovering=!hovering;
        })
      }
      currentValue.addEventListener('click',()=>{
        drawer.style.visibility!="hidden" ? drawer.close() : false;
        const scroll_class="." + currentValue.getAttribute("id") + "-tag";
        _this.root.querySelector(scroll_class).scrollIntoView();
      })
    })
    this.root.querySelector('.banner-button').addEventListener('click',()=>{
      _this.root.querySelector('.contact-tag').scrollIntoView();
    })
  }
  headerStyle(){
    if(this.mobile){
      const menu_buttons=this.root.querySelectorAll('.menu-button');
      menu_buttons.forEach((currentValue)=>{
        currentValue.style.display="none";
      })
      this.root.querySelector('.drawer-icon').style.display="";
      this.root.querySelectorAll('.menu-spacer').forEach((currentValue)=>{
        currentValue.style.display="none"
      })
    }
    this.menuButtonsHandler();
  }
  footerStyle(){
    const _this=this;
    this.root.querySelector('.email-icon').addEventListener('click',()=>{
      _this.clipboardCopy("niyeturner@gmail.com");
      const gmail_copied=_this.root.querySelector('.gmail-tooltip-copied');
      gmail_copied.style.display="";
      gmail_copied.show();
    })
    this.root.querySelector('.email-icon').addEventListener('mouseout',()=>{
      _this.root.querySelector('.gmail-tooltip-copied').style.display="none";
    })
    this.root.querySelector('.paypal-icon').addEventListener('click',()=>{
      _this.clipboardCopy("cressmc@gmail.com");
      const paypal_copied=_this.root.querySelector('.paypal-tooltip-copied');
      paypal_copied.style.display="";
      paypal_copied.show();
    })
    this.root.querySelector('.paypal-icon').addEventListener('mouseout',()=>{
      _this.root.querySelector('.paypal-tooltip-copied').style.display="none";
    })
  }
  mobileStyles(){
    const banner_button=this.root.querySelector('.banner-button');
    banner_button.style.height="50%";
    banner_button.style.width="33%";
    const skill_cards=this.root.querySelectorAll('.skill-card-wrapper');
    skill_cards.forEach((currentValue)=>{currentValue.style.width="50%"; currentValue.style.height="27vh";})
    const project_cards=this.root.querySelectorAll('.project-card-wrapper');
    project_cards.forEach((currentValue)=>{currentValue.style.width="100%"});
    const contact_inputs=this.root.querySelector('.custom-parent').style.width="80%";
  }
  hardStyles(){
    this.headerStyle()
    this.footerStyle()
    if(window.innerHeight > window.innerWidth){this.mobileStyles()}
  }
  contactSendHandler(){
    const _this=this;
    this.root.querySelector('.contact-send-button').addEventListener('click',function(){
      const inputs=_this.root.querySelectorAll('.custom');
      const name=inputs[0].value;
      const email=inputs[1].value;
      const message=inputs[2].value;
      window.request(`https://niyeturner.com:3000/?name=${name}&email=${email}&message=${message}`)
      return window.location.href="https://niyeturner.com"
      console.log('name:',name,'email:',email,'message:',message)
    })
  }
  load_skills(){
    const _this=this;
    const skills_container=_this.root.querySelector('.skills-content-container');
    window.skills.forEach(function(currentValue,index){
      const card=`
      <div class="skill-card-wrapper frame">
        <div class="card-container frame">
          <div class="skill-card">
            <div class="skill-card-image-container frame">
                  <img class="skill-card-image" src="${currentValue.image}"></img>
                </div>
                <div class="skill-card-title-container">
                <div class="skill-card-title">${currentValue.skill}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      skills_container.innerHTML+=card;
    })
  }
  load_projects(){
    const _this=this;
    const projects_container=_this.root.querySelector('.projects-container');
    window.projects.forEach(function(currentValue,index){
      const card=`
      <a href="${currentValue.link}" target="_blank">
        <div class="project-card-wrapper frame">
            <div class="card-container frame">
              <div id="${currentValue.project}" class="project-image-wrapper" style="background-image:url('${currentValue.image}');background-size:cover;background-size:contain;background-position:center;background-repeat:no-repeat;"></div>
              <paper-tooltip class="" for="${currentValue.project}" position="bottom" animation-delay="0">${currentValue.project}</paper-tooltip>
            </div>
        </div>
      </a>
      `;
      projects_container.innerHTML+=card;
    })
  }
  ready(){
    super.ready()
    this.load_skills()
    this.load_projects()
    this.hardStyles()
    this.contactSendHandler()
  }
  constructor(){
    super()
    this.menuColors=['#A5B1BB','#ffffa1','#3B5998','#918669']
    this.mobile=window.innerHeight > window.innerWidth ? true : false
  }
}


window.customElements.define('portfolio-app', PortfolioApp);
