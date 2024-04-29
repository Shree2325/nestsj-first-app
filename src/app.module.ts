import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumserviceService } from './sumservice/sumservice.service';
import { SaynameModule } from './sayname/sayname.module';
import { AuthcheckMiddleware } from './middleware/authcheck.middleware';

@Module({
  imports: [SaynameModule],
  controllers: [AppController],
  providers: [AppService, SumserviceService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthcheckMiddleware).forRoutes({path:"*",method:RequestMethod.ALL})
  }
}
