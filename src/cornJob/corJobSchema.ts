import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CronJobDocument = CronJob & Document;

@Schema()
export class CronJob {
  @Prop({ required: true }) 
  name: string;

  @Prop({ required: true })
  triggerUrl: string;

  @Prop({ default: Date.now }) 
  createdAt: Date;
}

export const CronJobSchema = SchemaFactory.createForClass(CronJob);
