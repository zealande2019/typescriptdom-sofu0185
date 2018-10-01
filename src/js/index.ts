let listeUsund : string[] = ["Matadormix","Øl","Sodavand"];
let listeSund : string[] = ["CahewNødder", "æbler",]


document.getElementById('submitBtn').addEventListener("click",addVare);
document.getElementById('unhideBtn').addEventListener("click",noHide);

let elementsLi = document.getElementById('liste').addEventListener('click',function(e){
    let clikElement = (<HTMLInputElement>e.target);

    if(e.target && (clikElement).nodeName == "LI")
      {
          console.log(clikElement.id + " was clicked")
          clikElement.setAttribute('hidden','true');
      }
     
});;

//kalder funktion som looper igennem array af usunde vare
CreateUsundtLiElementer();

let elementInput = document.getElementById('nyvare');

 function noHide() : void {
     let liElements = document.getElementById('liste').children;

     for(let i=0;liElements.length;i++)
     {
         let eh = liElements[i].getAttribute('hidden'); 
         if( eh == 'true')
         {
            // (<HTMLLIElement>liElements[i]).style.visibility = 'visible';  
             liElements[i].removeAttribute('hidden');
         }      
     }
 }
 
 function addVare(e:Event): void{

    let eventtype = e.type;
     let inputText = (<HTMLInputElement>elementInput).value;

     let listeusund = document.getElementById('listeUsund');
 
     let newLi = document.createElement('li');
     let newText = document.createTextNode(inputText)
     newLi.setAttribute('class','usundt');
     newLi.appendChild(newText);
     listeusund.appendChild(newLi);

    }

    
    
    function CreateUsundtLiElementer() : void
    {
    let listeusund = document.getElementById('listeUsund');

     for (let i = 0; i < listeUsund.length; i++) {
         
         let tekst : string = listeUsund[i];
         
         let newLiElement : HTMLLIElement = CreateLiElement(tekst,"usundt",i);
         listeusund.appendChild(newLiElement);
     }   
    }

    //funktion som returnerer et HTMLLIELEMENT og som tager tre parametre
    //
    function CreateLiElement(tekst:string, classAttribut:string, id: number) : HTMLLIElement
    {
        
        let newLiElement = document.createElement('li');
        let newText = document.createTextNode(tekst)
        
        newLiElement.setAttribute('class',classAttribut);
        newLiElement.setAttribute('id',id.toString());
        
        newLiElement.appendChild(newText);

        return newLiElement;
    }