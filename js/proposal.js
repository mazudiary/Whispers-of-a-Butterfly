// Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

// Reset notes on resize
function recize_notes() {
  notes.forEach((note) => {
    if (note.classList.contains("active")) {
      note.classList.remove("active");
      gsap.set(note, { height: "18%", clearProps: "all" });
      const button = note.querySelector(".next-button");
      if (button) {
        gsap.set(button, { opacity: 0 });
      }
    }
  });
}

// Prepare notes and button after envelope opens
function notes_ready() {
  gsap.to(".js-envelop-content", { height: "110%", duration: 0.5 });

  notes.forEach((note, i) => {
    note.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        // Collapse the note
        this.classList.remove("active");
        gsap.to(this, { height: "18%", duration: 0.5 });
        if (i === 4) {
          // Fifth note: hide Next button
          gsap.to(this.querySelector(".next-button"), {
            opacity: 0,
            duration: 0.5,
          });
        }
      } else {
        // Collapse all notes, then expand this one
        notes.forEach((n, j) => {
          n.classList.remove("active");
          gsap.to(n, { height: "18%", duration: 0.5 });
          const button = n.querySelector(".next-button");
          if (button) {
            gsap.to(button, { opacity: 0, duration: 0.5 });
          }
        });
        this.classList.add("active");
        // Set height based on note index
        let targetHeight = 40 + 10 * i + "%";
        gsap.to(this, { height: targetHeight, duration: 0.5 });
        if (i === 4) {
          // Fifth note: show Next button
          gsap.to(this.querySelector(".next-button"), {
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
          });
        }
      }
    });
  });

  // Add event listener for the Next button
  const nextButton = document.querySelector(".next-button");
  if (nextButton) {
    nextButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent note collapse
      window.location.href = "dream_gallery.html";
    });
  }
}

// Setup paper after envelope opens
function set_up_paper() {
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath: "polygon(0% 0%, 100% 0%, 50% 61%)",
    onComplete: notes_ready,
  });
}

// Open the envelope
function envelop_transition() {
  gsap.to(".js-up-paper", {
    bottom: "1%",
    duration: 0.4,
    onComplete: set_up_paper,
  });
  document
    .querySelector(".js-up-paper")
    .removeEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.remove("cursor");
}

// Cut the sticker
function sticker() {
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);
  document
    .querySelector(".js-up-paper")
    .addEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.add("cursor");
}

// Initial event listeners
document.querySelector(".js-sticker").addEventListener("click", sticker);
window.onresize = function () {
  recize_notes();
};
