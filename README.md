Airtable CLI
============

Unofficial command line interface for [Airtable](https://airtable.com).

To install:

```sh
npm install --global airtable-cli
```

Add a new record
----------------

Basic usage:

```sh
airtable add --api-key key_YOUR_API_KEY --base appYOUR_BASE_ID --table TABLE_NAME 'Field name 1' 'Field value 1' 'Field name 2' 'Field value 2'
```

Add an alias:

```sh
# in your bashrc/zshrc:
todo () {
  airtable add --api-key key_YOUR_API_KEY --base appYOUR_BASE_ID --table Tasks 'Task title' "$1"
}

# at the command prompt
todo 'eat 100 hot dogs'
```
