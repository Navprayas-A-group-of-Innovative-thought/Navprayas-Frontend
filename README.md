<p align="center">
<img src="http://navprayas.in/static/img/pp2.png">
</p>
<br>
<h1> Navprayas-A Group of Innovative Thoughts ( Main Website Frontend ) </h1>

This will be our official website. <br>Before contributing to this repo you must read this file to get started
<br> Use below link for documentation reference

## Tech Stack

- _Frontend_

  - [React](https://reactjs.org/)
  - [Reactstrap](https://reactstrap.github.io/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://knowbody.github.io/react-router-docs/guides/NavigateOutsideComponents.html)
  - [Font Awesome](https://fontawesome.com/)
  - [Bootstrap](https://getbootstrap.com/)

<h1>How to run</h1>

<b>Run your code for development</b>

```
npm install && npm start
```

- **Building your code**

```
npm run build
```

- **Run production code**

```
npm run production
```

- **Clean dist folder**

```
npm run clean
```

<br>
<h1>Basic Commands</h1>

- Clone a repo

```
git clone <repo link>
```

- Create a new branch

```
git branch <branch name>
```

- Create a new branch and switch to that branch

```
git checkout -b <branch name>
```

- Update local master from remote master(ensuring currently in master branch)

```
git pull
```

- Check remote
  `git remote -v`

\*Check all branches

```
git branch -a
```

\*Check remote branches

```
git branch -r
```

- Check local branches

```
git branch
```

- Push you files

```
git push origin <branch-name>
```

I think these commands are enough but still you forgot some commands you can take help from [here](https://github.com/kmrakash/practice/blob/master/GithubCommands.md)
<br>
<br>

<h1>Contribution Guide</h1>

* Clone Navprayas Frontend Repo

```
git clone https://github.com/Navprayas-A-group-of-Innovative-thought/Navprayas-Frontend.git
```

* <span class="highlight" style="background-color:inherit"><span class="colour" style="color:var(--vscode-markdown-wysList)">You will see a Navprayas-Backend folder</span></span>
* `cd Navprayas-Frontend`
* Install all dependencies
* `npm install`
* To check your current branch - `git branch`
  
   **Repeat Point : commands to be reused**

* Now you have been assigned test. 
* Open Github and Create a remote branch with name test in origin(remote).
* Come to your local computer and
  
* `git checkout test` to switch to local test branch (test branch already exists in remote so no need to create).
* `git pull` to get changes from remote test branch to your local test branch. Note `git pull` pulls all changes from (current)remote branch to your current local branch, it does not work necessarily only master branch but is true for all branches.
* Now do your work.Then add your changes.
* `git add .`
* Then commit your changes.
* `git commit -m "your message"`
* Your commit should answer what this commit will do. Answer should be This commit will "your message".
* Now push your branch work to Navprayas Frontend repo. Note you are in test branch.
* `git push` will push all your local changes to remote test.
* Open you github and select branch test
* Now create a pull request to development branch
* Then Admin will merge your request to master accordingly.
* For another issue, first go to **Repeat point**.

<br>

#### File Instructions

- Keep all components in component folder
- Create a Folder for component and add index.js as main file . So if we import that folder inside any other file . index file is by default imported.

  - You can check how i have added for header and footer
  - Now if this folder is require and small children component follow below naming convention
  - Naming conventions of children components : componentName.component.js

- Keep the custom styling in same folder Component in which it is applicable
  - Naming conventions : componentName.css
    > Note:- componentName is the component where style is applicable
- Page folder contains all the pages
- All Redux file will be inside Redux Folder
  - Naming conventions
    - Action Name: sample.action.js
    - Constant Name: sample.constant.js
    - Reducer Name: sample.reducer.js

Happy Coding !!!
