# Projecte: Boored Web Aplication for Hackaton Saló de l'ocupació 2024

## Descripció
Aplicació responsive d'una sola plana web la qual et dona outputs per a matar l'aborriment.


## Funcionalitats

- **Generar text aleatori**: Si prems el botó de generar, et donarà una frase aleatoria.
- **Filtres segos tipus d'activitat**: Es poden aplicar filtres per a cercar una activitat en l'areà més desitjada. A cada us dels filtres es reinicia a el mode aleatori.


## Estructura

El projecte es basa en una separació de dos canvas, el qual tenen les seves propies funcionalitats i es van passant la informació a traves de un contexte que sería la URL a la cual consulta la API. 
Al canvas de l'avatar hi trobem la logica que aplica els filtres i que s'executa al fer click sobre el botó de generació, per l'altra banda, al canvas de l'activitat hi trobem la lógica de la consulta a la API en funció de l'establert. 

- **Ús de React Hooks (`useState`, `useEffect`, `UseContext`)** 
  
## Instalació

1. Clona el repositori:
    ```bash
    git clone https://github.com/danipoal/ProvaTecnicaHackato2024.git
    ```
2. Instala las dependencies:
    ```bash
    npm install
    ```
3. Executa el projecte:
    ```bash
    npm run dev
    ```

## Tecnologies

- **React-Vite**: El framework principal utilizat.
- **CSS**: Per el disseny visual. 

