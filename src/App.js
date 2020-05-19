import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/menutop/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="changeHTML-JSX">
      <TopMenu anh='img/01.jpg'></TopMenu>
      <Header></Header>

      <div className="container">
        <div className="row pt-5  ">
          <Content tieude="HELLO PHONG" anh="img/01.jpg"></Content>
          {/* vitri1="order-lg-2" */}
          <Content tieude="HELLO PHONG" anh="img/02.jpg" tridan='sadadajhjsd'></Content>
          <Content tieude="HELLO PHUONG" anh="img/03.jpg" tridan=" day  trich dan"></Content>
          <Content tieude="HELLO PHONG" anh="img/01.jpg"></Content>
          <Content tieude="HELLO PHONG" anh="img/02.jpg" tridan='sadadajhjsd'></Content>
          <Content tieude="HELLO PHUONG" anh="img/03.jpg" tridan=" day  trich dan"></Content>
          <Content tieude="HELLO PHONG" anh="img/01.jpg"></Content>
          <Content tieude="HELLO PHONG" anh="img/02.jpg" tridan='sadadajhjsd'></Content>
          <Content tieude="HELLO PHUONG" anh="img/03.jpg" tridan=" day  trich dan"></Content>
        </div>

      </div >
      <div className='chieurong'>
        <Footer></Footer>
      </div>


    </div>
  );
}

export default App;
