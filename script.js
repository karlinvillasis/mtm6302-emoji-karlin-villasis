const container = document.querySelector(".container")

let emoji = []
for(let i=50;i<62;i++) {
    let content = `<p>
    <span>&#1294${i};</span><br>
    <code>1294${i}</code>
  </p>`
  console.log(content)
  emoji.push(content)
}
console.log(emoji)

container.innerHTML = emoji.join("")






