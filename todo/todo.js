let todoList = [{item : 'Buy Milk', 
                dueDate : '4/10/2023'} , 
                {item : 'Go To College', 
                dueDate : '4/10/2023'}];

displayItems();

function addTodo() {
    //This line selects the HTML element with the ID todo-input using document.querySelector. 
    //This element is typically an input field where users can enter a new todo item.
   let inputElement = document.querySelector('#todo-input');
    //This line gets the value entered by the user in the todo-input field and 
    //stores it in the todoItem variable. 
   let dateElement = document.querySelector('#todo-date');
   
   let todoItem = inputElement.value;
   let todoDate = dateElement.value;
   todoList.push({item : todoItem ,
                  dueDate : todoDate});
   inputElement.value='';
   dateElement.value='';
   displayItems();
}

function displayItems() {
   let containerElement = document.querySelector('.todo-container');

   let newHtml = '';

   for (let i=0;i<todoList.length;i++)
    {
        //let item=todoList[i].item;
        //let dueDate=todoList[i].dueDate;
        let {item , dueDate} = todoList[i];
        newHtml += `
        
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="todoList.splice(${i} ,1);
            displayItems();">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}
