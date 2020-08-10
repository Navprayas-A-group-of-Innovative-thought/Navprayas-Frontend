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

* **Building your code**

```
npm run build
```

* **Run production code**

```
npm run production
```

* **Clean dist folder**

```
npm run clean
```
<br>
<h1>Basic Commands</h1>

* Clone a repo

```
git clone <repo link>
```

* Create a new branch

```
git branch <branch name>
```
* Create a new branch and switch to that branch
```
git checkout -b <branch name>
```

* Update local master from remote master(ensuring currently in master branch)

```
git pull
```

* Check remote
`git remote -v`

*Check all branches

```
git branch -a
```
*Check remote branches

```
git branch -r
```
* Check local branches

```
git branch
```
* Push you files

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

* <span class="highlight" style="background-color:inherit"><span class="colour" style="color:var(--vscode-markdown-wysList)">You will see a Navprayas-Frontend folder</span></span>
* `cd Navprayas-Frontend`
* Install all dependencies
* `npm install`
* To check your current branch - `git branch`
* Now you have been assigned issue#1. 
* Update your master branch from origin master - `git checkout master`
  
   **Repeat Point : commands to be reused**
* `git checkout master` to switch to master branch
* `git pull` to get changes from remote master branch to your local master branch
* Now create a local branch named issue#1 for your work.
* `git checkout -b issue#1`
* Now you are in issue#1 branch and now do your work.Then add your changes.
* `git add .`
* Then commit your changes.
* `git commit -m "your message"`
* Your commit should answer what this commit will do. Answer should be This commit will "your message".
* Now push your branch work to Navprayas frontend repo.
* `git push origin issue#1`
*  Now it is time to push your work to navprayas frontend but note you have to push changes to devlopment branch, process is also known as creating a pull request.
* Open your github and select branch issue#1
* Now create a pull request to development branch
* Then Admin will merge your request to master accordingly.
* For another issue, first go to **Repeat point**.


<br>

#### File Instructions

- Keep all components in component folder
  - Naming conventions : componentName.component.js
- Keep the custom styling in same folder in which it is applicable
  - Naming conventions : componentName.css
    > Note:- componentName is the component where style is applicable
- All Redux file will be inside Redux Folder
  - Naming conventions
    - Action Name: sample.action.js
    - Constant Name: sample.constant.js
    - Reducer Name: sample.reducer.js

Happy Coding !!!
