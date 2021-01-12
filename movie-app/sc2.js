const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const titleK =    ["viktor" , "Bild" , "Tit"];
const bildK =     ["LOL" , "Bild" , "./10Hours10Projects.png"];
const OverviewK = ["viktor ist gut" , "Test2" , "./10Hours10Projects.png"];
const carK =      ["" , "j" , "./10Hours10Projects.png"];

var par = getUrl(window.location.href);

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    var VardecodeUrl = decodeUrl();
    //if(VardecodeUrl == "3"){
    /*
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
*/
    showMovies();
    
//}
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    var count = -1;
    const VardecodeUrl = decodeUrl();
    const ga = ["", "" ,"" ,"" ,"","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,];
     
    ga.push("");
    ga.forEach((ga) => {
        
        count += 1;
        console.log(count);
        //const { poster_path, title, vote_average, overview } = movie;
        
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        if(count < 4){
        
        movieEl.innerHTML = `<b>
        <a href="?${count + 1}">
            <img
                src="${bildK[count]}"
                alt="${titleK[count]}"
            />
            <div class="movie-info">
                <h3>${titleK[count] }</h3>
                
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${OverviewK[count]}
                ${VardecodeUrl[1]}
                
            </div>
            </a>
            </b>
        `;
        
        main.appendChild(movieEl);
        console.log ("hallo")
        }else{
            return false;
        }
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        //getMovies(SEARCHAPI + searchTerm);
        console.log(search.value);
        /*
        ###########################################################################
        #            Get metohn                                                   #
        #window.location.href = window.location.href + "&search=" + search.value; #
        ###########################################################################
        */
        search.value = "";
    }
});

function getUrl() {
    var getParams = function (url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };
  }
function decodeUrl() {  
    var turn = {};
    var ulrs = window.location.href.replace("%20", " ");
    console.log(window.location.href)
    turn = ulrs.split("?");
    console.log(turn);
    if(turn[1] == null || turn[1] == ""){return "";}
    return turn;
}
function decodeVar() {
    var turn = {};
    var url ="" ;
}

