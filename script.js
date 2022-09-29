function changeText() {
    let arr = ["“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“A room without books is like a body without a soul.”",
        "“You only live once, but if you do it right, once is enough.”"]

    let arr2 = ["― Mae West", "― Frank Zappa", "― Abdo", "― Marcus Tullius Cicero"]

    let number = Math.floor(Math.random() * arr.length);
    document.getElementById('quote').innerHTML = arr[number];
    document.getElementById('quoteAuthor').innerHTML = arr2[number];


}


function copyFunction() {
    const copyText = document.getElementById("quote").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    k2button.innerText = "Text copied";
    textArea.remove();
}
document.getElementById('k2button').addEventListener('click', copyFunction);