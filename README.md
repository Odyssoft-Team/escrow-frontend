This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Compilación de Proyecto Next.js 15 a APK Android con Capacitor 7+
Esta documentación te guiará a través de los pasos necesarios para compilar tu aplicación Next.js en un archivo APK para Android, utilizando Capacitor.

1. Prerrequisitos
   Asegúrate de tener instalados y configurados los siguientes elementos en tu sistema:

Un proyecto Next.js en TypeScript funcionando, usando el App Router y con soporte para SSR/CSR.

Node.js (versión recomendada: 18 o superior).

pnpm (o npm/yarn) instalado.

Java JDK 11+ instalado y la variable de entorno JAVA_HOME apuntando a su directorio.

Android SDK instalado y la variable de entorno ANDROID_HOME apuntando a su directorio.

Capacitor v7+ instalado globalmente o en tu proyecto.

2. Instalar Capacitor en el Proyecto
   En la raíz de tu proyecto Next.js, ejecuta el siguiente comando para agregar las dependencias de Capacitor:

pnpm add -D @capacitor/core @capacitor/cli @capacitor/android

3. Inicializar Capacitor
   A continuación, inicializa Capacitor en tu proyecto. Se te pedirá que elijas un nombre y un ID de paquete.

npx cap init

App name: Elige un nombre para tu aplicación (ejemplo: "TuApp").

App package ID: Utiliza un formato de dominio inverso (ejemplo: "com.tuempresa.tuapp").

4. Configurar Capacitor para SSR Remoto
   Edita o crea el archivo capacitor.config.ts o capacitor.config.json en la raíz de tu proyecto. Configúralo de la siguiente manera para que apunte a la URL de tu aplicación Next.js ya desplegada.

const config = {
appId: "com.tuempresa.tuapp",
appName: "TuApp",
server: {
url: "[https://tusitio-vercel.vercel.app](https://tusitio-vercel.vercel.app)",
},
};
export default config;

Importante: Asegúrate de no incluir la propiedad webDir. La propiedad server.url debe apuntar al dominio público donde tu aplicación Next.js está desplegada.

5. Solución a errores de "www"
   Capacitor busca una carpeta www por defecto. Si no existe, crea una carpeta vacía con este nombre en la raíz de tu proyecto para evitar errores durante la compilación.

mkdir www

6. Agregar la plataforma Android
   Ahora, agrega la plataforma de Android a tu proyecto de Capacitor.

npx cap add android

7. Sincronizar Capacitor
   Sincroniza los cambios de Capacitor y asegúrate de que los archivos nativos se hayan generado correctamente.

npx cap sync

Verifica que el archivo android/capacitor.settings.gradle exista en la carpeta android.

8. Instalar el SDK de Android (manual)
   Si no has instalado el SDK de Android correctamente, sigue estos pasos para instalar las herramientas de línea de comandos.

Descarga las Android Command Line Tools.

Descomprime el archivo y extrae su contenido en C:\Android\Sdk\cmdline-tools.

Mueve la carpeta cmdline-tools a C:\Android\Sdk\cmdline-tools\latest.

Abre PowerShell o CMD y navega al directorio C:\Android\Sdk\cmdline-tools\latest\bin.

Ejecuta el siguiente comando para instalar los componentes necesarios:

.\sdkmanager.bat "platform-tools" "build-tools;34.0.0" "platforms;android-35"

9. Aceptar las licencias del SDK
   Acepta las licencias del SDK de Android para poder continuar con la compilación.

En el directorio C:\Android\Sdk\cmdline-tools\latest\bin, ejecuta:

.\sdkmanager.bat --licenses

Presiona y y Enter para aceptar cada licencia.

10. Configurar las variables de entorno en Windows
    Asegúrate de que las siguientes variables de entorno estén configuradas en las Variables del Sistema:

JAVA_HOME: Ruta a tu directorio JDK 11+ (ejemplo: C:\Program Files\Eclipse Adoptium\jdk-17.0.x).

ANDROID_HOME: Ruta a tu directorio SDK (ejemplo: C:\Android\Sdk).

Añade las siguientes rutas a la variable Path:

%JAVA_HOME%\bin

%ANDROID_HOME%\platform-tools

11. Compilar el APK de depuración
    Navega a la carpeta de la plataforma Android y compila el APK de depuración.

cd android
./gradlew assembleDebug

El archivo APK generado se encontrará en la siguiente ruta:
android/app/build/outputs/apk/debug/app-debug.apk

12. Instalar el APK en tu celular
    Copia el archivo app-debug.apk a tu dispositivo móvil.

En los Ajustes de tu teléfono, ve a Seguridad y activa la opción "Instalación de apps desconocidas".

Busca el archivo APK en tu explorador de archivos y haz clic para instalarlo. Acepta los permisos de instalación.

13. Probar y proteger tu layout
    Una vez instalado, prueba la aplicación en un dispositivo real para verificar cómo se visualiza en áreas con notch o la barra de navegación.

Para proteger tu layout, añade el siguiente CSS a tu archivo globals.css para manejar las áreas seguras de la pantalla.

body {
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
box-sizing: border-box;
}

Esto te ayudará a asegurarte de que tu contenido no quede oculto por elementos del sistema.
