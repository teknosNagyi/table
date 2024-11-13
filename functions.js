/**
 * 
 * @param {*} htmlElement 
 * @param {*} inerHTML 
 * @param {*} ParentElement 
 * @returns 
 */


function createtablecell(htmlElement, inerHTML, ParentElement) {
    const asd = document.createElement(htmlElement)
    asd.innerHTML = inerHTML
    ParentElement.appendChild(asd)

    return asd


}
function createHtmlElement(tag, id, parentElement) { //függvény ami 3 paramétert vár
    const htmlelement = document.createElement(tag)//létre hoz egy új html elemet 
    htmlelement.id = id //az j elem kap egy id-t hogy azonosítható legyen
    parentElement.appendChild(htmlelement) //az elemet hozzáadja a kesőbb megadott parentelementhez
}

function createhtmlelementparentid(tag, id, parentid) {//imsét harom paramétert váró függvény
    const parent = document.getElementById(parentid) //megkeresi a parentid-vel azonositott elemet és eltárolja egy változoban
    if (parent != undefined) { // ellenrzi hogy a az új vváltozó definiált e
        createHtmlElement(tag, id, parent) // ha definiált a parent akkor meghívja a createhtmlelement
    }

}

function clearmessage(){
    const errors = document.querySelectorAll('.error')

    for (let i =0; i<errors.length;i++){
        error[i].innerHTML="";
    }
}
function renderTableHeader() {
    const valami = [
        { th: 'Veznev' },
        { th: 'Kernev',colSpan:2 },
        { th: 'házas' },
        { th: 'Állat' },


    ]
    const tableheader = document.getElementById("persontr")
    for (let i = 0; i < valami.length; i++) {
        const th = createtablecell('th', valami[i].th, document.getElementById('persontr'))
        th.innerHTML = valami[i].th

        if (valami[i].colSpan != undefined ) {
            th.colSpan = valami[i].colSpan
        }



    }

}

function rendertable(personarray) { //táblázat megjelenitő függvény
    const tablebody = document.getElementById('persontbody') //tablebody meghívása
    for (const person of personarray) { //a person objektumon végig megyünk
        const tr = document.createElement('tr') //új sor létrehozása

        createtablecell('td', person.lastname, tr) // uj cella a lastnamehez


        const firstname = createtablecell('td', person.firstname1, tr) //cella az elso firstnamhez 



        if (person.firstname2 == undefined) {
            firstname.colSpan = 2 //ha nincs csak 1 keresztnev colspan 2
        }
        else {
            createtablecell('td', person.firstname2, tr)//cella az maosdik firstnamhez 


        }
        tr.addEventListener('click', function (e) { //esemenykezelo
            console.log('click')//feljegyzi a kattintatsokat

            const select = tablebody.querySelector('.selected')// select osztalyt keresunk
            if (select != undefined) { //talal
                select.classList.remove('selected')//leveszi a classt

            } e.currentTarget.classList.add('selected')//ha nincs es arra kattintunk akkor rarakja


        })

        const hazassag = createtablecell("td", person.married, tr)
        const allat = createtablecell("td", person.pet, tr)



        if (person.married == true) {//angolrol atirjukk magyarra az erteket
            hazassag.innerHTML = "igen" //ha hazas igent irjon

        } else {
            hazassag.innerHTML = "nem"// ha nem akkor nemet 

        }
        tablebody.appendChild(tr)//hozza adjuk a sort a tablebodyhoz
    }
}
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
//a clear massage es a validate element mar nem ment ertem a lenyeget nagyjabol 
//hogy roviditene a validatefields fuggvenyt mert nem kene egyesevel leirni a hiba
//uzeneteket de nem sikerul hozza fogni lehet csak keso van mar es nem fog az agyam






