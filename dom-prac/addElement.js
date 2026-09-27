const div = document.createElement('div')
    console.log(div);
    div.className = "div1"
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "generated title");
    div.style.backgroundColor = "green";
    div.style.padding = "12px";
    // div.innerText = "Hello! How are you?";
    const addText = document.createTextNode(`Hello! How are you?`);
    div.appendChild(addText)

    document.body.appendChild(div)
 
    const section = document.createElement('section');
    section.className = 'sec1'
    section.id = parseInt(Math.random()*10+1);
    section.appendChild(document.createTextNode(`Hello! section ${section.id}`));
    div.appendChild(section);