const rankingTable = document.querySelector(".table");
const addUserInput = document.querySelector("#add-user");
const addUserBtn = document.querySelector(".add-user-btn");

console.log(addUserBtn)
addUserBtn.addEventListener("click", e => addUser(e));
addUserInput.addEventListener("keydown", e => handleKeydown(e));
const tableTemplate= (userName, id)=> `<tr>
<th>1</th>
<td>
  <a href="#" title="${userName}">${userName}</a>
</td>
<td class="count">0</td>
<td class="win-count ${id}">0</td>
<td class="lose-count ${id}">0</td>
<td class="rate-count ${id}">0</td>
<td><a class="button is-primary ${id}">승 추가</a></td>
<td><a class="button is-danger ${id}">패 추가</a></td>
</tr>`;

const handleKeydown = (e)=>{
  if(e.keyCode!==13) return 
  return addUser();
}

const addUser = () => {
  const userName = addUserInput.value.trim()
  if(!userName) return alert('아무것도 입력 안했소')
  const getId = rankingTable.querySelectorAll('tr').length+1
  const addedTemplate = tableTemplate(userName, getId)
  rankingTable.insertAdjacentHTML('beforeend',addedTemplate)
  addUserInput.value = '';
};
