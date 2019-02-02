// TODO: write your code here

const moveRedWagon = () => {
  const activeCell = document.querySelector("#player1_race .active");
  const nextCell = activeCell.nextElementSibling;
  const lastCell = document.querySelector("#player1_race .finish");

  if (nextCell) {
    nextCell.classList.add("active");
    activeCell.classList.remove("active");
  } else {
    alert("George sucks, Janna wins");
  }
};

const moveBlueWagon = () => {
  const activeCell = document.querySelector("#player2_race .active");
  const nextCell = activeCell.nextElementSibling;
  const lastCell = document.querySelector("#player2_race .finish");

  if (nextCell) {
    activeCell.classList.remove("active");
    nextCell.classList.add("active");
  } else {
    alert("Janna sucks, George wins");
  }
};

const handleKey = (event) => {
  const thisKey = event.currentTarget;
  if (event.keyCode === 81) moveRedWagon();
  if (event.keyCode === 80) moveBlueWagon();


};


document.addEventListener("keyup", handleKey);
