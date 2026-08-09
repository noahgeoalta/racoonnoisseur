# Racoonnoisseur 🦝

A phone-friendly study tool for memorizing a restaurant's menu — wine list, cocktails/mocktails, and food menu, with flashcards, a customer-question quiz game, and weak-spot review. Dish and drink names/ingredients are kept exactly as printed on the real menu; only the restaurant's own name has been left out of this README and the app's UI text.

## Modes

- **Study** — flip-card browsing of every wine, cocktail, and food item. Filter by category, shuffle order.
- **Quiz** — multiple-choice questions styled after real guest questions ("what's in this?", "what pairs with that?", "what else is like this?", allergy checks). Pick a category and length.
- **Review** — anything missed in Quiz mode shows up here for extra drilling until answered correctly twice in a row.
- **Reference** — full-text search across every item's ingredients, allergens, and flavour notes — handy as an actual on-shift lookup.

## Editing the menu data

All menu content lives in [`data.js`](data.js) as three plain arrays: `WINES`, `COCKTAILS`, `FOOD`. Each item is a plain object — add, edit, or remove entries directly there; the app picks up changes automatically, no build step required. Keep the `tags` array on each item roughly accurate — it drives the "guest loved X, what else might they like?" quiz questions.

## Running locally

No build step. Just serve the folder statically, e.g.:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. (Opening `index.html` directly via `file://` also works in most browsers.)

## Redeploying to GitHub Pages

This repo is already wired up to GitHub Pages from the `main` branch. To publish a change:

```bash
git add -A
git commit -m "Update menu data"
git push
```

Pages rebuilds automatically within a minute or two.
