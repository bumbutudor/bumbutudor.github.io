	var names = ["Bumbu Tudor",
  "Bubo mud rut",
  "Bub drum out",
  "Dumb but our",
  "Doubt rub mu",
  "Drub out bum",
  "Dub turbo um",
  "Bud bum tour",
  "Bum but dour",
  "Rub but do mu"];

var seed = 0;
function random() {
    var x = Math.sin(seed++) * 10;
    return x - Math.floor(x);
}

var n = random();


function anagram(obj){
 n = (n + 1) % 10;
 obj.innerHTML = names[n];
 obj.style.visibility = "hidden";
 obj.style.visibility = "visible";

}
