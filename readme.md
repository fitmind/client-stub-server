# Fitmind Stub Server

## Install dependencies

```bash
yarn
```

## Running on Dev Mode

All the files changed inside src/\*\*.ts will trigger a rebuild except the tests files, this will run on port 9999

```bash
yarn dev
```

In case you are not using an IDE you will have to run a type checker in the background to know when you have errors

```bash
yarn type-check:watch
```

| Highly recommend running prettier when you perform changes in order to format the code

### Prettier format all

```bash
yarn prettier:all
```

### Prettier on watch mode

```bash
yarn prettier:watch
```

### Prettier check if needs formatting

```bash
yarn prettier:check
```

### Running lint check

```bash
yarn lint
```

### Running lint fix

```bash
yarn lint:fix
```
