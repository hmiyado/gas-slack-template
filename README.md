# gas-slack-template

## Set up

### Set up new repository

```
$ git clone --bare https://github.com/hmiyado/gas-slack-template.git
$ cd gas-slack-template
$ git push --mirror https://github.com/exampleuser/new-repository.git
$ cd .. && rm -rf gas-slack-template
```

### Set up clasp ( Google App Script)

```
$ cp template.clasp.json .clasp.json
# enter scriptId in .clasp.json
$ vi .clasp.json
# fix name
$ vi package.json

$ clasp login
$ clasp push
$ clasp open
```

### Set up editor

```
$ yarn install
```
