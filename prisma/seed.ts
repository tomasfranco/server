import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@gmai.com',
      avatarUrl: 'https://github.com/tomasfranco',
    }
  })

 const pool = await prisma.pool.create({
   data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
   }
 })
}
main()