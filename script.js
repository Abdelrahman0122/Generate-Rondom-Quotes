/*
**  This is The js file
**  for generate random quotes
**  challange Created by 
**  Abdelrahman Elsayed
*/


/* THis function is Responsible for generating Random Quotes
**  by put the quots in array
**  and a random function that generate random number between 0 and arr.length
**  and we  print the otput inta a div
*/
function changeText() {
    let arr = ["“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“A room without books is like a body without a soul.”",
        "“You only live once, but if you do it right, once is enough.”",
    "“A day without sunshine is like, you know, night.”",
    "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”",
        "“Never put off till tomorrow what may be done day after tomorrow just as well.”",
      "“It is never too late to be what you might have been.”"]

    let arr2 = ["― Mae West", "― Frank Zappa", "― Abdo", "― Marcus Tullius Cicero","― George Eliot", "― Mark Twain", "― George R.R. Martin, A Dance with Dragons","― Steve Martin"]

    let number = Math.floor(Math.random() * arr.length);
    document.getElementById('quote').innerHTML = arr[number];
    document.getElementById('quoteAuthor').innerHTML = arr2[number];


}
// This function is Resposible for copy the text that we Generated to the user clipboard

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