const rightdiv=(image)=>{
    let div =document.createElement("div")
    div.className ="ClassR"
    div.innerHTML =` <img src="/Picture/${image}" alt="Stray dog">`
    return div
}
export{rightdiv}