$groups = @(
    "package.json package-lock.json yarn.lock pnpm-lock.yaml .gitignore README.md tsconfig.json .eslintrc.json components.json next.config.mjs postcss.config.mjs tailwind.config.ts",
    "public/",
    "src/lib/ src/hooks/ src/types/",
    "src/data/config.ts",
    "src/data/constants.ts",
    "src/data/projects.tsx",
    "src/components/ui/",
    "src/components/header/ src/components/footer/ src/components/social/",
    "src/components/sections/ src/components/animated-background*",
    "src/app/ src/content/ chat-server/"
)

$messages = @(
    "Initial project setup and config",
    "Add public assets and media",
    "Add shared utilities, hooks, and types",
    "Configure site metadata and social links",
    "Define skills, experiences, and achievements",
    "Add project data and thumbnails",
    "Implement base UI components",
    "Build header, footer, and navigation",
    "Develop main page sections and animated background",
    "Finalize app routing, blog content, and chat server"
)

# Start 10 days ago
$startDate = (Get-Date).AddDays(-9)

for ($i = 0; $i -lt $groups.Length; $i++) {
    $date = $startDate.AddDays($i).ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    
    # Add the files for this group
    $files = $groups[$i] -split ' '
    foreach ($file in $files) {
        if (Test-Path $file) {
            git add $file
        }
    }
    
    # Also add any random remaining untracked files on the last commit
    if ($i -eq 9) {
        git add .
    }
    
    # Commit with the specific date
    git commit -m $messages[$i]
}

Write-Host "10 commits created across the last 10 days!"
Write-Host "To push them to your repository, run:"
Write-Host "git remote add origin <your-repo-url>"
Write-Host "git branch -M main"
Write-Host "git push -u origin main"
