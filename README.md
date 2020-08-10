<p align="center">
<img src="http://navprayas.in/static/img/pp2.png">
  </p>
<br>
<h1> Navprayas - Official Website </h1>

This will be our official website. <br>Before contributing to this repo you must read this file to get started

## Tech Stack

- _Frontend_
  - [React](https://reactjs.org/)
  - [Reactstrap](https://reactstrap.github.io/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://github.com/ReactTraining/react-router#readme)

## How to run

<br>

- **Run your code for development**

```
npm start
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

## Contribution Guide

- Fork the repo
- Clone the forked repo (From your profile)

  > Use **npm** to install the dependency

- Since task will be assign in issue . So It is suggested to create a branch of that issue number and put all codes for the fulfillment of that task in that branch

  > For example i am assigned to create a sign in page in issue#1

  - First create a branch `git checkout -b issue#1`
  - Added Sign in page and update this to github by following commands
  - `git add .`
  - `git commit -m "Added Sign in Page"`
    Note:- Always add relevant commit message that define your work
  - `git push -u origin issue#1`

- Now create a Pull Request to dev branch (It will pop on github site)
  - Note: Don't create PR in master branch . May be it create conflicts

> Note: After merging your code into master branch you can delete your branch related to that issue and before working on next issue you must fetch all the code from original repo i.e (Upstream remote) command has been given below

##### Basic commands

- Cloning Command

```
git clone <repo link>
```

- For creating new branch

```
git checkout -b <branch name>
```

- Keeping main repo to upto date from your repo
  - First add a remote of this repo to your local named upstream
    ```
    git remote add upstream https://github.com/Navprayas-A-group-of-Innovative-thought/Website.git
    ```
- Once added you can pull all the commits from main repo using below commands

  - Note: Make sure currently you are in master branch of your local repo

  ```
  git fetch upstream master

  git merge upstream/master
  ```

- To check remote
  `git remote -v`
  > Generally origin is remote name associated to repo from your profile
  > and upstream is remote name associated to main repo

I think these commands are enough but still you forgot some commands you can take help from [here](https://github.com/kmrakash/practice/blob/master/GithubCommands.md)

**Note: If you don't have idea how to work please read these instructions carefully**

### Example

- Open your github profile
- Fork Navprayas-Frontend repo
- come to your profile and you will see you have a copy of that repo i.e Navprayas-Frontend in your profile
- Copy `clone url` and open terminal
- Url will be

```
https://github.com/<your-username>/Backend.git
```

- Paste `git clone <url>`
- You will see a Navprayas-Frontend folder
- `cd Navprayas-Frontend`
- To check your current branch `git branch`
- **Do not write any changes in master.**
- Now you are assigned to issue#1. So to create local branch for it from your local master branch on your local computer. First be in master branch.
- \<repeat from here for issue 2 or later otherwise ignore>
- open terminal and ensure you are in master branch and paste `git checkout -b issue#1`
  - **Note: Here issue#1 is the issue number assigned to you**
- Now work on your issue
- Now check status of your files changed
- `git status`
- To add those changes in your branch `git add .`
- Now commit your changes `git commit -m "commit message"`
- Now it is time to push your changes to your remote branch not in upstream(Navprayas Backend)
- `git push origin issue#1`
  - **Note: Here issue#1 represents current working branch**
- Now it is time to push your work to navprayas Frontend which can be done by creating a Pull request of your work
- Open you github profile and select branch issue#1 (Current working branch)
- Now create a pull request to Navprayas Frontend repo
- Then Admin will merge your request to master accordingly.
  - Note:- After Merging you can delete your issue branch
- For another issue(assigned task), first go to master branch.
- `git checkout master`
- Get changes from Navprayas main repo i.e upstream. So to update you will have to fetch code from navprayas master branch.
- `git fetch upstream master`
  `git merge upstream/master`
  - **These commands will bring all commits from this repo to your forked repo**
- Now repeat steps indicated above.

<br>

#### File Instructions

- Keep all components in component folder
  - Naming conventions : componentName.component.js
- For custom css styling , Keep all files in Style Folder
  - Naming conventions : componentName.module.css
    > Note:- componentName is the component where style is applicable
- All Redux file will be inside Redux Folder
  - Naming conventions
    - Action Name: sample.action.js
    - Constant Name: sample.constant.js
    - Reducer Name: sample.reducer.js

Happy Coding !!!
