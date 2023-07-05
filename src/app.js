/* eslint-disable */
import "bootstrap";
import "./style.css";

var who = ["my dog", "my sister", "yoda"];
var how = ["ate", "swallowed", "stole"];
var what = ["my homework", "the laptop", " the computer"];
var when = ["yesterday", "last night", "today"];
var where = ["my house", "the pool", "the garage"];

function generateExcuse() {
  let randomwho = Math.floor(Math.random() * who.length);
  let randomhow = Math.floor(Math.random() * how.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);

  return (
    who[randomwho] +
    " " +
    how[randomhow] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen] +
    "."
  );
}

window.onload = function() {
  let excuse = generateExcuse();
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
};
