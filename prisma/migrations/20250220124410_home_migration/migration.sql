/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `file` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `file` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "file_url_key" ON "file"("url");
