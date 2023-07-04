-- CreateTable
CREATE TABLE "SecondCall" (
    "id" TEXT NOT NULL,
    "justify" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "student_id" TEXT NOT NULL,
    "classroom_id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    CONSTRAINT "SecondCall_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "SecondCall" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "sendable" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "SecondCall" ADD CONSTRAINT "SecondCall_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
