const presets = {
  warm: ['Warm', 'Patient, encouraging and welcoming. A little support when you want to take things one step at a time.', 'a lilac hoodie'],
  curious: ['Curious', 'Investigative and exploratory. Connect ideas, ask another question and see where your curiosity takes you.', 'a green vest and golden scarf'],
  creative: ['Creative', 'Imaginative and playful. Try a different angle, explore alternatives and give a new idea room to grow.', 'a coral apron and violet beret'],
  focused: ['Focused', 'Direct, organized and ready for the next step. Bring structure to your thoughts and clarity to your plans.', 'a navy vest and blue tie'],
  serene: ['Serene', 'Calm and thoughtful. Slow down, reflect and work through an explanation at a pace that feels comfortable.', 'a sage cardigan and cream scarf']
};
const preview = document.getElementById('preset-image');
document.querySelectorAll('[data-preset]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.preset;
    const [title, description, outfit] = presets[key];
    preview.src = `assets/${key}.webp`;
    preview.alt = `${title} Catio wearing ${outfit}`;
    document.getElementById('preset-title').textContent = title;
    document.getElementById('preset-description').textContent = description;
    document.querySelectorAll('[data-preset]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
