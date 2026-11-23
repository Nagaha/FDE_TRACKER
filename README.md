# FDE 90-Day Learning Tracker

A static, dependency-free dashboard for a 90-day journey to become a Forward Deployed Engineer. Built with HTML5, CSS3 and vanilla JavaScript.

## Features

- 90 individual days across 6 phases, with subtopics, objectives, practical tasks and time estimates
- Dashboard with overall, phase, week and day progress
- Day navigation, expandable roadmap, clickable day cards and search
- Skip or postpone a day without marking it complete
- Project milestones and project notes for three portfolio builds
- Daily notes with four sections, saved automatically
- Start date, computed current learning day, light/dark theme
- Two independent learning profiles: Naga and Karthick
- Read-only comparison of both profiles on the dashboard
- Export, import and reset with confirmation, scoped to the active profile

## How to run

Open `index.html` directly in a modern browser (Chrome, Edge, Firefox or Safari). No server, build step, install or internet connection is required for the tracker itself; resource links open external documentation.

Optionally, serve the folder locally, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Profiles

Naga is the default active profile. Use the **Naga / Karthick** buttons in the dashboard header to switch without reloading. Each profile has its own:

- completed subtasks and completed days
- skipped/postponed day status
- daily notes and project notes
- project milestone completion
- start date, current learning day and learning statistics
- selected day and expanded roadmap phases

Both profiles use the same 90-day curriculum. The theme is shared across profiles. The active profile and theme are remembered across refreshes.

### localStorage keys

- `fde_tracker_naga` - Naga's profile data
- `fde_tracker_karthick` - Karthick's profile data
- `fde_tracker_active_profile` - which profile was last selected
- `fde_tracker_theme` - shared light/dark preference

Older installs used `fdeTracker.v1`. On first run with the profile version, that data is copied into `fde_tracker_naga` if Naga has no saved data yet; the old key is left untouched. Fresh installs start both profiles at zero progress.

Stored profile data includes checked subtasks, skipped/postponed days, notes, project milestones, start date, selected day and expanded phases. Completed days and all percentages are derived from checked subtasks, never stored as separate flags. Nothing is reset automatically. If saved data is missing or corrupted, the tracker safely falls back to an empty state for that profile.

Data is local to the browser. Clearing site data or using a different browser removes access to it, so export a backup when switching devices.

## Export and import progress

Export and import always apply to the currently selected profile.

1. Open **Dashboard** and select the profile you want to back up.
2. Click **Export JSON** to download a dated backup. The file contains `profileId`, `profileName` and a `state` object with that profile's progress.
3. To restore, select the target profile, click **Import JSON**, choose the backup file and confirm the dialog.

Import replaces only the selected profile's progress. Files exported from either profile can be imported into either profile. Invalid files are rejected without changing saved data.

## Reset the tracker

On the **Dashboard**, select the profile to clear, then click **Reset progress** and confirm the dialog. Only that profile's subtasks, day statuses, notes, milestones and start date are cleared; the other profile is never affected. Export a backup first if you may want the data later.

The **Profile comparison** card is read-only and cannot modify either profile.

## Files

- `index.html` - semantic markup for all sections
- `style.css` - responsive layout, dark/light themes, progress bars and cards
- `app.js` - curriculum data, state management, calculations and UI behavior
- `README.md` - this guide
