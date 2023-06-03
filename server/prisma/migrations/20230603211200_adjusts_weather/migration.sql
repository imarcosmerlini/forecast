/*
  Warnings:

  - You are about to alter the column `feelslike` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `humidity` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `maxtemp` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `mintemp` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `precip` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `temperature` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `uvindex` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `visibility` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `windspeed` on the `Weather` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `observationtime` to the `Weather` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weather" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "observationtime" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "descriptions" TEXT NOT NULL,
    "feelslike" INTEGER NOT NULL,
    "sunrise" TEXT NOT NULL,
    "sunset" TEXT NOT NULL,
    "maxtemp" INTEGER NOT NULL,
    "mintemp" INTEGER NOT NULL,
    "humidity" INTEGER NOT NULL,
    "visibility" INTEGER NOT NULL,
    "precip" INTEGER NOT NULL,
    "winddir" TEXT NOT NULL,
    "windspeed" INTEGER NOT NULL,
    "uvindex" INTEGER NOT NULL,
    "moonphase" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Weather" ("createdAt", "date", "descriptions", "feelslike", "humidity", "id", "maxtemp", "mintemp", "moonphase", "name", "precip", "sunrise", "sunset", "temperature", "uvindex", "visibility", "winddir", "windspeed") SELECT "createdAt", "date", "descriptions", "feelslike", "humidity", "id", "maxtemp", "mintemp", "moonphase", "name", "precip", "sunrise", "sunset", "temperature", "uvindex", "visibility", "winddir", "windspeed" FROM "Weather";
DROP TABLE "Weather";
ALTER TABLE "new_Weather" RENAME TO "Weather";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
