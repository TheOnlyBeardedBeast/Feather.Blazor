const iconFolder = './IconsSource/';
const outputFolder = "./Icons/";

const fs = require('fs');

const icons = fs.readdirSync(iconFolder);

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

icons.forEach(icon => {
  const newName = "Feather" + toPascalCase(icon).replace(".svg", ".razor");

  const fileContent = fs.readFileSync(iconFolder + icon, { encoding: "utf8" })
    .replace('width="24"', 'width="@Size"')
    .replace('height="24"', 'height="@Size"')
    .replace('stroke="#fff"', 'stroke="@Color"')
    .replace('stroke-width="1.5"', 'stroke-width="@StrokeWidth"')
    .replace('class="feather', 'class="feather @CssClass')
    .replace('xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" @attributes="IconAttributes"');

  fs.writeFileSync(outputFolder + newName,
    `@inherits Icon
    
${fileContent}
`, { flag: 'w' });

  console.log(newName);
});