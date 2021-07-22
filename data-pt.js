// json array with git commands data
var data_pt = [
	{
		"title": "Criar uma nova branch",
		"description": "",
		"command": "git checkout -b <branch>"
	},
	{
		"title": "Atualizar remote",
		"description": "",
		"command": "git fetch --all"
	},
	{
		"title": "Efetuar push de uma branch nova",
		"description": "No primeiro push de uma branch recém criada, vai ser necessário definir o remote para o qual as mudanças vão ser enviadas",
		"command": "git push -u origin <branch>"
	},
	{
		"title": "Adicionar arquivos ao index",
		"description": "",
		"command": "git add <file>"
	},
	{
		"title": "Checkout em commit específico",
		"description": "",
		"command": ""
	},
	{
		"title": "Criar uma tag",
		"description": "",
		"command": "git tag"
	},
	{
		"title": "Visualizar árvore do repositório",
		"description": "Você pode obter uma visualização detalhada da árvore de commits do repositório através do comando",
		"command": "git log --decorate --graph --all --oneline"
	},
	{
		"title": "Apagar modificações de um arquivo",
		"description": "",
		"command": "git checkout -- <file>"
	},
	{
		"title": "Mover commits ",
		"description": "",
		"command": "git rebase"
	},
	{
		"title": "Mesclar branches",
		"description": "",
		"command": "git merge",
		"category": ""
	},
	{
		"title": "Remover arquivo da área de staged",
		"description": "",
		"command": "",
		"category": ""
	},
	{
		"title": "Parar de acompanhar mudanças de um arquivo",
		"description": "",
		"command": "",
		"category": "git update-index"
	},
	{
		"title": "Commit de linhas específicas",
		"description": "",
		"command": "",
		"category": "git add -p <file>"
	},
	{
		"title": "",
		"description": "",
		"command": "",
		"category": ""
	}
]