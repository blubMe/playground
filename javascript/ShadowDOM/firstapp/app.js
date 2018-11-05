const app = document.querySelector('shadow-app');
const shadow = app.attachShadow({ mode: 'open' });
const fall = obj1 => obj1 * 4

const content = `
    <style>
        .red {
            color: red;
        }
    </style>
    <header>
        <p>My name is jeff</p>
        <h3>${fall(17)}</h3>
        <p class="red">im red</p>
    </header>
`;

shadow.innerHTML = content;