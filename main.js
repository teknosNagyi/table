let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
let valami = [
    {th: 'Veznev'},
    {th: 'Kernev'},
    {th: 'házas'},
    {th: 'Állat'},


]

const table = document.createElement('table')
const tablehead = document.createElement('thead')
const tablebody = document.createElement('tbody')
const tableheadrow = document.createElement('tr')


document.body.appendChild(table)
table.appendChild(tablehead)
table.appendChild(tablebody)
tablehead.appendChild(tableheadrow)



for (let i =0;i<valami.length;i++){
    const th = createtablecell('th',valami[i].th,tableheadrow)
    th.innerHTML=valami[i].th

    if (valami[i]===1){
        th.colSpan=valami[i].colspan
    }
    

    tableheadrow.appendChild(th)
}


rendertable()


function rendertable(){
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



const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname =document.getElementById('lastname')
    const firstname1 =document.getElementById('firstname1')
    const firstname2 =document.getElementById('lastname2')
    const married =document.getElementById('married')
    const pet =document.getElementById('pet')
    const lastmamevalue =lastname.value
    const firstname1value = firstname1.value
    let firstname2value = firstname2.value
    const marriedchecked = married.checked
    const petvalue = pet.value

    
    
})
firstname2value = firstname2value === "" ?

undefined:firstname2value

const newperson={
    lastname : 
}

function createtablecell(htmlElement,inerHTML,ParentElement){
        const asd =document.createElement(htmlElement)
        asd.innerHTML=inerHTML
        ParentElement.appendChild(asd)

        return asd
    

}

