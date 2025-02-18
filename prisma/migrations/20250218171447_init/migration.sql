/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");
