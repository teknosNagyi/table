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
    const tableheader = document.getElementById("persontr")
    for (let i =0;i<valami.length;i++){
        const th = createtablecell('th',valami[i].th,document.getElementById('persontr'))
        th.innerHTML=valami[i].th
    
        if (valami[i].th==="Kernev"){
            th.colSpan=2
        }
        
    
        
    }
}

function rendertable(){ //táblázat megjelenitő függvény
    let tablebody =document.getElementById('persontbody') //tablebody meghívása
    for(const person of array){ //a person objektumon végig megyünk
        const tr = document.createElement('tr') //új sor létrehozása
    
        const lastname = createtablecell('td',person.lastname,tr) // uj cella a lastnamehez
        
    
        const firstname = createtablecell('td',person.firstname1,tr) //cella az elso firstnamhez 
        
        
    
        if(person.firstname2== undefined){
            firstname.colSpan = 2 //ha nincs csak 1 keresztnev colspan 2
        }
        else{
            const firstname2 = createtablecell('td',person.firstname2,tr)//cella az maosdik firstnamhez 
            
    
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
    let firstname2value = firstname2.value
    const marriedchecked = married.checked
    const petvalue = pet.value

    
    


if (firstname2value===""){
    firstname2value = undefined
}


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




