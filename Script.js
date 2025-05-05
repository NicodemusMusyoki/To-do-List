function showContent(contentId){
    document.getElementById(contentId).style.display="block";
    document.querySelector('.content:first-child').style.display="none";
}

function hideContent(contentId){
    document.getElementById(contentId).style.display="none";
    document.querySelector('.content:first-child').style.display="block">
}