import Card from "./components/Card";
import "./App.css";

/*
imgSrc
imgAlt
name
href
gameImgSrc
gameImgAlt

*/

const App = () => {
  // const cardOwners = [
  //   {
  //     id: 0,
  //     imgSrc: "/david.jpg",
  //     imgAlt: "Foto de David",
  //     name: "David William",
  //     games: [
  //       {
  //         href: "",
  //         gameImgSrc: "",
  //         gameImgAlt: "",
  //       },
  //     ],
  //     gender: "M",
  //   },
  //   {
  //     id: 1,
  //     imgSrc: "/giovanna.jpg",
  //     imgAlt: "Foto de Giovanna",
  //     name: "Giovanna Ks",
  //     games: [
  //       {
  //         href: "",
  //         gameImgSrc: "/dkCover.jpg",
  //         gameImgAlt: "",
  //       },
  //     ],
  //     gender: "F",
  //   },
  // ];

  return (
    <>
      <Card
        imgSrc="/david.jpg"
        imgAlt="Foto de David William"
        name="David William"
        className="M"
        game1Src="/wowCover.jpg"
        game2Src="/dqCover.jpg"
        game3Src="/twCover.jpg"
      />
      <Card
        imgSrc="/giovanna.jpg"
        imgAlt="Foto de Giovanna"
        name="Giovanna Ks"
        className="F"
        game1Src="/dkCover.jpg"
        game2Src="/hlCover.jpg"
        game3Src="/twCover.jpg"
      />
    </>
  );
};

export default App;
