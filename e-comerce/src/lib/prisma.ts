import { PrismaClient } from "@prisma/client";


// objeto para conectar com o banco de dados

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma