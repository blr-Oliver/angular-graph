# simple-web-example

## Run as binary (just launch)
- Download binary `simple-web-example-0.0.1-SNAPSHOT.jar` (15.6 MB) from https://github.com/blr-Oliver/simple-web-example/releases/tag/0.0.1
- Make sure you have installed Java 1.8 or higher on your computer
- Save some data in `.csv` format at desired location
- Launch application from command line with 
```
java -jar -Dcsv.path="absolute/path/to/your/data" simple-web-example-0.0.1-SNAPSHOT.jar 
```
- The application will be available from your brwoser at 8080 port. Open http://localhost:8080/ to see

#### Path to CSV
Use `-Dcsv.path="your-path-to-csv"` when launching or change value directly in `application.properties` (re-package `.jar` required)

## Run/debug from IDE (Java Spring-boot application)
- Download source code from https://github.com/blr-Oliver/simple-web-example/releases/tag/0.0.1 OR
- Alternatively, clone the repository to your computer
```
git clone https://github.com/blr-Oliver/simple-web-example [optional/path/to/destination/folder]
```
and then **from the project's directory** checkout the 0.0.1 release (currently the release commit is also `HEAD` commit, so this step can be omitted)
```
cd path/to/project
git checkout tags/0.0.1
```
- Create a project in your IDE **from existing sources**
- Resolve all project's dependencies
- The application can be launched as plain Java application. The class with `main()` is `/src/main/java/com/oliver/webexample/SimpleWebExample.java`.
- Exact steps depend on the IDE in use

## Run Angular in development mode or rebuild front-end
- Download source code
- Install required dependencies - **from the project's directory**
```
npm install
```
- To run front-end in dev mode use
```
npm run start
```
The application will be available at 4200 port (not 8080!). To support it with data you should also run back-end part (yes, there must be spring-boot application active on 8080 port). The proxy configuration is already configured.
- To rebuild front-end use
```
npm run build --prod
```
The bundler will output directly into `/src/main/resources/static` thus making it static content for the spring-boot application. You can then use front-end snapshot from Spring-boot application directly or repackage binary `.jar` for standalone launch.
