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

createHtmlElement("table","persontable",document.body)
createhtmlelementparentid("thead", "personthead", "persontable");
createhtmlelementparentid("tablebody", "persontbody", "personthead");
createhtmlelementparentid("tr", "persontr", "persontbody");





for (let i =0;i<valami.length;i++){
    const th = createtablecell('th',valami[i].th,document.getElementById('persontr'))
    th.innerHTML=valami[i].th

    if (valami[i].th==="Kernev"){
        th.colSpan=2
    }
    

    
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
    array.push(emberek)
    console.log(array)
    tablebody.innerHTML=""
    rendertable()
    form.reset()
}
})
function validatefields(lastname,firstname,pet){
    let result = true;
    if (lastname.value===""){
        const qwe = lastname.parentElement;
        const error = qwe.querySelector(".error");
        error.innerHTML="kötelező vezetéknév";
        result = false;
    }
    if (firstname.value ===""){
        const qwe2=firstname.parentElement;
        const error2=qwe2.querySelector(".error");
        error2.innerHTML = "kötelez keresztnév";
        result = false
    }
    if (pet.value ===""){
        const qwe3 =pet.parentElement;
        const error3 = qwe3.querySelector(".error");
        error3.innerHTML="Kötelező állat";
        result= false;
    }
    return result
}
