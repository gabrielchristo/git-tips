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
		"category": "init"
	},
	{
		"title": "Clone a repository",
		"text_1": "",
		"command_1": "git clone [--recurse-submodules] <repository_link>",
		"text_2": "You can also clone a single branch",
		"command_2": "git clone -b <branch> --single-branch <repository_link>",
		"category": "init"
	},

	// stage area
	{
		"title": "Show working directory status",
		"text_1": "",
		"command_1": "git status [--show-stash] [--verbose] [--ignored]",
		"text_2": "You can also inspect the status using the default graphical interface",
		"command_2": "gitk [--all]",
		"category": "stage area"
	},
	{
		"title": "Add file to stage",
		"text_1": "Use -p option to add specific lines of file. It will interactively let you add, skip or split diff hunks",
		"command_1": "git add <file> [-p]",
		"category": "stage area"
	},
	{
		"title": "Add all files to stage",
		"text_1": "",
		"command_1": "git add .",
		"text_2": "You can also use following command to add all already tracked files",
		"command_2": "git add -u",
		"category": "stage area"
	},
	{
		"title": "Remove file or folder from stage",
		"text_1": "Unstage desired file or folder from the index",
		"command_1": "git reset HEAD -- <file | directory>",
		"text_2": "or",
		"command_2": "git restore --staged <file>",
		"category": "stage area"
	},

	{
		"title": "Delete local changes of file",
		"text_1": "",
		"command_1": "git checkout -- <file>",
		"text_2": "or",
		"command_2": "git restore <file>",
		"text_3": "The experimental restore command does the same thing as the checkout command but focused on file changes",
		"category": "stage area"
	},
	{
		"title": "Delete all not staged local changes",
		"text_1": "",
		"command_1": "git checkout .",
		"category": "stage area"
	},

	{
		"title": "Remove untracked files",
		"text_1": "You can remove all untracked files with -f option",
		"command_1": "git clean [-f [-d] [-X]] [-n | --dry-run]",
		"text_2": "You can also remove directories with the -f -d option",
		"text_3": "To remove only ignored files use the -f -X option",
		"text_4": "With -n option you can preview the damage you'll do",
		"category": "stage area"
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
	{
		"title": "Compare two commits or branches",
		"text_1": "Use the --name-only option to check only which files differ (not the content difference)",
		"command_1": "git diff <parameter_1>..<parameter_2> [--name-only] [<path>]",
		"text_2": "The parameters can be a branch name or a commit hash",
		"text_3": "You can use three dots to find the diff from their common ancestor",
		"text_4": "You can also specify a path to check only one file or folder",
		"category": "diff"
	},

	// stash
	{
		"title": "Save changes to stash",
		"text_1": "Useful to clean the working directory but keep current state of changes",
		"command_1": "git stash push [-m <message>] [--include-untracked]",
		"category": "stash"
	},
	{
		"title": "Recover changes from stash",
		"text_1": "Apply is the same of pop, but will not remove stash from list",
		"command_1": "git stash (pop | apply) [<stash>]",
		"text_2": "You can also recover a single file from stash",
		"command_2": "git checkout stash@{<index>} -- <file>",
		"category": "stash"
	},
	{
		"title": "List stashes",
		"text_1": "List of all stash entries in the format stash@{<index>}",
		"command_1": "git stash list",
		"category": "stash"
	},


	// commit
	{
		"title": "Commit changes",
		"text_1": "",
		"command_1": "git commit [-m <message>]",
		"category": "commit"
	},
	{
		"title": "Undo a local commit",
		"text_1": "Undo last or specific commit",
		"command_1": "git reset [--soft | --hard] (HEAD~ | <commit_hash>)",
		"text_2": "--soft option will keep changes staged and --hard option will delete changes",
		"category": "commit"
	},
	{
		"title": "Recover destroyed commit with hard reset",
		"text_1": "",
		"command_1": "git reflog\n"
		+ "git checkout -b <new_branch_name> <destroyed_commit_hash>",
		"category": "commit"
	},
	{
		"title": "Checkout specific commit",
		"text_1": "",
		"command_1": "git checkout <commit_hash>",
		"category": "commit"
	},

	// pull
	{
		"title": "Pull changes from remote",
		"text_1": "With no given option, git will pull in it's default mode, creating a merge commit",
		"command_1": "git pull [--rebase | --ff | --ff-only]",
		"text_2": "With --ff-only option, git will only update your branch if it can be fast forwarded",
		"text_3": "With --rebase option, git will rebase local changes on top of remote changes",
		"text_4": "With --ff option, git will create a merge commit",
		"category": "pull"
	},
	{
		"title": "Update changes from all remotes",
		"text_1": "The fetch command will download objects and refs from the repository",
		"command_1": "git fetch --all [-a | --append] [--dry-run]",
		"category": "pull"
	},
	{
		"title": "Pull single file from remote",
		"text_1": "After fetch operation, use",
		"command_1": "git checkout <remote_name>/<branch_name> -- <file>",
		"category": "pull"
	},


	// push
	{
		"title": "Add new remote to repository",
		"text_1": "To add a new remote repository (usually origin), use",
		"command_1": "git remote add <remote_name> <remote_url>",
		"text_2": "To verify your new remote list, use",
		"command_2": "git remote -V",
		"category": "push"
	},
	{
		"title": "Push changes to remote",
		"text_1": "",
		"command_1": "git push [<remote_name>]",
		"text_2": "To setup remote branch tracking information to a new local branch, use",
		"command_2": "git push -u <remote_name> <remote_branch_name>",
		"text_3": "Usually, <remote_name> will be origin",
		"category": "push"
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
		"category": "branch"
	},
	{
		"title": "List branches merged into another",
		"text_1": "",
		"command_1": "git branch --merged <branch>",
		"category": "branch"
	},
	
	{
		"title": "Change to another branch",
		"text_1": "",
		"command_1": "git checkout <branch_name>\n",
		"text_2": "or",
		"command_2": "git switch <branch_name>",
		"text_3": "The experimental switch command does the same thing as the checkout command but focused on branch changes",
		"category": "branch"
	},

	{
		"title": "Rename a branch",
		"text_1": "",
		"command_1": "git branch -m [<old_branch_name>] <new_branch_name>",
		"category": "branch"
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
		"command_1": "git checkout A\ngit rebase B [--autostash]",
		"text_2": "with --autostash option, git will create a temporary stash and apply it after the operation ends",
		"text_3": "then, fix eventual <file> conflicts and continue as you would normally do",
		"command_3": "git add <file>\ngit rebase --continue",
		"category": "rebase"
	},

	// tag
	{
		"title": "Create a new tag",
		"text_1": "To create an annotated tag, use",
		"command_1": "git tag -a <tag_name> -m <message>",
		"text_2": "To create a lightweight tag, use",
		"command_2": "git tag <tag_name>",
		"text_3": "Then, send your tag to remote",
		"command_3": "git push origin <tag_name>",
		"category": "tag"
	},
	{
		"title": "List all tags",
		"text_1": "",
		"command_1": "git tag -l [<regex>]",
		"category": "tag"
	},
	{
		"title": "Show tag information",
		"text_1": "",
		"command_1": "git show <tag_name>",
		"category": "tag"
	},


	// log
	{
		"title": "Visualize repository tree",
		"text_1": "Show the one-lined commit tree from all branches of the repository",
		"command_1": "git log --decorate --graph --all --oneline",
		"text_2": "You can also setup an alias for the above command",
		"command_2": "git config alias.<your_alias> 'log --decorate --graph --all --oneline'",
		"text_3": "then, use",
		"command_3": "git <your_alias>",
		"category": "log"
	},
	{
		"title": "Show change history of file",
		"text_1": "",
		"command_1": "git log [--follow] -p -- <file>",
		"text_2": "You can also use the graphical view",
		"command_2": "gitk [--follow] <file>",
		"category": "log"
	},
	{
		"title": "Search commit log",
		"text_1": "",
		"command_1": "git log [--all] --grep=<pattern>",
		"text_2": "You can also search commits by content changes, using",
		"command_2": "git log -S <pattern>",
		"category": "log"
	},
	

	// config
	{
		"title": "Configure email and username",
		"text_1": "",
		"command_1": "git config [--global] user.name <username>"
					+ "\ngit config [--global] user.email <email>",
		"category": "config"
	},
	{
		"title": "Configure to pull only if fast forward",
		"text_1": "",
		"command_1": "git config [--global] pull.ff only",
		"category": "config"
	},
	{
		"title": "Prevent auto replacing LF with CRLF",
		"text_1": "Useful when switching between windows and linux",
		"command_1": "git config [--global] core.autocrlf false",
		"category": "config"
	},

	// internals
	{
		"title": "Stop tracking file changes",
		"text_1": "The --assume-unchanged option will prevent detection of changes for that file or folder. You can bring it back to normal with --no-assume-unchanged option",
		"command_1": "git update-index [--assume-unchanged | --skip-worktree] <path>",
		"text_2": "The --skip-worktree option will keep your own independent version of file or folder",
		"category": "internals"
	},
	{
		"title": "Archive a branch",
		"text_1": "",
		"command_1": "git archive <branch> --format=zip --output=<file>.zip",
		"category": "internals"
	},
	{
		"title": "Retrieve a file from repository",
		"text_1": "As archive command produces a tar or zip, you need to pipe the output to get the file content",
		"command_1": "git archive --remote=<remote_url> (HEAD | <commit_hash>):<path> <file> | tar -x",
		"text_2": "The <path> parameter is optional",
		"text_3": "Note: Won't work over HTTP, only Git protocol !",
		"category": "internals"
	},

	

]
