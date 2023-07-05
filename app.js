

function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById("modal");
  
  modal.style.display = "none";
}

function opentyping() {
  var Notification = document.getElementById("Notification");
  var NotificationError = document.getElementById("NotificationError");
  
  Notification.style.display = "block";
  NotificationError.style.display = "block";
}

function closetyping() {
  var Notification = document.getElementById("Notification");
  
  Notification.style.display = "none";
}


