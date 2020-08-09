<p align="center">
<img src="http://navprayas.in/static/img/pp2.png">
  </p>
<br>
<h1> Navprayas - Main Website </h1>

This will be our official main website.

## Tech Stack

- _Frontend_
  - [React](https://reactjs.org/)
  - [Reactstrap](https://reactstrap.github.io/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://github.com/ReactTraining/react-router#readme)

## Contribution Guide

- Fork the repo
- Clone the forked repo (From your profile)

  > Use **yarn** to install the dependency

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

Happy Coding !!!
