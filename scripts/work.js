//localStorage.clear();

document.getElementById("searchButton").addEventListener("click",function(){
    let Searchterm = document.getElementById("searchTerm").value;
    let Newsearch = document.createElement("li");
    Newsearch.textContent = Searchterm;
    document.getElementById("searches").appendChild(Newsearch);
    localStorage.setItem(localStorage.length,Searchterm)
    console.clear();
    for(i=0;i<localStorage.length;i++)
    {
        console.log(localStorage.getItem(i))
    }
    
})
