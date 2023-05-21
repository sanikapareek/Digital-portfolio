import { internship } from "../data/data.js";
import Component from "./Mount.js";

class Internship extends Component{
    render(){
        const internshipContainer=document.createElement("div");
        const internshipHeading=document.createElement("h1");
        const internshipTimeline=document.createElement("section");
        const internshipTimelineContainer=document.createElement("div");
        const internshipMainTimeline=document.createElement("div");
        const internshipsContainer=document.createElement("div")

       internshipTimelineContainer.classList.add("container")
       internshipTimelineContainer.classList.add("py-5")

       internshipMainTimeline.classList.add("main-timeline")
        
        internshipContainer.classList.add("internshipContainer");
        internshipContainer.id="internship"
        internshipsContainer.classList.add("internshipsContainer")
        
        internshipContainer.appendChild(internshipHeading);
        internshipContainer.appendChild(internshipsContainer);
        internshipHeading.innerText=internship.internshipHeading;

        for(let i=1;i<=internship.internships.length;i++){
            const timeline=document.createElement("div")
            const internshipDescriptionCard=document.createElement("div");
            const internshipDescription=document.createElement("div")
            
            if(i%2==0){
                timeline.classList.add("timeline")
                timeline.classList.add("right")
                console.log("right");
            }else{
                timeline.classList.add("timeline")
                timeline.classList.add("left")
                console.log("left")
            }
            internshipDescriptionCard.classList.add("card")
            internshipDescription.classList.add("card-body")
            internshipDescription.classList.add("p-4")
            internshipDescription.innerHTML=`<h2 class="internshipYear">${internship.internships[i-1].year}</h2>
                                             <img src=${internship.internships[i-1].companyLogo} height="40px"> 
                                             <h2>${internship.internships[i-1].companyName}</h2>
                                             <h3>${internship.internships[i-1].Position}</h3>
                                             <p>${internship.internships[i-1].duration}</p>`
                                  
                                            internshipMainTimeline.appendChild(timeline)
                                            timeline.appendChild(internshipDescriptionCard)
                                            internshipDescriptionCard.appendChild(internshipDescription)
        }
        internshipsContainer.appendChild(internshipTimeline)
        internshipTimeline.appendChild(internshipTimelineContainer)
        internshipTimelineContainer.appendChild(internshipMainTimeline)
      
        return internshipContainer;  
    }
}
export {Internship};