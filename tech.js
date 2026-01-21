const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const container = document.querySelector(".js-list");
const input = document.querySelector('#filter')
//1. Рендеримо розмітку елементів списку

function createList(array) {
  const markup = array
    .map((item) => {
      console.log(item.label);
      return `<li>${item.label}</li>`;
    })
    .join("");

    container.innerHTML = markup

  console.log(markup);
}
createList(tech);

//2. Слухаємо зміни фильтра
input.addEventListener('input', _.debounce(onInputChange, 1000))

function onInputChange(ev){
  const filter = ev.target.value.toLowerCase().trim()
  console.log(filter);
  
  const filteredItems = tech.filter(t => {
    return t.label.toLowerCase().includes(filter)
  }
  )

  console.log(filteredItems);
createList(filteredItems)

}


//3. Фильтруємо дані та рендеримо нові элементи
