# Add Chapter 5 and Deployment Workflow

## Goal Description
The user wants to integrate the newly written Chapter 5 into the game and ensure that after completing it, the game displays a "To Be Continued" message instead of a generic ending. Additionally, the user wants to automate the deployment of the game to GitHub Pages upon pushing to the repository.

## User Review Required
> [!IMPORTANT]
> The deployment workflow assumes the repository is hosted on GitHub and the user has enabled GitHub Pages in the repository settings (Source: GitHub Actions).

## Proposed Changes

### Game Content

#### [MODIFY] [index.html](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/%E5%BE%8C%E5%AE%AE%E7%8F%8D%E9%82%84%E8%B3%BA/index.html)
- Add `<script src="chapters/chapter5.js"></script>` to the script loading section.

#### [MODIFY] [chapters/endings.js](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/%E5%BE%8C%E5%AE%AE%E7%8F%8D%E9%82%84%E8%B3%BA/chapters/endings.js)
- Add a new ending type `tbc` (To Be Continued) with a message indicating the story is still being updated.

#### [MODIFY] [game.js](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/%E5%BE%8C%E5%AE%AE%E7%8F%8D%E9%82%84%E8%B3%BA/game.js)
- Add `chapter5` to the `gameData.chapters` array.
- Update the `nextDialogue` function to show the `tbc` ending when the current chapter is the last one.

### Deployment

#### [NEW] [.github/workflows/deploy.yml](file:///d:/OneDrive%20-%20%E5%8F%B0%E7%81%A3%E7%B2%BE%E6%9D%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/python/%E5%BE%8C%E5%AE%AE%E7%8F%8D%E9%82%84%E8%B3%BA/.github/workflows/deploy.yml)
- Create a GitHub Actions workflow to deploy the static site to GitHub Pages.

## Verification Plan

### Manual Verification
- **Chapter Loading**: Check if `chapter5.js` is loaded in `index.html`.
- **Game Logic**: Verify `game.js` has `chapter5` in the list and transitions to `tbc` ending.
- **Deployment**: Since I cannot push to the user's GitHub, I will verify the YAML syntax is correct. The user will need to push and check the Actions tab on GitHub.
