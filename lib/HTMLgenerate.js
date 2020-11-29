const generateCard = (empObj) => {
    let unique, uniqueTitle, icon;
    switch(empObj.empType){
        case "Manager":
            unique = empObj.office;
            uniqueTitle = 'Office:';
            icon = '<ion-icon name="cafe-outline"></ion-icon>';
            break;
        case "Engineer":
            unique = empObj.github;
            uniqueTitle = 'GitHub:';
            icon = '<ion-icon name="glasses-outline"></ion-icon>';
            break;
        case "Intern":
            unique = empObj.school; 
            uniqueTitle = 'School:';
            icon = '<ion-icon name="school-outline"></ion-icon>';
            break;
    }
    return `<div class="card" id="${empObj.empId}">
        <div class="head">
            <p class="name">${empObj.name}</p>
            <p class="role">${icon} ${empObj.empType}</p>
        </div>
        <div class="info">
            <p class="id">ID: ${empObj.empId}</p>
            <p class="email">Email: ${empObj.email}</p>
            <p class="unique">${uniqueTitle}: ${unique}</p>
        </div>
    </div>`
}

const generatePage = (employeeList) => {
    let cardList = [];
    employeeList.forEach((obj) => {
        cardList.push(generateCard(obj));
    })
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="./css_output.css">    
    </head>
    <body>
        <header>
            <h1>
                My Team
            </h1>
        </header>
        <div class="roster">
            ${cardList.join('\n')}
        </div>

        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </body>
    </html>`
}

const generateCss = () => {
    return`* {
        margin: 0;
        padding: 0;
        text-decoration-style: none;
    }
    
    header {
        margin: 0;
        height: 5em;
        display: flex;
        font-size: 2.5em;
        text-align: center;
        justify-content: center;
        background-color: rgb(143, 30, 30);
    }
    
    h1 {
        margin: auto;
        color: honeydew;
    }
        
    .roster {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px;
    }
    
    .card {
        margin: 20px;
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        width: 250px;
        height: 50%;
        min-height: 300px;
        box-shadow: 2px 2px 5px grey;
    }
    
    .head {
        padding: 5px;
        display: flex;
        text-align: center;
        flex-flow: column;
        background-color: rgb(57, 57, 201);
        color: honeydew;
        font-size: 2em;
    }
    
    .info {
        min-height: 100%;
        padding: 15px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-evenly;
    }
    
    .info p {
        width: 80%;
        padding: 5px;
        margin: 5px;
        box-shadow: 1px 1px 3px grey;
    }`
}

module.exports = {generateCard, generatePage, generateCss};