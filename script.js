  window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementById("closeModal");

    // Show modal automatically
    modal.showModal();

    // Close modal when button is clicked
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });