import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJob, CronJobSchema } from './corJobSchema';
import { CronJobController } from './cornJob.controller';
import {CronJobService} from "./cornJob.service"

@Module({
    imports:[MongooseModule.forFeature([{ name: CronJob.name, schema: CronJobSchema }])],
    controllers:[CronJobController],
    providers:[CronJobService],
})
export class CornJobModule {
    constructor (){
        console.log("Corn Module this is my first setUp")
    }
}
