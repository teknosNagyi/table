function createtablecell(htmlElement,inerHTML,ParentElement){
    const asd =document.createElement(htmlElement)
    asd.innerHTML=inerHTML
    ParentElement.appendChild(asd)

    return asd


}
function createHtmlElement(tag,id,parentElement){
    const htmlelement= document.createElement(tag)
    htmlelement.id = id
    parentElement.appendChild(htmlelement)
}

function createhtmlelementparentid(tag,id,parentid){
    const parent= document.getElementById(parentid)
    if(parent!=undefined){
        createHtmlElement(tag,id,parent)
    }
    
}


function rendertable(){
    let tablebody =document.getElementById('persontbody')
    for(const person of array){
        const tr = document.createElement('tr')
    
        const lastname = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(lastname)
        lastname.innerHTML = person.lastname
    
        const firstname = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(firstname)
        firstname.innerHTML = person.firstname1
        
        
        
        
        tablebody.appendChild(tr)
        
    
        if(person.firstname2===undefined){
            firstname.colSpan = 2
        }
        else{
            const firstname2 = document.createElement('td')
            firstname2.innerHTML = person.firstname2
            tr.appendChild(firstname2)
    
        }
        tr.addEventListener('click',function(e){
            console.log('click')
            
            const select=tablebody.querySelector('.selected')
                if(select!=undefined){
                    select.classList.remove('selected')
                    
                }e.currentTarget.classList.add('selected')
    
                
        })
        
        const hazassag = document.createElement('td')
                tablebody.appendChild(tr)
                tr.appendChild(hazassag)
        hazassag.innerHTML=person.married
        const allat = document.createElement('td')
                tablebody.appendChild(tr)
                tr.appendChild(allat)
        allat.innerHTML=person.pet
        if(hazassag.innerHTML==="true"){
            hazassag.innerHTML="igen"
        }else {
            hazassag.innerHTML="nem"
        }
        
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname =document.getElementById('lastname')
    const firstname1 =document.getElementById('firstname1')
    const firstname2 =document.getElementById('firstname2')
    const married =document.getElementById('married')
    const pet =document.getElementById('pet')
    const lastmamevalue =lastname.value
    const firstname1value = firstname1.value
    const firstname2value = firstname2.value
    const marriedchecked = married.checked
    const petvalue = pet.value

    
    





const emberek={
    lastname : lastmamevalue,
    firstname1: firstname1value,
    firstname2: firstname2value,
    married : marriedchecked,
    pet: petvalue
}

if (validatefields(lastname,firstname1,pet)){
    let tablebody =document.getElementById('persontbody')
    array.push(emberek)
    console.log(array)
    tablebody.innerHTML=""
    rendertable()
    form.reset()
}
})




