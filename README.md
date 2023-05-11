Kanban Board
 Created Kanban Board project using the React framework. The Kanban Board is a visual tool that helps to manage work efficiently and effectively by visualizing the workflow and providing a clear picture of the status of each task.This project will allow students to create multiple boards for different courses and subjects, with columns representing different stages of a task's life cycle such as To Do, In Progress, and Done.


Description :
 To develop a Kanban React application, need Node.js and npm installed on system. Then   create a new React project using the Create React App command.
 To implement Drag & Drop:
 drag- drop functionality project  to use react-beautiful-dnd.

Getting Started:
* installed react application : 
    npx create-react-app Kanban-project

* installed Recoil:
   npm i recoil

* installed react-beautiful-dnd
    npm i react-beautiful-dnd
  
* installed Material Ui 
    npm install @mui/material @emotion/react @emotion/styled

Dependencies:

{
  "name": "kanban-project4",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.13.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-beautiful-dnd": "^13.1.1",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "recoil": "^0.7.7",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


Data Structure & it's Schema:

 List={
  id:"unique id",
  title:"To-do",
  time:"2pm",
  task:[
    {
      id:"1",
      title:"Book Reading",
      Description:"read a book",
      activity:"progress time",
    }
  ]
 }

Authors:
1. Bapi Majumder
2. Aman Dubey
3. Ankur Anand
4. Asmita Tagad

 Acknowledgments: