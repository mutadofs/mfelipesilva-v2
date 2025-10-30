import imagePersonspace from "../../public/images/image-personspace.svg";
import imageWoolshoes from "../../public/images/image-woolshoes.svg";
import imageCV9 from "../../public/images/image-cv9.svg";
import imageLetsTravel from "../../public/images/image-travel.svg";
import imageCoffeYou from "../../public/images/image-coffe&you.svg";
import imageEsteban from "../../public/images/image-esteban.svg";

export const projects = [
  {
    id: "1",
    title: "Personspace",
    descriptionKey: "projects.description.personspace",
    url: "https://personspace.com.br",
    github: "https://github.com/mutadofs/personspace",
    imageUrl: imagePersonspace,
    technologies: ["Vite", "Typescript", "GraphQL"],
  },
  {
    id: "2",
    title: "Woolshoes",
    descriptionKey: "projects.description.woolshoes",
    url: "https://woolshoes.vercel.app/",
    github: "https://github.com/MFelipeSilva/Woolshoes",
    imageUrl: imageWoolshoes,
    technologies: ["Nextjs", "Typescript", "Node.js"],
  },

  {
    id: "3",
    title: "Let's Travel",
    descriptionKey: "projects.description.letsTravel",
    url: "https://lets-travel-two.vercel.app/",
    github: "https://github.com/MFelipeSilva/lets-travel",
    imageUrl: imageLetsTravel,
    technologies: ["React", "Styled Components", "Context API"],
  },
  {
    id: "4",
    title: "CV9 Projects",
    descriptionKey: "projects.description.cv9",
    url: "https://cv9-projects.vercel.app/",
    github: "https://github.com/mutadofs/cv9-projects",
    imageUrl: imageCV9,
    technologies: ["React", "CSS & Sass", "Javascript"],
  },
  {
    id: "5",
    title: "Esteban Lakatos",
    descriptionKey: "projects.description.esteban",
    url: "https://esteban-advocacy.vercel.app/",
    github: "https://github.com/MFelipeSilva/landing-page-advocacy",
    imageUrl: imageEsteban,
    technologies: ["React", "Styled Components", "Javascript"],
  },
  {
    id: "6",
    title: "Coffe & You",
    descriptionKey: "projects.description.coffeeYou",
    url: "https://coffee-and-you.vercel.app/",
    github: "https://github.com/mutadofs/coffee-and-you",
    imageUrl: imageCoffeYou,
    technologies: ["React", "CSS", "Javascript"],
  },
];
