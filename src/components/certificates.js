import { certificates } from "../data/data.js";
import Component from "./Mount.js";

class Certificates extends Component{
    render(){
        const certificateContainer=document.createElement("div");
        const certificateHeading=document.createElement("h1");
        const certificateList=document.createElement("ul");

        certificateContainer.classList.add("certificateContainer");
        certificateContainer.id="certificates";
        certificateHeading.classList.add("certificateHeading")
        certificateList.classList.add("certificateList");
        
        certificateHeading.innerText=certificates.certificateHeading;

        for(let i=0;i<certificates.certificates.length;i++){
            const certificate=document.createElement("li");
            certificate.innerText=certificates.certificates[i];
            certificateList.appendChild(certificate);
        }

        certificateContainer.appendChild(certificateHeading);
        certificateContainer.appendChild(certificateList);

        return certificateContainer;
    }
}

export{Certificates};