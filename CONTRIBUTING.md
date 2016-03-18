# Contributing
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Reporting bugs](#reporting-bugs)
- [Git Workflow](#git-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
  - [Clone the repo](#clone-the-repo)
  - [If there's no issue, please create one](#if-theres-no-issue-please-create-one)
  - [Let us Know you're working on the issue](#let-us-know-youre-working-on-the-issue)
  - [Create a feature branch:](#create-a-feature-branch)
  - [Make your changes and commit:](#make-your-changes-and-commit)
  - [Create a Pull Request](#create-a-pull-request)
  - [PR Merge Exception](#pr-merge-exception)
  - [PR Hints](#pr-hints)
    - [For large changes spanning many commits / PRs](#for-large-changes-spanning-many-commits--prs)
  - [Advanced Git tools](#advanced-git-tools)
- [Version Numbers](#version-numbers)
    - [Breaking.Feature.Fix](#breakingfeaturefix)
      - [Breaking](#breaking)
      - [Feature](#feature)
      - [Fix](#fix)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Reporting bugs

Before submitting your issue please check that you've completed the following steps:

* Made sure you're on the latest version
* Used the search feature to ensure that the bug hasn't been reported before

Bug reports should contain the following information:

* Summary: A brief description.
* Steps to reproduce: How did you encounter the bug? Instructions to reproduce it.
* Expected behavior: How did you expect it to behave?
* Actual behavior: How did it actually behave?
* References: Links to any related tickets or information sources.
* If possible, attach visual documentation of the bug. Screenshot or animated gif

## Git Workflow
Introduction to Github Flow https://guides.github.com/introduction/flow/

## Pull Request Guidelines

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned.
* Check for related issues on the issue tracker.
* Non-trivial changes should be discussed on an issue first.
* Develop in a topic branch, not master
* Squash your commits
* Write a good description of your PR

### Clone the repo

* Click the GitHub fork button to create your own fork
* Clone your fork of the repo to your dev system

```
git clone git@github.com:gaboesquivel/standard-module-boilerplate.git
```

### If there's no issue, please create one


### Let us Know you're working on the issue

If you're actively working on an issue, please comment in the issue thread stating that you're working on a fix, or (if you're an official contributor) assign it to yourself.

This way, others will know they shouldn't try to work on a fix at the same time.


### Create a feature branch:

```
git checkout -b <your-branch-name>
```

### Make your changes and commit:

* Make sure you comply with the [.editorconfig](http://editorconfig.org/)

```
git commit -m '[Issue #<your-issue-number>] <short description of change>'
```

### Create a Pull Request

Please don't merge your own changes. Create a pull request so others can review the changes.

**Push changes:**

```
git push origin <your-feature-branch>
```

* Open your repository fork on GitHub
* You should see a button to create a pull request - Press it
* Consider mentioning a contributor in your pull request comments to alert them that it's available for review
* **Wait for the reviewer to approve and merge the request**

### PR Merge Exception

* Minor documentation grammar/spelling fixes (code example changes should be reviewed)


### PR Hints

Reference the issue number in your commit message e.g.:

```
$ git commit -m '[#5] Make sure to follow the PR process for contributions'
```

#### For large changes spanning many commits / PRs

* Create a meta-issue with a bullet list using the `* [ ] item` markdown syntax.
* Create issues for each bullet point
* Link to the meta-issue from each bullet point issue
* Check off the bullet list as items get completed

Linking from the bullet point issues to the meta issue will create a list of issues with status indicators in the issue comments stream, which will give us a quick visual reference to see what's done and what still needs doing.


### Advanced Git tools

There are also tools like [Hub](https://hub.github.com/) and [git-extras](https://github.com/tj/git-extras) that facilitate interacting with Github.
You leverage these tools to contribute to this repository.


## Version Numbers

[Semver](http://semver.org), except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".


#### Breaking.Feature.Fix

We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people.

##### Breaking

Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release.

##### Feature

When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed.

##### Fix

When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior.
