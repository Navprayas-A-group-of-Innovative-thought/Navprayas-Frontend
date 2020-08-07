<img src="http://navprayas.in/static/img/pp2.png">
# Navprayas - Main Website

This will be our official main website.

---

## Tech Stack

- _Frontend_
  - [React](https://reactjs.org/)
  - [Reactstrap](https://reactstrap.github.io/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://github.com/ReactTraining/react-router#readme)

* _Backend_
  - [Nodejs](https://nodejs.org/en/)
  - [Express js](http://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/)

## Contribution Guide

- Fork the repo
- Clone the forked repo
- push the assign task in your repo and create a Pull Request to dev branch
  - Note: Don't create PR in master branch . May be it create conflicts

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
    git remote add upstream <the above link>.git
    ```
- Once added you can pull all the commits from main repo using below commands

  - Note: Make sure currently you are in master branch of your local repo

  ```
  git fetch upstream master

  git merge upstream/master
  ```

I these commands are enough but still you forgot some commands you can take help from [here](https://github.com/kmrakash/practice/blob/master/GithubCommands.md)

Happy Coding !!!
