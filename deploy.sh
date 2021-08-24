#!/usr/bin/env sh

# 终止一个错误
set -e

# 生成静态资源
yarn docs:build
# 进入生成的构建文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:xuyanghong/xuyanghong.github.io.git master:gh-pages

cd -