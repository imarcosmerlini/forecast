-- CreateTable
CREATE TABLE "Weather" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "feelslike" TEXT NOT NULL,
    "sunrise" TEXT NOT NULL,
    "sunset" TEXT NOT NULL,
    "maxtemp" TEXT NOT NULL,
    "mintemp" TEXT NOT NULL,
    "humidity" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "precip" TEXT NOT NULL,
    "winddir" TEXT NOT NULL,
    "windspeed" TEXT NOT NULL,
    "uvindex" TEXT NOT NULL,
    "moonphase" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
