# Singleton

Singleton zapewnia, że dana klasa ma tylko jedną instancję i udostępnia globalny punkt dostępu do tej instancji. Jest używany, gdy potrzebny jest dokładnie jeden obiekt do koordynowania działań w systemie.

## Plusy

- Kontrola nad liczbą instancji: Gwarantuje istnienie tylko jednej instancji klasy w całej aplikacji.
- Globalny punkt dostępu: Ułatwia dostęp do instancji z dowolnego miejsca w kodzie.
- Lazy initialization: Instancja jest tworzona dopiero w momencie pierwszego wywołania getInstance(), co może być korzystne dla wydajności.

## Minusy

- Naruszenie zasady Single Responsibility: Klasa Singleton łączy w sobie logikę biznesową oraz kontrolę tworzenia instancji.
- Trudności w testowaniu: Singletony mogą utrudniać testy jednostkowe ze względu na stan globalny i zależności między testami.
- Ukryte zależności: Mogą wprowadzać niejawne zależności między komponentami systemu, co utrudnia utrzymanie kodu.
- Problemy z wielowątkowością: W środowiskach wielowątkowych konieczne jest zapewnienie bezpiecznego dostępu do instancji, co może skomplikować implementację.
- Globalny stan: Wprowadzenie globalnego stanu może prowadzić do niespodziewanych efektów ubocznych.

## Kiedy używać

- Gdy musi istnieć dokładnie jedna instancja klasy, np. menedżer konfiguracji, rejestr logowania, połączenie z bazą danych.
- Kiedy potrzebny jest globalny punkt dostępu do zasobów lub usług w aplikacji.
- W sytuacjach, gdy zasoby są kosztowne w tworzeniu i powinny być współdzielone.
