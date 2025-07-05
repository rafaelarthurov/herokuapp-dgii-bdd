# DGII - Login Automation BDD (Herokuapp)

Este proyecto implementa la automatización de pruebas BDD (Behavior Driven Development) con **CodeceptJS** y **Playwright**, para validar escenarios de login en el portal de ejemplo Herokuapp. Forma parte de una práctica técnica solicitada por la Dirección General de Impuestos Internos (DGII).

---

## 🚀 Tecnologías utilizadas

- Node.js 🌳
- CodeceptJS 🤖
- Playwright 🎭
- Gherkin (BDD) 📝
- Allure Reporter 📊

---

## 🗂️ Estructura del proyecto

```plaintext
/tests
  /features
    login.feature
  /steps
    login.steps.js
  /pages
    LoginPage.js
/support
  data.json
.gitignore
codecept.conf.js


## 📝 Definición de cada repositorio
- features/ → archivos .feature escritos en Gherkin
- steps/ → definición de pasos de Gherkin
- pages/ → objetos de página reutilizables
- support/ → archivos de datos
- output/ → se crea automáticamente al ejecutar los tests
```
---

## ⚙️ Instalación

1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/rafaelarthurov/herokuapp-dgii-bdd.git
cd herokuapp-dgii-bdd
```

2️⃣ Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución de las pruebas

Para ejecutar todas las pruebas con navegador visible:
```bash
npx codeceptjs run
```
Si prefieres modo headless:
```bash
HEADLESS=true npx codeceptjs run
```

---

## 📝 Generación de reportes

Allure Report 📊

1️⃣ Ejecutar las pruebas: ``[Si ejecutaste las pruebas ve al paso 2]``
```bash
npx codeceptjs run
```
2️⃣ Generar el reporte:
```bash
allure generate output --clean -o output/allure-report
```
3️⃣ Abrir el reporte: ``[Sino muestra detalles de la ejecuccion ve al paso 1 nuevamente]``
```bash
allure open output/allure-report
```
Esto generará un reporte visual con los pasos exitosos, fallidos, capturas de pantalla y detalles de ejecución.

---

## 📌 Notas importantes
- Las carpetas `node_modules/`, `output/` y `allure-report/` están excluidas del repositorio mediante `.gitignore`
- Cada vez que ejecutes las pruebas, la carpeta `output/` se generará nuevamente de forma automática.
- Para restaurar dependencias solo debes correr `npm install`.
-  La URL del entorno de pruebas es:
```bash
http://the-internet.herokuapp.com/login
```
-  Coloque a proposito un fallo en los Casos de Prueba 2 y 3, esto para generar screenshot y que se visualizen casos `Pass` y `Fail` en Allure:
```bash
carpeta: test\pages
  Login.Pages.js
    `class` LoginPage
        messages
          error: `Your usernam is invalid!`

Cambiar el string por: `Your username is invalid!`
```

---

## 🧩 Curiosidades
- Intente utilizar CucumberJs, pero por un error de version con NodeJs que no pude resolver opte por CodeceptJS.
- No use la reporteria de Cucumber bajo la asunción que podia generar problemas por el mismo motivo de versiones.
- Para los casos en Gherkin en el file `login.features` opte por traducirlos a ingles, por problemas al generar el XML y la compatibilidad con caracteres especiales [acentos] y con el idioma español.



Creado por 🏃 Rafael Arturo Valdez R

- [GitHub](https://github.com/rafaelarthurov) || [LinkedIn](https://www.linkedin.com/in/rafaelarturovaldezrodriguez)
