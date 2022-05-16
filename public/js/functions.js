function loadPage(clicked_id){
    let fetchStr = "../html/";
    if(clicked_id == "homeButton"){
        fetchStr += "homePage.html";
    }
    else if(clicked_id == "loginButton"){
        fetchStr += "loginPage.html";
    }
    else if(clicked_id == "signupButton"){
        fetchStr += "signupPage.html";
    }
    fetch(fetchStr)
    .then(function(response){
        return response.text();
    })
    .then(function(html){
        document.getElementById("renderPage").innerHTML = html;
    })
}

// document.getElementById("asda")