# 1. Clear out any other files you might have accidentally staged
git reset

# 2. Stage ONLY the specific file you want to push
git add path/to/your/file.ext

# 3. Double-check your status (your file should be green; others should be red)
git status

# 4. Commit just that single file
git commit -m "Update specific file only"

# 5. Push the commit to your remote repository
git push
