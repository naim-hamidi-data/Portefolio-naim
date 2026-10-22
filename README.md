# Portfolio — Naïm HAMIDI

Page en anglais, responsive, inspirée de la capture fournie : fond quadrillé discret, deux cartes de projets, thème clair/sombre mémorisé, contacts et téléchargement du CV.

## Fichiers

- `index.html` : tout le code HTML, CSS et JavaScript. Aucune installation nécessaire.
- `assets/CV_Naim_Hamidi.pdf` : copie du CV déjà proposé sur votre portfolio au moment de la création. Son contenu et sa langue n'ont pas été modifiés.
- `.nojekyll` : permet à GitHub Pages de servir les fichiers directement.

## Voir le résultat avant publication

Décompressez le ZIP puis ouvrez `index.html` dans votre navigateur. Le CV fonctionne si vous conservez le dossier `assets` à côté du fichier HTML. Le bouton clair/sombre fonctionne localement ; la mémorisation dépend du navigateur pour les pages ouvertes en fichier local.

## Remplacer la page sur GitHub Pages

1. Gardez une copie de votre ancien `index.html`.
2. Ouvrez le dépôt `naim-hamidi-data/Portefolio-naim`.
3. Remplacez `index.html` dans le dossier déjà utilisé pour GitHub Pages (normalement la racine).
4. Ajoutez le dossier `assets` et le fichier `.nojekyll` au même endroit. Téléversez les fichiers décompressés, pas le ZIP ni un dossier parent supplémentaire.
5. Enregistrez les modifications avec **Commit changes**. Gardez la configuration GitHub Pages existante.
6. Une fois le déploiement terminé, ouvrez https://naim-hamidi-data.github.io/Portefolio-naim/ et actualisez avec Ctrl + F5 si nécessaire.

Vous pouvez conserver les anciens dossiers de projets : ils ne sont plus affichés sur la nouvelle page, mais leurs URL restent disponibles. Aucun changement n'a été envoyé à votre dépôt automatiquement.

## Modifier le contenu

Tout est dans `index.html`. Recherchez les textes visibles pour les modifier.

- Identité : `Naïm HAMIDI` et `Agricultural Engineer · AgTech`.
- Stage : `Looking for an internship · Summer 2027`.
- Slogan : `Building resilient agriculture.` et `Empowering farmers’ choices.`.
- CV : remplacez `assets/CV_Naim_Hamidi.pdf` en conservant le même nom.
- Email, GitHub et LinkedIn : liens en bas du fichier, dans `<footer>`.

## Ajouter un projet

Dans `<div class="project-grid">`, copiez un bloc complet depuis `<article>` jusqu'à `</article>` et collez-le après le dernier projet, avant le `</div>` de cette grille.

Modifiez son `href`, son `aria-label`, son titre `<h3>` et sa description `<p class="description">`. Les cartes s'organisent automatiquement sur deux colonnes sur ordinateur et une colonne sur mobile.

## Thème

Le premier affichage suit la préférence claire/sombre de l'appareil. Le bouton en haut à droite mémorise ensuite le choix dans le navigateur. Aucun cookie, suivi ni service externe n'est nécessaire pour afficher la page. Pour revenir au choix automatique, supprimez la clé `naim-portfolio-theme` du stockage local du site.
