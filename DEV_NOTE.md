# Dev note

## Continue from

https://nextjs.org/learn/pages-router/data-fetching-request-time

## see file structures

```bash
find . -maxdepth 3 \( -name node_modules -o -name .next -o -name .git -o -name .idea \) -prune -o -print
```

```cmd
Get-ChildItem -Recurse -Depth 3 | Where-Object { $_.FullName -notmatch '\\(node_modules|\.next|\.git|\.idea)($|\\)' } | Get-RelativePath

Get-ChildItem -Recurse -Depth 3 | Where-Object { $_.FullName -notmatch '\\(node_modules|\.next|\.git|\.idea)($|\\)' } | ForEach-Object { $p = Resolve-Path -Relative $_.FullName; if ($p) { $p } else { $_.Name } }
```

## Github heatmap error