---
title: Creating your website with GitHub (+ Pages & Workflows) and Hugo
date: 2020-05-15
math: true
diagram: true
tags: ["git", "github", "hugo", "workflows", "branches", "tutorial"]
---

{{< icon name="github" pack="fab" >}} + {{< icon name="github" pack="fab" >}} Pages + {{< icon name="github" pack="fab" >}} Workflows + Hugo == {{< icon name="heart" pack="fas" >}}\
\
GitHub offers a wide spectrum of services. This includes hosting website like this one for users, organizations or projects.\

## Get started with Hugo

Hugo is a static site generator that primarily uses markdown files to generate the content. When it comes to static site generation, Hugo is probably the best and easiest tool to use. Also, it is amazingly fast.\
Install Hugo by using [homebrew](https://brew.sh).

```bash
brew install hugo
```

You should at least be a bit familiar with Hugo and it's features. I recommend using the [`quickstart` guide on gohugo.io](https://gohugo.io/getting-started/quick-start/).

## Create a site

Let's assume that you want to create a new website for you as a person. Go to some directory your website (repository) shall live inside (I have my repos saved under `~/repos`) and invoke:

```bash
# create directory
mkdir $(github.username).github.io
cd $(github.username).github.io
git init

# create empty master branch
git commit -m "init" --allow-empty
git remote add origin git@github.com:$(github.username)/$(github.username).github.io
git push --set-upstream origin master

# create src branch
git checkout src
# create new site in current directory
hugo new site . --force
# add master branch of current repo as submodule that live in the public/ directory
git submodule add -b master git@github.com:$(github.username)/$(github.username).github.io public
git push
```

Make sure to replace the $(github.username) with your GitHub username. This will create an empty `master` branch and checkout the `src` branch locally. This is important because the `master` branch will contain the rendered website content whereas the `src` branch will contain the source files for Hugo.\
The `master` branch is added as submodule in your `src` branch and lives in `public/`, which is the default output directory of Hugo.

## Select a theme

This website was created using the [Academic Theme](https://themes.gohugo.io/academic/). This requires a bit more work. In order to get started, chosse and install a theme like [`ananke`](https://themes.gohugo.io/gohugo-theme-ananke/). For installing the theme, run:

```bash
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
git submodule update
```

This will add the theme to your `themes/` folder. Now you only need to set the `theme` value in your `./config.toml` file to `ananke` and you're ready to go.

## Start Hugo

You should now check whether your website does display something. Run:

```bash
hugo -D server
```

Now open the url+port (usually `localhost:1313`) and check your website. We are not 100% done yet though.

## Automate build

In order to use GitHub Workflows (Actions) to update your website, paste this into your `.github/workflows/pipeline/yml` file:

```yml
name: pipeline
on: 
  push:
    branches:
    - src # only rebuild site if src branch gets changed

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@master
        - name: Setup Hugo
          uses: peaceiris/actions-hugo@v2.2.0
          with:
            hugo-version: '0.68.3'
        - name: Build
          run: hugo -D
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./public
            publish_branch: master

```

The content of that file will build a new site when the `src` branch changes and push everything to the `master` branch.
