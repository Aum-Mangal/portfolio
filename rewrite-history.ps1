$daysOffsets = @(-10, -8, -8, -7, -7, -7, -5, -4, -4, -2, -1, -1)
$commits = (git log main --reverse --format="%H" -n 12)

# Start a new branch at the very first commit
git checkout -b new-history $commits[0]

# Generate a base date for the first commit
$baseDate = (Get-Date)

$dateStr = $baseDate.AddDays($daysOffsets[0]).ToString("yyyy-MM-ddTHH:mm:ss")
$env:GIT_AUTHOR_DATE = $dateStr
$env:GIT_COMMITTER_DATE = $dateStr
git commit --amend --no-edit --date=$dateStr

for ($i = 1; $i -lt $commits.Length; $i++) {
    git cherry-pick $commits[$i]
    
    # Randomize the time slightly for each commit on the same day
    $dateStr = $baseDate.AddDays($daysOffsets[$i]).AddMinutes($i * 45).ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr
    
    git commit --amend --no-edit --date=$dateStr
}

# Replace main with the new history
git checkout main
git reset --hard new-history
git branch -D new-history

# Force push to GitHub
git push -f origin main
