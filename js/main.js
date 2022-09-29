const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");
const input3El = document.querySelector("#input3");
const input4El = document.querySelector("#input4");
const input5El = document.querySelector("#input5");
const formEl = document.querySelector("#form");
const listEl = document.querySelector("#collection_list");


formEl.addEventListener("submit" , (a) => {
    a.preventDefault();

    let bigEl = document.createElement("div");
    let faktEl = document.createElement("div");
    let funcsiyaEl = document.createElement("div");
    let img = document.createElement("img");

    
    bigEl.classList.add("item_list");
    img.classList.add("img_list");
    faktEl.classList.add("text_list");
    funcsiyaEl.classList.add("funcsiya_list");

    listEl.appendChild(bigEl);
    bigEl.appendChild(img);
    bigEl.appendChild(faktEl);
    bigEl.appendChild(funcsiyaEl);

    let imgLink = input3El.value;
    
    img.src = imgLink;

    let Nomi = document.createElement("p");
    let Narxi = document.createElement("p");
    let owpaz = document.createElement("p");
    let restaran = document.createElement("p");

    let oqatNomi = input1El.value;
    let oqatNarxi = input2El.value;
    let oqatowpazi = input4El.value;
    let oqatManzili = input5El.value;

    Nomi.innerHTML = "Taom nomi:" + " " +  oqatNomi;
    Narxi.innerHTML = "Taom narxi:"+ " "+  oqatNarxi;
    owpaz.innerHTML = "Taom oshpazi:"+ " " +  oqatowpazi;
    restaran.innerHTML = "Taom manzili:"+ " " +  oqatManzili; 

    faktEl.appendChild(Nomi);
    faktEl.appendChild(Narxi);
    faktEl.appendChild(owpaz);
    faktEl.appendChild(restaran);

    let delet = document.createElement("button");
    let datas = document.createElement("button");
    let good = document.createElement("button");

    funcsiyaEl.appendChild(delet);
    funcsiyaEl.appendChild(datas);
    funcsiyaEl.appendChild(good);
    funcsiyaEl.classList.add("but_collection");

    delet.classList.add("but_one");
    datas.classList.add("but_two");
    good.classList.add("but_three");
    var now=new Date();

    delet.textContent = "Delete";
    datas.textContent = now.getSeconds();
    good.textContent = " Done";


    delet.addEventListener("click", () => {
        bigEl.remove();
    })

    good.addEventListener("click", () => {
        bigEl.style.backgroundColor="#04ef04";
    })

})

