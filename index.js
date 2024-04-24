const imgEl = document.querySelector("img");
const userName = document.querySelector(".user-name");
const textEl = document.querySelector(".text");
const testimonialEl = document.querySelector(".testimonial");

const testimonials = [
  {
    name: "Lizzy",
    profileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "unisex clothing has helped my team and I stay on the same page. Previously, we were all over the board. Using unisex clothing has definitely saved us time and money.",
    color: "#8DECB4",
  },

  {
    name: "Mart",
    profileUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "unisex clothing is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
    color: "#141E46",
  },

  {
    name: "Feigh",
    profileUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I have been using unisex clothing for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
    color: "#8B322C",
  },
];
let index = 0;

updateTestimonials();

function updateTestimonials() {
  const { name, profileUrl, text, color } = testimonials[index];

  imgEl.src = profileUrl;
  textEl.innerText = text;
  userName.innerText = name;
  userName.style.color = "red";
  testimonialEl.style.backgroundColor = color;

  index++;

  //use conditional so that if it reaches the last, it will count from beginning again
  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(() => {
    updateTestimonials();
  }, 3000);
}
