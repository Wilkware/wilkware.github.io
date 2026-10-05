# wilkware.github.io

Projektübersicht aller Open-Source-Projekte von Wilkware – Module, Kacheln und Skins für Symcon sowie Bridges und Tools rund ums Smart Home.

➡️ **https://wilkware.github.io**

Die Seite wird mit [Hugo](https://gohugo.io) erzeugt und per GitHub Actions auf GitHub Pages veröffentlicht. Sie kommt ohne Theme und ohne externe CSS-Frameworks aus.

## Projekt hinzufügen

Jedes Projekt ist eine Markdown-Datei mit Front Matter. Der Ordner bestimmt die Sprache (Badge auf der Karte), das Feld `category` den Filter.

```sh
hugo new content PHP/meinmodul.md
```

```yaml
---
title: Mein Modul (My Module)
date: 2026-01-01                  # Anlagedatum des Repositories
category: modul                   # modul | kachel | skin | bridge | tool
description: Ein Satz, was das Projekt macht.
link: https://github.com/Wilkware/MyModule
docs: https://wilkware.de/ip-symcon-module/mein-modul/   # optional
image: https://opengraph.githubassets.com/1/Wilkware/MyModule
---
```

| Ordner | Sprache |
| ------ | ------- |
| `content/PHP` | PHP (Symcon Module) |
| `content/CSS` | CSS (Skins) |
| `content/HTML` | HTML |
| `content/JS` | JavaScript (Node.js) |
| `content/TS` | TypeScript |

Weitere Sprachen brauchen nur einen neuen Ordner und eine Badge-Farbe (`.badge--<ordner>`) in [assets/css/main.css](assets/css/main.css).
Kategorien werden in [config.toml](config.toml) unter `params.categories` gepflegt. Projekte, die jünger als `params.newMonths` Monate sind, erhalten automatisch ein „Neu“-Badge.

Ein Eintrag lässt sich mit `exclude: true` ausblenden, ohne ihn zu löschen.

## Lokal starten

Benötigt [Hugo](https://gohugo.io/installation/) ab Version 0.158 (der Workflow baut mit 0.167.0).

```sh
hugo server
```

Danach ist die Seite unter http://localhost:1313 erreichbar. Gefilterte Ansichten lassen sich direkt verlinken, z. B. `#kachel`.

## Automatisierung

| Workflow | Zweck |
| -------- | ----- |
| [gh-pages.yml](.github/workflows/gh-pages.yml) | Baut und veröffentlicht die Seite bei jedem Push auf `main` sowie wöchentlich. |
| [check-repos.yml](.github/workflows/check-repos.yml) | Prüft wöchentlich, ob es öffentliche Repositories ohne Eintrag gibt, und meldet sie in einem Issue. Ausnahmen stehen in [.github/repo-ignore.txt](.github/repo-ignore.txt). |

## Lizenz

MIT, siehe [LICENSE](LICENSE).
