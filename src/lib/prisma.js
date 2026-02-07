generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Vendor {
  id           String   @id @default(cuid())
  name         String   @unique
  slug         String   @unique
  websiteUrl   String?
  tradeLicense String?
  description  String?
  status       String   @default("PENDING") // PENDING, APPROVED, BLOCKED
  createdAt    DateTime @default(now())
  products     Product[]
}

model Product {
  id          String   @id @default(cuid())
  name        String
  price       Float
  description String?
  imageUrl    String?
  category    String
  externalUrl String?
  vendorId    String
  vendor      Vendor   @relation(fields: [vendorId], references: [id])
  createdAt   DateTime @default(now())
}

