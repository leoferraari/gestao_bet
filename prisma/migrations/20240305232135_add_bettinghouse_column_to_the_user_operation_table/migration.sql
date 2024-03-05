/*
  Warnings:

  - Added the required column `bettingHouseId` to the `operations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "operations" ADD COLUMN     "bettingHouseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_bettingHouseId_fkey" FOREIGN KEY ("bettingHouseId") REFERENCES "betting_houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
