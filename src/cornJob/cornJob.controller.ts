import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CronJobService } from './cornJob.service';

@Controller('cronjobs')
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Post()
  async createCronJob(@Body() body) {
    console.log(body);
    return this.cronJobService.createCronJob(body);
  }

  @Get()
  async getAllCronJobs() {
    return this.cronJobService.getAllCronJobs();
  }

  @Delete(':id')
  async deleteCronJob(@Param('id') id: string) {
    return this.cronJobService.deleteCronJob(id);
  }
}
