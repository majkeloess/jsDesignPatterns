# Factory

Factory jest często stosowany, gdy mamy kilka podobnych obiektów, ale ich logika tworzenia różni się w zależności od warunków lub potrzeb użytkownika.

## Plusy

- Zwiększa elastyczność: Pozwala na tworzenie obiektów różnych typów w sposób dynamiczny, zależnie od kontekstu.
- Wspiera polimorfizm: Klient nie musi znać konkretnej klasy, wystarczy mu znajomość interfejsu lub klasy bazowej.

## Minusy

- Zwiększa złożoność: Dodaje nową klasę dla każdej konkretnej implementacji fabryki, co może prowadzić do nadmiaru kodu w większych projektach.

## Kiedy używać

- Kiedy istnieje potrzeba tworzenia obiektów w sposób dynamiczny, bez znajomości konkretnego typu.
- Gdy tworzenie obiektów wymaga logiki lub konfiguracji, którą można zamknąć w osobnych klasach fabryk.
