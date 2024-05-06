import Footprints from "./images/Footprints.jpg";
import Taal from "./images/Taal.jpg";
import Renaissance from "./images/Renaissance.jpg";
import Euphony from "./images/Euphony.jpeg";
import Goonj from "./images/Goonj.jpg";
import Horizon from "./images/Horizon.jpeg";
import Vecell from "./images/Vecell.jpeg";
import Verve from "./images/Verve.jpeg"
import { Link } from "react-router-dom";
import { Card } from "../index";

function CulturalSocieties() {
  return (
    <div className="h-fit">
      <div className="w-full h-16 md:flex hidden mb-5 md:mb-10 flex-wrap sticky top-0 bg-transparent"></div>
      <div className="md:m-10 px-5 md:mt-0 mt-5 md:px-10 grid grid-cols-2 justify-center bg-transparent">
        <Card
          Label="TAAL"
          Description="Dance Society of AKGEC"
          ImgLabel={Taal}
          Path="/Taal"
        />

        <Card
          Label="FOOTPRINTS"
          Description="A place where raw creativity takes a giant leap and leaves its
          impressions across the horizons."
          ImgLabel={Footprints}
          Path="/Footprints"
        />

        <Card
          Label="RENAISSANCE"
          Description='Ethical cum Socio-Cultural Society - AKGEC
          "Education is the only lane to gleam up and enlighten the
            world"'
          ImgLabel={Renaissance}
          Path="/Renaissance"
        />

        <Card
          Label="EUPHONY"
          Description="Spreading Happiness with Music!"
          ImgLabel={Euphony}
          Path="/Euphony"
        />

        <Card
          Label="GOONJ"
          Description="Dramatics Society | AKGEC - Ghaziabad | Theatre Enthusiasts
          Theatre 🎥 | Nukkad 🎭| Standup 🎙| Poetry ✒️ | Mimicry
          🎤|Designing💻"
          ImgLabel={Goonj}
          Path="/Goonj"
        />

        <Card
          Label="HORIZON"
          Description="Incubates Leaders, Orators, Writers and Multi-Dimensional
          Individuals. Fill out the form below to register for our
          recruitment drive!"
          ImgLabel={Horizon}
          Path="/Horizon"
        />
        
        <Card
          Label="VE-CELL"
          Description="Existence is Co-existence."
          ImgLabel={Vecell}
          Path="/Vecell"
        />

<Card
          Label="V-VERVE
          "
          Description='𝓣𝓮𝓪𝓶 𝓥 -𝓥𝓮𝓻𝓿𝓮 - "We speak the language of fashion."'
          ImgLabel={Verve}
          Path="/Verve"
        />
      </div>
    </div>
  );
}

export default CulturalSocieties;
