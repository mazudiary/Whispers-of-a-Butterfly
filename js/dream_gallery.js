const details = [
  {
    title: "Our First Dream",
    description:
      "Beneath a moonlit sky, we stand hand in hand, our hearts whispering promises only love can understand. This is where our forever begins, my darling.",
    img: "./assets/moonlit_enchanted_meadow.png",
  },
  {
    title: "Garden of Love",
    description:
      "In a garden where roses blush for us, our hearts bloom side by side. I dream of walking with you here, building a life filled with love.",
    img: "./assets/enchanted_gradern_stroll.png",
  },
  {
    title: "Under the Stars",
    description:
      "Under a canopy of stars, time pauses for us. Your eyes shine brighter than the heavens, and I know you’re my home, now and always.",
    img: "./assets/starry_night_romance.png",
  },
  {
    title: "Sunset Kiss",
    description:
      "As the sun dips low, painting the sky in hues of gold and pink, our lips meet in a kiss that feels like forever. This is our moment, my love.",
    img: "./assets/sun_kiss_by_ocean.png",
  },
  {
    title: "Whispers on the Balcony",
    description:
      "On a balcony kissed by golden light, I tuck a glowing flower behind your ear. Your blush tells a story of love, soft and eternal, as fireflies dance around us.",
    img: "./assets/balcony_scene.png",
  },
  {
    title: "Sunlit Dance",
    description:
      "In a sunlit garden, we twirl together, your turquoise saree flowing like a melody. My eyes hold only you, in a dance that promises forever.",
    img: "./assets/garden_dance.png",
  },
  {
    title: "Moonlit Serenity",
    description:
      "In an enchanted meadow under starlight, we rest in each other’s arms. Petals swirl around us, echoing a love so serene, it feels like a dream.",
    img: "./assets/moonlit_enchanted_meadow.png",
  },
  {
    title: "A Moment in the Sun",
    description:
      "Beneath a wise old tree in a sun-dappled park, we share a silent vow. Your smile is my sunlight, and our love grows deeper with every breath.",
    img: "./assets/sunlit_park.png",
  },
  {
    title: "Whispers in the Forest",
    description:
      "A soft, whimsical night deep in an enchanted forest. Glowing trees, fluttering butterflies, and secret laughter beneath the stars.",
    img: "./assets/whispers_in_forest.png",
  },
  {
    title: "Petal Rain Promise",
    description:
      "Under a shower of cherry blossoms, our hearts whisper vows in a world where only love speaks.",
    img: "./assets/petal_rain_promise.png",
  },
  {
    title: "Moonlight Serenade",
    description:
      "Bathed in moonlight atop a hill, we share a silent serenade that only our hearts can hear.",
    img: "./assets/moonlight_serenade.png",
  },
  {
    title: "Ocean of Forever",
    description:
      "Barefoot in twilight sands, reflections dance, and love becomes as endless as the glowing ocean.",
    img: "./assets/ocean_of_forever.png",
  },
  {
    title: "Carnival of Love",
    description:
      "Spinning on a glowing carousel, laughing under heart-shaped balloons, our joy fills the evening air.",
    img: "./assets/carnival_of_love.png",
  },
  {
    title: "Storybook Forever",
    description:
      "With every page turned, our love story unfolds — magical, eternal, and forever ours.",
    img: "./assets/storybook_forever.png",
  },
  {
    title: "Lake of Whispers",
    description:
      "Whispering secrets by a moonlit lake, surrounded by swans and sparkling fireflies.",
    img: "./assets/lake_of_whispers.png",
  },
  {
    title: "Castle of Us",
    description:
      "Above the clouds, our castle stands — built by dreams, held together by forever love.",
    img: "./assets/castle_of_us.png",
  },
  {
    title: "Painted by Love",
    description:
      "With laughter and colors, we paint the life we dream of — a masterpiece of us.",
    img: "./assets/painted_by_love.png",
  },
  {
    title: "Forest of Forever",
    description:
      "Among glowing flowers and gentle fireflies, our love grows wild and free, eternal as the stars.",
    img: "./assets/forest_of_forever.png",
  },
  {
    title: "Morning With You",
    description:
      "With your smile and morning light, even ordinary days become beautiful dreams come true.",
    img: "./assets/morning_with_you.png",
  },
  {
    title: "Dreamscape Garden",
    description:
      "Beneath a starlit sky in an enchanted garden, golden petals and soft smiles weave our perfect forever.",
    img: "./assets/dreamscape_garden.png",
  },
  {
    title: "A Gentle Forever",
    description:
      "Beneath a twilight sky sprinkled with golden light, he tenderly adjusts her sari, not as a duty but as a silent vow. Every careful touch speaks a thousand promises — to protect, to cherish, to adore — without needing a single word. It’s in these hushed, stolen moments that forever quietly begins.",
    img: "./assets/a_gentle_forever.png",
  },
  {
    title: "A Love the Seasons Remembern",
    description:
      "Amid the fading warmth of an autumn sunset, he leans close to the car window, memorizing the way she smiles just for him. The golden leaves fall like memories around them, but for a heartbeat, time pauses. They are two souls carving an unspoken goodbye into the evening air — a memory that even the seasons will carry forever.",
    img: "./assets/a_love_the_seasons_remembern.png",
  },
  {
    title: "Healing in My Sleep",
    description:
      "In the quiet hush of the night, two lovers lie close, tears tracing silent promises across their faces. Suspended above them, a stitched heart sways softly — wounded but mending, just like their love. Though pain still lingers, the comfort of each other's presence stitches them back together, thread by tender thread, dreaming of a tomorrow born from today's ache.",
    img: "./assets/healing_in_my_sleep.jpg",
  },
  {
    title: "My Forever Love",
    description:
      "To my future wife, my heart has been writing this story for you long before we met. I dream of the day we stand together, building a life of laughter, love, and endless dreams. With all my heart, [Your Name].",
    img: "./assets/our_forever.jpg",
  },
];
function showModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  modalTitle.textContent = details[index].title;
  modalDescription.textContent = details[index].description;
  modal.style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
// Keyboard accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
