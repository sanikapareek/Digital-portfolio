import { project } from "../data/data.js";
import Component from "./Mount.js";

class Project extends Component{

    render(){
        const projectContainer=document.createElement("div");
        const projectHeading=document.createElement("h1");
        const projectCards=document.createElement("div");
        const projectCardInner=document.createElement("div")
        const previous=document.createElement("a");
        const next=document.createElement("a");

        projectContainer.classList.add("projectContainer");
        projectContainer.id="project";
        projectCards.classList.add("carousel")
        projectCards.classList.add("carousel-project")
        projectCards.classList.add("slide");
        projectCards.dataset.interval='false';
        projectCards.id="carouselExampleControls";
        projectCardInner.classList.add("carousel-inner");
        projectCardInner.classList.add("carousel-inner-project");
        previous.classList.add("carousel-control-prev");
        previous.href="#carouselExampleControls";
        previous.role="button";
        previous.dataset.slide="prev";
        next.classList.add("carousel-control-next")
        next.href="#carouselExampleControls";
        next.role="button";
        next.dataset.slide="next";
        
        
        
        projectHeading.innerText=project.projectHeading;
        previous.innerHTML=`<span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>`;
        next.innerHTML=` <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>`;

        projectContainer.appendChild(projectHeading);
        projectContainer.appendChild(projectCards);
        projectCards.appendChild(projectCardInner);
        projectCards.appendChild(previous)
        projectCards.appendChild(next)


        return projectContainer;
    }
}
export{Project};