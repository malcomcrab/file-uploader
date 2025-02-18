-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
