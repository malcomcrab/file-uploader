/*
  Warnings:

  - You are about to drop the column `authorId` on the `file` table. All the data in the column will be lost.
  - You are about to drop the column `folderId` on the `file` table. All the data in the column will be lost.
  - You are about to drop the column `uploadedAt` on the `file` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `folder` table. All the data in the column will be lost.
  - You are about to drop the column `uploadedAt` on the `folder` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `file` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folder_id` to the `file` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `folder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "file" DROP CONSTRAINT "file_authorId_fkey";

-- DropForeignKey
ALTER TABLE "file" DROP CONSTRAINT "file_folderId_fkey";

-- DropForeignKey
ALTER TABLE "folder" DROP CONSTRAINT "folder_ownerId_fkey";

-- AlterTable
ALTER TABLE "file" DROP COLUMN "authorId",
DROP COLUMN "folderId",
DROP COLUMN "uploadedAt",
ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "folder_id" INTEGER NOT NULL,
ADD COLUMN     "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "folder" DROP COLUMN "ownerId",
DROP COLUMN "uploadedAt",
ADD COLUMN     "owner_id" INTEGER NOT NULL,
ADD COLUMN     "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
