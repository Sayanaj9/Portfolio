import { useContext } from 'react'
import "../styles/experience.scss"
import { Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import {AppContext} from "../context/appContext";
export default function Experience() {
const {experiences} = useContext(AppContext)
    
const slides = [];
for (let i = 0; i < experiences.length; i += 2) {
  slides.push(experiences.slice(i, i + 2));
}

  const isLargeScreen = useMediaQuery({ minWidth: 1920 });
  return (
    <div className="projects animated">
    {isLargeScreen? <Carousel controls indicators={false} interval={null} className="my-carousel">
      {slides.map((pair, i) => (
        <Carousel.Item key={i}>
          <div className="pair">
            {pair.map((x, j) => (
              <div className="exp-card" key={j}>
                <div className="exp-card-content">
                  <h3>{x.title}</h3>
                  <p className="mb-1">{x.company}</p>
                  <small className="text-light opacity-75">{x.dates}</small>
                  <ul className="mt-3">{x.bullets?.map((b,k)=><li key={k}>{b}</li>)}</ul>
                  <span className="tech_stack">Tech stack :</span>
                  <div className="tech_stack-items">{x.tech_stack?.map((t,k)=><span key={k}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>:
    <Carousel controls indicators={false} interval={null} className="my-carousel">
      {experiences.map((x, i) => (
        <Carousel.Item key={i} className="h-100">
          <div className="d-flex justify-content-center align-items-stretch h-100 contents">
            <div className="exp-card w-100" style={{maxWidth: 780}}>
                  <div className="exp-card-content">
                        <h3>{x.title}</h3>
                        <p className="mb-1">{x.company}</p>
                        <small className="text-light opacity-75">{x.dates}</small>
                        <ul className="mt-3">
                          {x.bullets?.map((b,j)=><li key={j}>{b}</li>)}
                        </ul>
                        <span className='tech_stack'>Tech stack : </span>
                        <div className="tech_stack-items">
                            {x?.tech_stack?.map((tech,i)=>
                              <span key={i}>{tech}</span>)} 
                        </div>                 
                      </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>}
  </div>
  )
}
// px-3 