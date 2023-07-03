# Fibonacci API

Esta es una API REST para calcular los valores de la secuencia de Fibonacci.

## Uso

La API acepta solicitudes GET en la siguiente ruta:


Reemplaza `{índice}` con el índice de Fibonacci que deseas calcular.

Ejemplo de solicitud:
# Cómo ejecutar la API

1. Clona este repositorio:
git clone https://github.com/tu-usuario/fibonacci-api.git

2. Instala las dependencias
npm install

3. Ejecuta el servidor local:
npm start

El servidor se ejecutará en http://localhost:3000

# Decisiones técnicas

La API está implementada en JavaScript utilizando el entorno de ejecución Node.js y el framework Express.js.
La lógica de cálculo de Fibonacci se encuentra en la clase Fibonacci, que se encuentra en el archivo fibonacci.js.
La API responde a las solicitudes GET en la ruta /fibonacci/{índice} y devuelve el índice y el valor correspondiente de Fibonacci en formato JSON.
El servidor se ejecuta en el puerto 3000 de manera predeterminada, pero se puede cambiar en el archivo index.js si es necesario.

# Mejoras futuras
A medida que la API evolucione, puedes considerar agregar validaciones de entrada para garantizar que solo se acepten índices positivos.
Puedes implementar un sistema de caché para almacenar y reutilizar los valores de Fibonacci ya calculados, lo que podría mejorar el rendimiento en solicitudes repetidas.
Sería útil implementar pruebas automatizadas para garantizar el correcto funcionamiento de la API y prevenir posibles regressions en el código.

Respuesta del EndPoint:
```json
{
  "index": 6,
  "value": 8
}

