import { capstone } from "../data/data.js";
import Component from "./Mount.js";

class Capstone extends Component{
    render(){
        const capstoneContainer=document.createElement("div");
        const capstoneHeading=document.createElement("h1");
        const capstoneTitle=document.createElement("p")
        const capstoneList=document.createElement("ul");

        capstoneContainer.classList.add("capstoneContainer");
        capstoneContainer.id="capstones";
        capstoneHeading.classList.add("capstoneHeading")
        capstoneList.classList.add("capstoneList");
        
        capstoneHeading.innerText=capstone.capstoneHeading;

        capstoneTitle.innerHTML=`<strong> Paper Title: </strong> ${capstone.paperTitle} <br> <br> <strong>Contributions:</strong>`;

        for(let i=0;i<capstone.contributions.length;i++){
            const capstoneLi=document.createElement("li");
            capstoneLi.innerText=capstone.contributions[i];
            capstoneList.appendChild(capstoneLi);
        }

        capstoneContainer.appendChild(capstoneHeading);
        capstoneContainer.appendChild(capstoneTitle)
        capstoneContainer.appendChild(capstoneList);

        return capstoneContainer;
    }
}

export{Capstone};