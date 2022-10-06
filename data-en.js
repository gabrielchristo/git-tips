var data_en =
[
	// stage area
	{
		"title": "Add file to stage",
		"description": "",
		"command": "git add <file>",
		"category": "staging area"
	},
	{
		"title": "Add specific lines of file to stage",
		"description": "It will interactively let you add, skip or split diff hunks",
		"command": "git add -p <file>",
		"category": "staging area"
	},

	{
		"title": "Remove file from stage",
		"description": "Unstage desired file from the index",
		"command": "git reset HEAD -- <file | directory>\n"
		+ "or\n"
		+ "git restore --staged <file>",
		"category": ""
	},

	{
		"title": "Delete local changes of file",
		"description": "",
		"command": "git checkout -- <file>",
		"category": ""
	},

	// diff
	{
		"title": "Show all local changes",
		"description": "",
		"command": "git diff",
		"category": ""
	},
	{
		"title": "Show only staged changes",
		"description": "",
		"command": "git diff --cached",
		"category": ""
	},

	// stash
	{
		"title": "Save changes to stash",
		"description": "",
		"command": "",
		"category": ""
	},
	{
		"title": "Recover changes from stash",
		"description": "",
		"command": "",
		"category": ""
	},
	{
		"title": "List stashes",
		"description": "",
		"command": "",
		"category": ""
	},


	// commit
	{
		"title": "Undo a local commit",
		"description": "Undo last or specific commit",
		"command": "git reset [--soft | --hard] (HEAD~ | <commit_hash>)",
		"category": ""
	},

	{
		"title": "Recover destroyed commit with hard reset",
		"description": "",
		"command": "git reflog\n"
		+ "git checkout -b <new_branch_name> <destroyed_commit_hash>",
		"category": ""
	},

	{
		"title": "Checkout specific commit",
		"description": "",
		"command": "git checkout",
		"category": ""
	},

	// pull

	{
		"title": "Pull changes from remote",
		"description": "",
		"command": "git pull",
		"category": ""
	},

	{
		"title": "Update remote of all branches",
		"description": "",
		"command": "git fetch (-a | --all)"
	},


	// push

	{
		"title": "Push changes to remote",
		"description": "",
		"command": "git push",
		"category": ""
	},


	// branch
	{
		"title": "Create new branch",
		"description": "",
		"command": "git checkout -b <new_branch_name>",
		"category": "branch"
	},
	{
		"title": "Push new branch to remote",
		"description": "It will setup remote branch tracking information to local branch",
		"command": "git push -u origin <remote_branch_name>"
	},
	{
		"title": "Change to another branch",
		"description": "",
		"command": "git checkout <branch_name>\n"
		+ "or\n" + "git switch <branch_name>",
		"category": ""
	},

	

	


	// merge
	{
		"title": "Merge branch A into B",
		"description": "",
		"command": "git checkout B<br>git merge A",
		"category": ""
	},
	{
		"title": "Choose file version to fix conflict",
		"text_1": "",
		"command_1": "git checkout --ours <file>",
		"text_2": "or",
		"command_2": "git checkout --theirs <file>",
		"text_3": "then, continue as you would normally merge",
		"command_3": "git add <file>",
		"command_4": "git merge --continue",
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
		"description": "",
		"command": ""
	},

	// tag

	{
		"title": "Create a new tag",
		"description": "",
		"command": "git tag"
	},


	// log
	{
		"title": "Visualize repository tree",
		"description": "Show the one-lined commit tree from all branches of the repository",
		"command": "git log --decorate --graph --all --oneline",
		"category": ""
	},
	{
		"title": "",
		"description": "",
		"command": "",
		"category": ""
	},



	// internals
	{
		"title": "Stop tracking file changes",
		"description": "",
		"command": "git update-index",
		"category": ""
	},
	{
		"title": "",
		"description": "",
		"command": "",
		"category": ""
	}
]