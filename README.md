# KONSTRUKT — Budownictwo i Inwestycje

Jednostronicowa strona wizytówkowa firmy budowlanej KONSTRUKT, gotowa do publikacji na GitHub Pages.

## Pliki (wszystkie w jednym, głównym folderze — bez podfolderów)

```
├── index.html
├── style.css
├── script.js
├── logo.png
└── README.md
```

## Jak naprawić istniejące repozytorium `konstrukt-strona`

Masz tam teraz pliki "płasko" (bez folderów `css/`, `js/`, `images/`), dlatego strona wygląda czarno-biało — `index.html` szukał plików pod ścieżkami `css/style.css` i `images/logo.png`, których nie było.

**Najprościej: podmień pliki na te z tej paczki.**

1. Wejdź na `https://github.com/konstruktkj-bub/konstrukt-strona`
2. Usuń stare pliki `style.css`, `script.js`, `logo.png`, `index.html` (jeśli już tam są) — albo po prostu wgraj nowe, nadpisując je (GitHub zapyta, czy nadpisać).
3. Kliknij **Add file → Upload files**.
4. Przeciągnij **4 pliki**: `index.html`, `style.css`, `script.js`, `logo.png` — luzem, bez folderów.
5. Na dole kliknij **Commit changes**.
6. Poczekaj ok. 1 minutę i odśwież `https://konstruktkj-bub.github.io/konstrukt-strona/` (najlepiej z twardym odświeżeniem: **Ctrl+Shift+R** / **Cmd+Shift+R**, żeby przeglądarka nie pokazała starej wersji z pamięci podręcznej).

## Edycja treści

- Dane kontaktowe (telefon, e-mail) występują w kilku miejscach w `index.html` — szukaj `603263909` i `konstruktkj@gmail.com`.
- Kolory i typografię zmienisz w `style.css`, w sekcji `:root` na górze pliku.
- Logo podmienisz, wgrywając nowy plik o nazwie `logo.png` (ta sama nazwa = nie trzeba nic zmieniać w `index.html`).
