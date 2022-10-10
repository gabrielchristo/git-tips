/*

json array with git commands data

categories:

	init
	stage area
	diff
	stash
	commit
	pull
	push
	branch
	merge
	rebase
	tag
	log
	config
	internals

*/

var data_en =
[
	// init
	{
		"title": "Initialize a repository",
		"text_1": "",
		"command_1": "git init [-b <initial_branch_name>]",
		"category": ""
	},
	{
		"title": "Clone a repository",
		"text_1": "",
		"command_1": "git clone [--recurse-submodules] <repository_link>",
		"category": ""
	},

	// stage area
	{
		"title": "Add file to stage",
		"text_1": "",
		"command_1": "git add <file>",
		"category": "staging area"
	},
	{
		"title": "Add specific lines of file to stage",
		"text_1": "It will interactively let you add, skip or split diff hunks",
		"command_1": "git add -p <file>",
		"category": "staging area"
	},

	{
		"title": "Remove file from stage",
		"text_1": "Unstage desired file from the index",
		"command_1": "git reset HEAD -- <file | directory>",
		"text_2": "or",
		"command_2": "git restore --staged <file>",
		"category": ""
	},

	{
		"title": "Delete local changes of file",
		"text_1": "",
		"command_1": "git checkout -- <file>",
		"category": ""
	},
	{
		"title": "Delete all not staged local changes",
		"text_1": "",
		"command_1": "git checkout .",
		"category": ""
	},

	{
		"title": "Remove untracked files",
		"text_1": "You can remove all untracked files with -f option",
		"command_1": "git clean [-f [-d] [-X]] [-n | --dry-run]",
		"text_2": "You can also remove directories with the -f -d option",
		"text_3": "To remove only ignored files use the -f -X option",
		"text_4": "With -n option you can preview the damage you'll do",
		"category": ""
	},

	// diff
	{
		"title": "Show local changes",
		"text_1": "To show all local changes, use",
		"command_1": "git diff",
		"text_2": "To show only staged changes, use",
		"command_2": "git diff --cached",
		"category": "diff"
	},

	// stash
	{
		"title": "Save changes to stash",
		"text_1": "",
		"command_1": "git stash push [-m <message>]",
		"category": ""
	},
	{
		"title": "Recover changes from stash",
		"text_1": "",
		"command_1": "git stash pop",
		"category": ""
	},
	{
		"title": "List stashes",
		"text_1": "",
		"command_1": "git stash list",
		"category": ""
	},


	// commit
	{
		"title": "Commit changes",
		"text_1": "",
		"command_1": "git commit [-m <message>]",
		"category": ""
	},
	{
		"title": "Undo a local commit",
		"text_1": "Undo last or specific commit",
		"command_1": "git reset [--soft | --hard] (HEAD~ | <commit_hash>)",
		"category": ""
	},
	{
		"title": "Recover destroyed commit with hard reset",
		"text_1": "",
		"command_1": "git reflog\n"
		+ "git checkout -b <new_branch_name> <destroyed_commit_hash>",
		"category": ""
	},
	{
		"title": "Checkout specific commit",
		"text_1": "",
		"command_1": "git checkout <commit_hash>",
		"category": ""
	},

	// pull
	{
		"title": "Pull changes from remote",
		"text_1": "With no given option, git will pull in its default mode, creating a merge commit",
		"command_1": "git pull [--rebase | --ff | --ff-only]",
		"text_2": "With --ff-only option, git will only update your branch if it can be fast forwarded",
		"text_3": "With --rebase option, git will rebase local changes on top of remote changes",
		"text_4": "With --ff option, git will create a merge commit",
		"category": ""
	},

	{
		"title": "Update remote of all branches",
		"text_1": "",
		"command_1": "git fetch (-a | --all)"
	},


	// push

	{
		"title": "Push changes to remote",
		"text_1": "",
		"command_1": "git push",
		"category": ""
	},
	{
		"title": "Push new branch to remote",
		"text_1": "It will setup remote branch tracking information to local branch",
		"command_1": "git push -u origin <remote_branch_name>"
	},


	// branch
	{
		"title": "Create new branch",
		"text_1": "",
		"command_1": "git checkout -b <new_branch_name>",
		"category": "branch"
	},

	{
		"title": "List branches",
		"text_1": "",
		"command_1": "git branch -vv",
		"category": ""
	},
	
	{
		"title": "Change to another branch",
		"text_1": "",
		"command_1": "git checkout <branch_name>\n",
		"text_2": "or",
		"command_2": "git switch <branch_name>",
		"category": ""
	},

	{
		"title": "Delete branch",
		"text_1": "To delete a branch locally, use",
		"command_1": "git branch -d [--force] <branch_name>",
		"text_2": "To delete a branch remotely, use",
		"command_2": "git push origin --delete <branch_name>",
		"category": "branch"
	},

	// merge
	{
		"title": "Merge branch A into B",
		"text_1": "With --no-commit option you can inspect the source before the merge commit",
		"command_1": "git checkout B\n"
					+ "git merge [--no-commit [--no-ff]] [-m <message>] A",
		"text_2": "In case of conflict, you can abort the merge",
		"command_2": "git merge --abort",
		"category": "merge"
	},
	{
		"title": "Choose file version to fix conflict",
		"text_1": "",
		"command_1": "git checkout --ours <file>",
		"text_2": "or",
		"command_2": "git checkout --theirs <file>",
		"text_3": "then, continue as you would normally merge",
		"command_3": "git add <file>\n"
					+ "git merge --continue",
		"category": "merge"
	},



	// rebase
	{
		"title": "Rebase branch",
		"text_1": "Move commits from branch A to branch B",
		"command_1": "git checkout A\ngit rebase B",
		"text_2": "Fix eventual <file> conflicts and continue as you would normally do",
		"command_2": "git add <file>\ngit rebase --continue",
		"category": "rebase"
	},

	{
		"title": "",
		"text_1": "",
		"command_1": ""
	},

	// tag

	{
		"title": "Create a new tag",
		"text_1": "",
		"command_1": "git tag"
	},


	// log
	{
		"title": "Visualize repository tree",
		"text_1": "Show the one-lined commit tree from all branches of the repository",
		"command_1": "git log --decorate --graph --all --oneline",
		"text_2": "You can also setup an alias for the above command",
		"command_2": "git config alias.<your_alias> 'log --decorate --graph --all --oneline'",
		"text_3": "then",
		"command_3": "git <your_alias>",
		"category": ""
	},
	{
		"title": "",
		"text_1": "",
		"command_1": "",
		"category": ""
	},

	// config
	{
		"title": "Configure email and username",
		"text_1": "",
		"command_1": "git config [--global] user.name <username>"
					+ "\ngit config [--global] user.email <email>",
		"category": ""
	},
	{
		"title": "Configure to pull only if fast forward",
		"text_1": "",
		"command_1": "git config [--global] pull.ff only",
		"category": ""
	},

	// internals
	{
		"title": "Stop tracking file changes",
		"text_1": "",
		"command_1": "git update-index",
		"category": ""
	},
	{
		"title": "",
		"text_1": "",
		"command_1": "",
		"category": ""
	},
	{
		"title": "",
		"text_1": "",
		"command_1": "",
		"category": ""
	}

]
