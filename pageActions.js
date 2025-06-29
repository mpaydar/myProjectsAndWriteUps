const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




const a= document.getElementsByClassName('list-item-x');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    const item_list= document.querySelector('.list-item-x');
    if item_list.attributes.display === None {
        
    }

  });
}