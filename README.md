# Portfolio — Naïm HAMIDI

Version « carnet de terrain » : fond blanc à petits carreaux, croquis discrets de tarière, terre, capteur, drone et télédétection, contenu centré, trois projets, CV et mode clair/sombre.

## Installer sur GitHub Pages

1. Décompressez le ZIP et ouvrez `index.html` dans votre navigateur pour voir le résultat.
2. Dans votre dépôt `naim-hamidi-data/Portefolio-naim`, remplacez `index.html` dans le dossier utilisé par GitHub Pages.
3. Ajoutez les fichiers du dossier `assets` au même endroit. `assets/field-notebook.webp` contient les croquis et doit être téléversé. Conservez aussi le CV et le PDF QGIS.
4. Ajoutez `.nojekyll` si nécessaire et enregistrez avec **Commit changes**. Conservez votre configuration GitHub Pages actuelle.
5. Après le déploiement, actualisez avec Ctrl + F5 si besoin.

L'ancienne photo `agtech-workspace.webp` n'est plus utilisée. Vous pouvez la laisser dans votre dépôt sans incidence.

## Fichiers

- `index.html` : code HTML, CSS et JavaScript complet, sans installation.
- `assets/field-notebook.webp` : croquis originaux créés par IA sur fond transparent, optimisés pour le web.
- `assets/CV_Naim_Hamidi.pdf` : CV précédemment lié sur votre site.
- `assets/carto-risk.pdf` : carte QGIS originale.
- `.nojekyll` : service direct des fichiers sur GitHub Pages.

## Modifier le portfolio

Les textes et les liens sont dans `index.html`. Pour ajouter un projet, dupliquez un bloc `<article>…</article>` dans `<div class="project-grid">`, puis modifiez le titre, la description, le lien et son `aria-label`. La classe `project-wide` fait occuper deux colonnes à une carte sur ordinateur : retirez-la pour une carte standard.

Pour mettre à jour le CV, remplacez `assets/CV_Naim_Hamidi.pdf` en gardant le même nom. Les contacts sont dans `<footer>`.

Les croquis alternent en descendant : tarière à gauche, drone à droite, capteur à gauche, écran à droite. Sur ordinateur, ils occupent les marges et défilent avec la page. Sur écran étroit, ils sont intercalés dans le contenu avec la même alternance. Ils sont décoratifs et ignorés par les lecteurs d'écran.

Le thème suit l'appareil à la première visite puis mémorise le choix du bouton soleil/lune. Aucun cookie ni service externe n'est nécessaire. Le site n'a pas été publié automatiquement.
