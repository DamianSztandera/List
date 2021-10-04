{
    const tasks = [
        {
            content: "Wysłać umowę",
            done: true,
        },
        {
            content: "Zapisać umowę",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li>
                ${task.content}
               </li>   
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const init = () => {
        render();

    };

    init();
}