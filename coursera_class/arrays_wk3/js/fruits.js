var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

function getName() {
  var name = prompt("What is your name?")
  if (name.length != 0){
    if (name == "Rumplestiltskin")
      document.write("What a beautiful name");
    else
      document.write("Hello " +  name);
  }
  else
    document.write("Feeling shy?");
}
