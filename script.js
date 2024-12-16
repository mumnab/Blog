function togglePost(postId) {
    const content = document.getElementById(postId + '-content');
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
s