FROM eclipse-temurin:21
WORKDIR /app
ARG JAR_FILE=target/*.jar
COPY target/project2-tax-prep-backend-0.0.1-SNAPSHOT.jar /app/project2-tax-prep-backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","project2-tax-prep-backend.jar"]