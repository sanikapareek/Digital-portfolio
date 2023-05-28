import Component from "./Mount.js";

class Cards extends Component{
    render(data,cardFor,i){

        const cardContainer=document.createElement("div");
        const cardHeader=document.createElement("div");
        const cardHeading=document.createElement("h2");
        const contentDiv=document.createElement("div")
        const imgDiv=document.createElement("div")
        const cardPara=document.createElement("p");


        
        switch(cardFor.toLowerCase()){
            case "education":{
                cardContainer.classList.add(`${cardFor.toLowerCase()}Card`);
                cardHeader.classList.add(`${cardFor.toLowerCase()}CardHeader`);
                cardHeading.innerText=data.educationHeading;
                cardPara.innerHTML=
                    `<strong>${data.institutionHeading}</strong>: ${data.institutionName}<br>
                    <strong>${data.streamHeading}</strong>: ${data.streamType}<br>
                    <strong>${data.marksType}</strong>: ${data.marks}<br>
                    <strong>${data.yearHeading}</strong>: ${data.year}<br>
                    `;
                cardContainer.appendChild(cardHeader);
                cardHeader.appendChild(cardHeading); 
                cardContainer.appendChild(cardPara);
            
            }
            break;

            case "project":{
                cardContainer.classList.add("carousel-item");
                cardContainer.classList.add("carousel-item-project");
                contentDiv.classList.add("contentDiv")
                imgDiv.classList.add("imgDiv")
                console.log(i)
                if(i===0){
                    console.log("active")
                    cardContainer.classList.add("active");
                }
                
                cardPara.classList.add("projectPara")
                cardHeading.innerHTML=`<br>`+data.projectName;
                cardPara.innerHTML=`<br>`+`<strong>${data.skillHeading}</strong>: `;
                for(let i=0;i<data.skills.length;i++){
                    if((data.skills.length)-i-1===0){
                        cardPara.innerHTML=cardPara.innerHTML+`${data.skills[i]} <br>`;
                    }else{
                        cardPara.innerHTML=cardPara.innerHTML+`${data.skills[i]}, `
                    }
                    
                }  
                if(data.skillHeading==="Type"){
                    cardPara.innerHTML=cardPara.innerHTML+`<strong>Paper Title: </strong>${data.description}  <br><br>`;
                }else{
                    cardPara.innerHTML=cardPara.innerHTML+`<strong>Problem Statement: </strong>${data.description}  <br><br>`;
                }
                cardContainer.appendChild(cardHeading)
                cardContainer.appendChild(cardPara)      
            }
            break;
            default: break;
        }
            
        

        return cardContainer;
        
    }
}

export {Cards};