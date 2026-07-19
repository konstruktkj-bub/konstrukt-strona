# KONSTRUKT — Budownictwo i Inwestycje

Jednostronicowa strona wizytówkowa firmy budowlanej KONSTRUKT, gotowa do publikacji na GitHub Pages.

## Struktura plików

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── logo.png
└── README.md
```

## Jak opublikować na GitHub Pages

1. Zaloguj się na GitHub jako **konstruktkj-bub** i załóż nowe repozytorium, np. o nazwie `konstrukt-strona`.
2. Wgraj do niego **wszystkie pliki z tego folderu** (zachowując strukturę katalogów `css/`, `js/`, `images/`).
   - Przez przeglądarkę: na stronie repo kliknij **Add file → Upload files**, przeciągnij folder/pliki i zatwierdź (**Commit changes**).
   - Przez terminal:
     ```bash
     git init
     git add .
     git commit -m "Pierwsza wersja strony KONSTRUKT"
     git branch -M main
     git remote add origin https://github.com/konstruktkj-bub/konstrukt-strona.git
     git push -u origin main
     ```
3. W repozytorium wejdź w **Settings → Pages**.
4. W sekcji **Build and deployment → Source** wybierz **Deploy from a branch**.
5. Jako branch wybierz **main** i folder **/ (root)**, kliknij **Save**.
6. Po chwili (1–2 min) strona będzie dostępna pod adresem:
   `https://konstruktkj-bub.github.io/konstrukt-strona/`

   > Jeśli zamiast `konstrukt-strona` nazwiesz repozytorium dokładnie `konstruktkj-bub.github.io`, GitHub Pages włączy się automatycznie (bez ręcznego ustawiania Source), a strona pojawi się pod adresem `https://konstruktkj-bub.github.io/` — bez dodatkowego członu w linku.

## Edycja treści

- Dane kontaktowe (telefon, e-mail) występują w kilku miejscach w `index.html` — szukaj `603263909` i `konstruktkj@gmail.com`.
- Kolory i typografię zmienisz w `css/style.css`, w sekcji `:root` na górze pliku.
- Logo podmienisz podmieniając plik `images/logo.png` (zachowaj tę samą nazwę albo zaktualizuj ścieżkę w `index.html`).
