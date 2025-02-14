import { Module } from '@nestjs/common';
import { CornJobModule } from './cornJob/cornJob.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [CornJobModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
  controllers: [],
  providers: [],
})
 export class rootModule {
  constructor(){
    console.log("hellow")
  }
}
