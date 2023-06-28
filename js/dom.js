const playerArray = [];

function display(cartplayer) {

   const tableBody = document.getElementById('list-items');
   tableBody.innerHTML = '';

   for (let i = 0; i < cartplayer.length; i++) {

      const name = playerArray[i].playerName;

      const tr = document.createElement('tr');

      tr.innerHTML = `
      <th> ${i + 1}</th>
      <td>${name}</td>
      `;
      tableBody.appendChild(tr);

   }




}

function addToCard(element) {
   // console.log(element.parentNode.parentNode.children);

   // console.log(element.parentNode.parentNode.children[0].innerText);

   // console.log(element.parentNode.parentNode.children[1]);

   const playerName = element.parentNode.parentNode.children[0].innerText;

   const playerobj = {
      playerName: playerName
   }

   playerArray.push(playerobj);

   document.getElementById('select-all-list').innerText = playerArray.length

   display(playerArray);
}
