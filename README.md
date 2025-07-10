# Obsidian tools

This is a set of commands that allow me to more easily and conveniently manage my Obsidian vault.

## Getting started

1. Create a `.env` file in the root directory of your local copy of this repo, and add the following key/value pairs:

    - `OBSIDIAN_VAULT_PATH`
    - `OBSIDIAN_ARTICLES_DIR`
    - `OBSIDIAN_BOOKS_DIR`
    - `OBSIDIAN_COURSES_DIR`
    - `OBSIDIAN_VIDEOS_DIR`

## Feature ideas

- [ ] Add a "create folder file" command.
- [ ] Generate TypeScript types for "content types" based on the Frontmatter of the files in the templates directory (consider discriminated unions).
- [ ] Ability to generate notes of a given content type based on a directory in my Google Drive (e.g. books).
- [ ] Ability to reorder the Frontmatter properties of every file using a certain content type.