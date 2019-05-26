/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function stringfyArr(a) {
  let str = '';
  for (let i = 0; i < a.length; i++) {
    str = str + a[i] + '\n';
  }

  return str;
}

/**
 * Controlador principal que é executado quando todos os componentes da página terminarem de carregar.
 */
window.onload = function () {


  let listText = document.getElementById("list");
  let shufflerButton = document.getElementById("shuffler_btn");
  let shuffledListText = document.getElementById("shuffled_list_text");
  // let groupByNumber = document.getElementById("group_by");

  // Ouve os cliques no botão de embaralhar
  shufflerButton.addEventListener("click", () => {

    // Pego a entrada do usuário em um arr com as strings de cada item
    const list = listText.value.split('\n');

    // Embaralho a entrada do usuário
    const shufledList = shuffle(list);

    // limpo possível resultado anterior
    shuffledListText.innerHTML = '<h5><strong>Resultado:</strong></h5>'

    // Imprimo-os
    shufledList.map(
      item => shuffledListText.innerHTML = shuffledListText.innerHTML + `<li class="list-group-item">${item}</li>`
    );

  });

}