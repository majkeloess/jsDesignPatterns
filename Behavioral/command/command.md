# Command

Command Pattern pozwala enkapsulować wywołanie operacji jako obiekt. Dzięki temu można tworzyć złożone sekwencje poleceń, zapisywać je, cofać, a także w łatwy sposób dodawać nowe polecenia bez zmiany kodu, który je wywołuje.

## Plusy

- Rozdzielenie wywołania od implementacji: Klient (wywołujący) nie musi znać szczegółów wykonania operacji – wystarczy mu wiedza o interfejsie komendy.
- Wsparcie dla operacji odwracalnych: Możliwość implementacji operacji undo, co jest przydatne w edytorach tekstu, grach czy aplikacjach z wieloma stanami.
- Zapis i kolejkowanie poleceń: Polecenia można zapisywać i wykonywać w odpowiednim momencie, a także przechowywać ich historię do późniejszego odtworzenia.

## Minusy

- Złożoność: Command Pattern może wprowadzać nadmiar klas, szczególnie jeśli każda operacja wymaga własnej klasy komendy.
- Więcej kodu do zarządzania: Każde nowe polecenie dodaje kolejną klasę, co może zwiększyć rozmiar i złożoność projektu.

## Kiedy używać

- W przypadku operacji odwracalnych (undo/redo): W aplikacjach, gdzie użytkownik może cofać i powtarzać akcje.
- W systemach kolejkowania poleceń lub rejestracji zdarzeń: Przykłady to aplikacje bankowe, gry i edytory, gdzie polecenia można przechowywać do późniejszego wykonania.
- Gdy chcesz rozdzielić kod wykonujący od kodu zarządzającego poleceniami: Command Pattern pozwala na łatwe modyfikacje bez ingerencji w główną logikę aplikacji.

## TypeScript code

### Interfejs Command:

- Command jest interfejsem, który deklaruje metodę execute. Każda klasa implementująca ten interfejs będzie miała własną wersję execute, definiującą, jakie polecenie ma być wykonane.
- Użycie interfejsu umożliwia łatwe rozszerzanie aplikacji o nowe polecenia, ponieważ wszystkie będą musiały implementować execute.

### Klasa SimpleCommand:

- SimpleCommand to klasa, która implementuje Command. Realizuje prostą operację: wypisanie tekstu przekazanego w konstruktorze.
- Dzięki temu prostemu poleceniu można zrealizować podstawowe operacje bez konieczności angażowania bardziej skomplikowanych obiektów.

### Klasa ComplexCommand:

- ComplexCommand to bardziej zaawansowana wersja komendy, która deleguje wykonanie zadania do innego obiektu zwanego odbiorcą (ang. receiver).
- W tej klasie ComplexCommand posiada referencję do Receiver (obiektu, który wykonuje rzeczywiste operacje) oraz dodatkowe dane (a i b), które są wymagane, aby odbiorca mógł wykonać operacje.
  execute w ComplexCommand wywołuje metody Receivera (doSomething i doSomethingElse), które wykonują bardziej złożone operacje.

### Klasa Receiver:

- Receiver jest obiektem, który wykonuje rzeczywiste operacje biznesowe. Ma metody doSomething oraz doSomethingElse, które przyjmują dane i wykonują z nimi odpowiednie zadania.
- ComplexCommand używa Receivera do delegowania operacji, umożliwiając ComplexCommand wykonywanie bardziej skomplikowanych działań.

### Klasa Invoker:

- Invoker zarządza wykonywaniem komend. Przechowuje referencje do komend onStart i onFinish, które można ustawić przez setOnStart i setOnFinish.
- Invoker wywołuje te komendy przed i po wykonaniu swojej własnej kluczowej operacji (doSomethingImportant). Dzięki temu można dodawać dodatkowe działania (np. logowanie, walidację) bez zmiany logiki w Invoker.
- Invoker nie zna szczegółów implementacji Command ani Receiver, co sprawia, że jest niezależny od konkretnych poleceń.
