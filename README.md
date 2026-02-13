# Next.js Portfolio Dashboard

This project has been migrated from Create React App to Next.js (pages router).

## Scripts

- `pnpm dev`: start the Next.js dev server
- `pnpm build`: create a production build
- `pnpm start`: run the production server

If PowerShell execution policy blocks `pnpm`, use `pnpm.cmd` instead.

## Migration Notes

- Replaced `react-scripts` with Next.js.
- Added `pages/_app.js` and `pages/index.js`.
- Moved global CSS imports into `_app.js` (required by Next).
- Updated static image usage to Next-compatible imports (`image.src`).
- Added `next.config.js` with `transpilePackages` for `@iconscout/react-unicons`.

## Known Warning

Next.js may warn about multiple lockfiles and infer a workspace root from another directory.
If desired, remove the extra parent lockfile or set `outputFileTracingRoot` in `next.config.js`.
