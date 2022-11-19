import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient();

var NODENV = 'production'

if (NODENV === 'production'){
    prisma = new PrismaClient();
} else {
    if (!global.prisma){
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma
}

export default prisma