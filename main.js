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


createHtmlElement("table", "persontable", document.body)
createhtmlelementparentid("thead", "personthead", "persontable");
createhtmlelementparentid("tbody", "persontbody", "persontable");
createhtmlelementparentid("tr", "persontr", "personthead");
renderTableHeader()

rendertable(array)

const form = document.getElementById('form')

function validatefields(lastname, firstname, pet) {
    let result = true;
    if (lastname.value === "") {
        const qwe = lastname.parentElement;
        const error = qwe.querySelector(".error");
        error.innerHTML = "kötelező vezetéknév";
        result = false;
    }
    if (firstname.value === "") {
        const qwe2 = firstname.parentElement;
        const error2 = qwe2.querySelector(".error");
        error2.innerHTML = "kötelez keresztnév";
        result = false
    }
    if (pet.value === "") {
        const qwe3 = pet.parentElement;
        const error3 = qwe3.querySelector(".error");
        error3.innerHTML = "Kötelező állat";
        result = false;
    }
    return result
}
form.addEventListener('submit', function (e) { //esemenykezelo az urlapra
    e.preventDefault()
    const form = e.currentTarget;
    const lastname = document.getElementById('lastname')//veznev mezo
    const firstname1 = document.getElementById('firstname1')//kernev1 mezo
    const firstname2 = document.getElementById('firstname2')///kernev2 mezo
    const married = document.getElementById('married')//married mezo
    const pet = document.getElementById('pet')//pet mezo
    //ertekek lekerdezese
    const lastmamevalue = lastname.value
    const firstname1value = firstname1.value
    let firstname2value = firstname2.value
    const marriedchecked = married.checked
    const petvalue = pet.value




    if (firstname2value === "") {
        firstname2value = undefined
    }


    const emberek = { //objecktum letrehozasa az urlap adataival
        lastname: lastmamevalue,
        firstname1: firstname1value,
        firstname2: firstname2value,
        married: marriedchecked,
        pet: petvalue
    }

    if (validatefields(lastname, firstname1, pet)) { //ha minden mezo valid 
        const hibak = document.querySelectorAll('.error');
        for (let i =0 ; i<hibak.length;i++){
            hibak[i].innerHTML="";
        }
        const tablebody = document.getElementById('persontbody')//tbody meghivasa
        array.push(emberek)//az uj embert az arrayhoz adjuk
        console.log(array)//kiirjuk az arrayt a konzolra
        tablebody.innerHTML = ""//toroljuj a tablazat testet
        rendertable(array)//ujramegjelenitjuk a tablazaatot
        form.reset()//urlap torlese
    }
})