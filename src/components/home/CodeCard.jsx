import { useState } from "react";

const repeatString = (str, count) => {
  let maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}

const CodeCard = () => {
  const [text, setText] = useState(`new Date().getFullYear() - 1991;`);
  const age = new Date().getFullYear() - 1991;
  const changeText = () => {
    let space = repeatString(' ', 54);
    setText(age + ';' + space);
  };

  return (
    <section className='text-[#6A98F0] text-xs font-thin leading-6  p-4 border-[#6D83F2] rounded-xl border-b-2 border-l-2'>
      <pre>
        1&nbsp;&nbsp;class <b>Human</b> {'{'}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;<b>Suraj Mishra</b>&quot;;
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.language = [&quot;<b>Nepali</b>&quot;, &quot;<b>English</b>&quot; &quot;<b>Finnish</b>&quot; &quot;<b>Hindi</b>&quot;];
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = [&quot;<b>DEV</b>&quot;, &quot;<b>COOKING</b>&quot; &quot;<b>HIKING</b>&quot;];
      </pre>
      <pre onClick={changeText}>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = {text}</pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.birthPlace = &quot;<b>Nepal</b>&quot;;
      </pre>
       <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.currentPlace = &quot;<b>Finland</b>&quot;;
      </pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}</pre>
      <pre>7&nbsp;&nbsp;{'}'}</pre>
    </section>
  )
}

export default CodeCard