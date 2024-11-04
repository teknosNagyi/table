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