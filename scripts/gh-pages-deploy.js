const execa = import('execa')

;(async () => {
  try {
    const { stdout: currentBranch } = await execa.command('git branch --show-current')
    await execa.command('git checkout --orphan gh-pages')
    await execa.command('yarn build', { stdio: 'inherit' })

    // Idée de https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages
    await execa.command('cp dist/index.html dist/404.html')

    // Idée de https://stackoverflow.com/questions/66311145/github-pages-custom-domain-settings-gets-reset-during-new-commit
    // Afin de garder le domaine réseau-constellation.ca dans le déploiement Github
    await execa.command('touch dist/CNAME')
    // await execa.command('echo "អេកូលែន.km" > dist/CNAME', { stdio: 'inherit', shell: true })
    await execa.command('ls dist', { stdio: 'inherit' })
    await execa.command('cat dist/CNAME', { stdio: 'inherit' })

    await execa.command('git --work-tree dist add --all')
    await execa.command('git --work-tree dist commit -m "gh-pages"')

    await execa.command('git push origin HEAD:gh-pages --force', { stdio: 'inherit' })
    await execa.command('rm -r dist')
    await execa.command(`git checkout -f ${currentBranch}`)
    await execa.command('git branch -D gh-pages')

  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
