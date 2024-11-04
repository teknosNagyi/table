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
createhtmlelementparentid("tbody", "persontbody", "personthead");
createhtmlelementparentid("tr", "persontr", "persontbody");





for (let i =0;i<valami.length;i++){
    const th = createtablecell('th',valami[i].th,document.getElementById('persontr'))
    th.innerHTML=valami[i].th

    if (valami[i].th==="Kernev"){
        th.colSpan=2
    }
    

    
}


rendertable()




const form = document.getElementById('form')

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
