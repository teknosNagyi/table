/**
 * 
 * @param {*} htmlElement 
 * @param {*} inerHTML 
 * @param {*} ParentElement 
 * @returns 
 */


function createtablecell(htmlElement,inerHTML,ParentElement){
    const asd =document.createElement(htmlElement) 
    asd.innerHTML=inerHTML
    ParentElement.appendChild(asd)

    return asd


}
function createHtmlElement(tag,id,parentElement){ //függvény ami 3 paramétert vár
    const htmlelement= document.createElement(tag)//létre hoz egy új html elemet 
    htmlelement.id = id //az j elem kap egy id-t hogy azonosítható legyen
    parentElement.appendChild(htmlelement) //az elemet hozzáadja a kesőbb megadott parentelementhez
}

function createhtmlelementparentid(tag,id,parentid){//imsét harom paramétert váró függvény
    const parent= document.getElementById(parentid) //megkeresi a parentid-vel azonositott elemet és eltárolja egy változoban
    if(parent!=undefined){ // ellenrzi hogy a az új vváltozó definiált e
        createHtmlElement(tag,id,parent) // ha definiált a parent akkor meghívja a createhtmlelement
    }
    
}
function renderTableHeader(){
    const th = doc
}

function rendertable(array){ //táblázat megjelenitő függvény
    let tablebody =document.getElementById('persontbody') //tablebody meghívása
    for(const person of array){ //a person objektumon végig megyünk
        const tr = document.createElement('tr') //új sor létrehozása
    
        const lastname = document.createElement('td') // uj cella a lastnamehez
        tablebody.appendChild(tr) //hozza adjuk a sort a tablebodyhoz
        tr.appendChild(lastname)//hozza adjuk a cellat a sorhoz
        lastname.innerHTML = person.lastname // a cella tartalma az objektumban levo lastname erteket atveszi
    
        const firstname = document.createElement('td') //cella az elso firstnamhez 
        tablebody.appendChild(tr)//hozza adjuk a sort a tablebodyhoz
        tr.appendChild(firstname)//hozza adjuk a cellat a sorhoz
        firstname.innerHTML = person.firstname1 // objektumb firstname1 ertek atadasa
        
        
        
        
        tablebody.appendChild(tr)
        
    
        if(person.firstname2===undefined){
            firstname.colSpan = 2 //ha nincs csak 1 keresztnev colspan 2
        }
        else{
            const firstname2 = document.createElement('td')//cella az maosdik firstnamhez 
            firstname2.innerHTML = person.firstname2// objektumb firstname2 ertek atadasa
            tr.appendChild(firstname2)
    
        }
        tr.addEventListener('click',function(e){ //esemenykezelo
            console.log('click')//feljegyzi a kattintatsokat
            
            const select=tablebody.querySelector('.selected')// select osztalyt keresunk
                if(select!=undefined){ //talal
                    select.classList.remove('selected')//leveszi a classt
                    
                }e.currentTarget.classList.add('selected')//ha nincs es arra kattintunk akkor rarakja
    
                
        })
        
        const hazassag = document.createElement('td')//cella az elso hazassaghoz
                tablebody.appendChild(tr)//hozza adjuk a sort a tablebodyhoz
                tr.appendChild(hazassag)//hozza adjuk a cellat a sorhoz
        hazassag.innerHTML=person.married// objektumb hazas e ertek atadasa
        const allat = document.createElement('td')//cella az elso pet
                tablebody.appendChild(tr)//hozza adjuk a sort a tablebodyhoz
                tr.appendChild(allat)//hozza adjuk a cellat a sorhoz
        allat.innerHTML=person.pet// objektumb pet ertek atadasa
        if(hazassag.innerHTML==="true"){//angolrol atirjukk magyarra az erteket
            hazassag.innerHTML="igen" //ha hazas igent irjon
        }else {
            hazassag.innerHTML="nem"// ha nem akkor nemet 
        }
        
    }
}


form.addEventListener('submit',function(e){ //esemenykezelo az urlapra
    e.preventDefault()
    const form = e.currentTarget;
    const lastname =document.getElementById('lastname')//veznev mezo
    const firstname1 =document.getElementById('firstname1')//kernev1 mezo
    const firstname2 =document.getElementById('firstname2')///kernev2 mezo
    const married =document.getElementById('married')//married mezo
    const pet =document.getElementById('pet')//pet mezo
    //ertekek lekerdezese
    const lastmamevalue =lastname.value
    const firstname1value = firstname1.value
    const firstname2value = firstname2.value
    const marriedchecked = married.checked
    const petvalue = pet.value

    
    





const emberek={ //objecktum letrehozasa az urlap adataival
    lastname : lastmamevalue,
    firstname1: firstname1value,
    firstname2: firstname2value,
    married : marriedchecked,
    pet: petvalue
}

if (validatefields(lastname,firstname1,pet)){ //ha minden mezo valid 
    let tablebody =document.getElementById('persontbody')//tbody meghivasa
    array.push(emberek)//az uj embert az arrayhoz adjuk
    console.log(array)//kiirjuk az arrayt a konzolra
    tablebody.innerHTML=""//toroljuj a tablazat testet
    rendertable()//ujramegjelenitjuk a tablazaatot
    form.reset()//urlap torlese
}
})




