import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

function Home() {
  const cards = [
    {
      title: "Card 1",
      text: "Contenido para esta tarjeta.",
      image: "https://dummyimage.com/600x400/b0b0b0/ffffff.jpg"
    },
    {
      title: "Card 2",
      text: "Otra tarjeta con otro texto.",
      image: "https://dummyimage.com/600x400/b0b0b0/ffffff.jpg"
    },
    {
      title: "Card 3",
      text: "Más contenido aquí.",
      image: "https://dummyimage.com/600x400/b0b0b0/ffffff.jpg"
    },
    {
      title: "Card 4",
      text: "Y otra tarjeta más.",
      image: "https://dummyimage.com/600x400/b0b0b0/ffffff.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Jumbotron />
        <div className="row">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
