import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    async enableShutdownHooks(app: INestApplication){
        return this.$on('beforeExit', async () => {
            await app.close()
        })
    }
}
