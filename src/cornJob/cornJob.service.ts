import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJob, CronJobDocument } from './corJobSchema';

@Injectable()
export class CronJobService {
  constructor(@InjectModel(CronJob.name) private cronJobModel: Model<CronJobDocument>) {}

  async createCronJob(data: any): Promise<CronJob> {
    try {
      return await this.cronJobModel.create(data);
    } catch (error) {
      throw new HttpException('Database error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllCronJobs(): Promise<CronJob[]> {
    return this.cronJobModel.find().exec();
  }

  async deleteCronJob(id: string): Promise<any> {
    try {
        return this.cronJobModel.findByIdAndDelete(id);
    } catch (error) {
        throw new HttpException('Database error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}
