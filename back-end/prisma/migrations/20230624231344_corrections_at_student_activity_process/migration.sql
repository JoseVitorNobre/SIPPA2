/*
  Warnings:

  - You are about to drop the column `student_activity_id` on the `File` table. All the data in the column will be lost.
  - You are about to drop the `StudentActivityFile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_student_activity_id_fkey";

-- DropForeignKey
ALTER TABLE "StudentActivityFile" DROP CONSTRAINT "StudentActivityFile_id_student_activity_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "student_activity_id",
ADD COLUMN     "studentActivity_id" TEXT;

-- DropTable
DROP TABLE "StudentActivityFile";

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_studentActivity_id_fkey" FOREIGN KEY ("studentActivity_id") REFERENCES "StudentActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
