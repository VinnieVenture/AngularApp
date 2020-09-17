# AngularApp

### Projekt powstał, aby zademonstrować umiejętności nabyte w 3 kwartale 2020r.

#### W trakcie tworzenia projektu, nabyto wiedzę z zakresu podstawowego, który obejmuje:
* @Input
* @Output
* ngFor
* ngIf
* ngSwitch
* pipes
* Serwisy
* httpClient
* nawigacja pomiędzy komponentami

#### Dodatkowo nabyto wiedzę na temat:
* Co to jest Angular, wady i zalety
* Co to jest komponent
* Zastosowanie każdego z 4 plików tworzonych w trakcie generowania komponentu za pomocą komenty ng g component Name
* router-outlet
* tworzenie backendowego serwera za pomocą ASP.NET Core
* zastosowanie ngClass i ngStyle


Wiedzę czerpano ze źródeł:
* https://angular-university.io/course/getting-started-with-angular2
* https://www.youtube.com/watch?v=Amv0vjMZldw&list=PLpzwMkmxJDUyD-UTGQXuevw0YOPgvroPL&index=1


### Struktura

#### Folder App
* ##### Folder Components:
    * menu - komponent wyświetlany na stałe po lewej stronie aplikacji. Wyświetla elementy zadeklarowane w pliku MenuItems za pomocą pętli ngFor.
    * menu-button - przycisk dla pojedynczego elementu z menuItems. Wykorzystuje serwis, aby przesłać informację na jaki komponent powinna zmienić się główna część aplikacji.

#### Folder Services
* change-main-content-service.ts - serwis do przesyłania informacji wykorzystywanej w routingu na głównej części aplikacji.
* change-main-content-service.spec.ts - testy do serwisu

#### Folder Helpers
* .

#### Folder Models
* menuItems.ts - zawiera zadeklarowaną strukturę obiektu MenuItem za pomocą interfejsu, a także tablicę MenuItemów z wypełnionymi informacjami. Dodatkowo zawiera funkcję wyszukującą MenuItem'y za pomocą id.


### Historia:
#### 1. Creating menu
   Dorzucenie dwóch nowych komponentów: menu i menu-button.
    Menu button powstał z myślą o swobodnej możliwości edytowania i dodawania zawartości, 
      a także czytelniejszego kodu.
   To w tym komponencie będzie wysyłana do serwisu nazwa komponentu, 
      który ma się wyświetlić na głównej części strony.

   #### Nabyte umiejętności:
   * tworzenie nowych komponentów za pomocą komendy ng g component Name
   * wyświetlanie treści za pomocą
   * wykorzystanie @input - wysyłanie obiektu menu -> menu-button
   * wykorzystanie ngStyle - edytowanie stylów przycisków na podstawie danych uzyskanych 
     za pomocą pola w menu-button
   * wykorzystanie router-outlet
   * tworzenie stałych danych, możliwych do zaimportowania w całym projekcie - MenuItems
   * wykorzystanie podstawowej wersji *ngFor (let item of menuItems)

#### 1. Creating service
   Dorzucenie serwisu change-main-content-service, który powstał z myślą o przesyłaniu informacji pomiędzy menu, 
      a głównym kontentem aplikacji. Zawiera dwie metody:

   NavigateTo(componentName: string) typu void
   GetNameToNavigate() zwracającą obiekt Observable

   NavigateTo jest wywoływana po kliknięciu przycisku w menu i ustawia prywatne pole typu string, 
    na przesłany przez metodę link do component'u.
   GetNameToNavigate jest wywoływana w głównej części aplikacji w metodzie OnInit, zapewniającą, 
    że od razu po załadowaniu strony, będzie nasłuchiwać na metodę GetNameToNavigate, która jest w tym miejscu subskrybowana.

   ### Nabyte umiejętności:
   * tworzenie serwisów
   * zapoznanie z atrybutem @Injectable
   * poznanie nowego typu Observable
   * subskrybowanie metod z serwisów
   * wykorzystanie nawigacji pomiędzy stronami za pomocą Router i serwisu

