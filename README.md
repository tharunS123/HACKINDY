# HackIndy

# Basic Git Commands

Git is a version control system that helps developers track and manage changes in their code. Below is a list of essential Git commands:

# Clone an existing repository
```sh
git clone <repository_url>
```

## Basic Operations
```sh
# Check the status of your repository
git status

# Add files to the staging area
git add <file>
# Add all files
git add .

# Commit changes with a message
git commit -m "Your commit message"

# View commit history
git log
```

## Branching and Merging
```sh
# List all branches
git branch

# Create a new branch
git branch <branch_name>

# Switch to a branch
git checkout <branch_name>

# Create and switch to a new branch
git checkout -b <branch_name>

# Merge a branch into the cur`rent branch
git merge <branch_name>
```
```sh

# Push changes to a repository
git push <branch_name>

# Pull changes from a repository
git pull <branch_name>
```

## Reset and Revert
```sh
# Undo changes in working directory
git checkout -- <file>

# Unstage files
git reset <file>

# Reset to a previous commit (soft reset)
git reset --soft <commit_hash>

# Reset to a previous commit (hard reset)
git reset --hard <commit_hash>
```

Description ....
