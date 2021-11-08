async function getData(url){

    let res = await fetch(url)
    let data = await res.json()

    console.log(data);

    return data
}

function append(data, visible){

    data.categories.forEach(({strCategory,strCategoryThumb,strCategoryDescription})=> {


        let div = document.createElement("div");

        let p =document.createElement("h3");
        p.innerText=strCategory

        let img= document.createElement("img");
        img.src =strCategoryThumb

        let p1 =document.createElement("p");
        p1.innerText=strCategoryDescription

        let p2 =document.createElement("h4");
        p2.innerText="Price : INR 100/-"


        let btn=document.createElement("button")
        btn.innerHTML="Add to cart"

        div.append(p,img,p1,p2,btn)
        visible.append(div);


    })
}

export {getData, append}