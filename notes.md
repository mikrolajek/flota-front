# Notatki

Menu:

- Zarządzaj
  - Linki
  - Produkty
- Dodaj:
  - Produkt
  - Lokacje
  - Sklep
- Użytkownicy
- Raporty

# Extensions

- GraphQL graphql.vscode-graphql
- Prettier

# Co tu się dzieje?

Otóż, na początku projektu odpalamy `yarn codegen`.
Powoduje to, że zbuduje nam się typescript dla graphqlowych endpointów.

Plik `graphql.config.yaml` pozwala nam na execute query z poziomu visual studio code, POD WARUNKIEM ze project `client` jest jako ROOT w panelu po lewej, nie może być kilku folderów, np client, backend. Tylko jako root! (Jest to problem extension który został użyty, aby to działało.)

# TODO

- Dodać pola do opon
- Dodać użytkownika do auta
- Dodać historiowanie użytkowników aut
- Dodać szkody
- Dodać mandaty
- Zmienić aby podpowiadał tylko użytkowników w historii samochodu
