const stars = document.querySelectorAll(".star-container");

function updateStars(rating) {
  stars.forEach(star => {
    const unfilledStar = star.querySelector(".bi-star");
    const filledStar = star.querySelector(".bi-star-fill");

    if (star.dataset.rating <= rating) {
      filledStar.classList.remove("d-none");  
      unfilledStar.classList.add("d-none");   
    } else {
      unfilledStar.classList.remove("d-none"); 
      filledStar.classList.add("d-none");     
    }
  });
}

stars.forEach((star) => {
  // Toggle on hover
  star.addEventListener("mouseover", function()  {
    updateStars(this.dataset.rating);
  });

  star.addEventListener("mouseout", function () {
    updateStars(this.dataset.rating);
  });

  // Toggle on click (to persist the filled state)
  star.addEventListener("click",function () {
    updateStars(this.dataset.rating);
  });
});
