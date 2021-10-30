//https://focused-bhabha-9805b8.netlify.app/haith/index.html


import { useState } from "react"

import logo from './logo.svg';
import './App.css';

import Form from "./form/Form"
import Loading from "./Loading"
import Navbar from "./components/Navbar"
import Slideshow from "./components/Slideshow"
import AboutUs from "./components/AboutUs"

export default function App() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <AboutUs />
    </> 
  )
}
