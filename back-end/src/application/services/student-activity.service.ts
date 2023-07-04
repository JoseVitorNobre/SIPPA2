import { Injectable, NotFoundException } from '@nestjs/common';

import { ActivityService } from './activity.service';
import { StudentActivityRepository } from '../../infrastructure/repositories/student-activity.repository';
import { SupabaseService } from './supabase.service';
import { FileService } from './file.service';
import { File } from '@prisma/client';

@Injectable()
export class StudentActivityService {
  constructor(
    private readonly studentActivityRepository: StudentActivityRepository,
    private readonly activityService: ActivityService,
    private readonly supabaseService: SupabaseService,
    private readonly fileService: FileService
  ){}

  findAll() {
    return this.studentActivityRepository.findAll();
  }

  async findOne(studentActivity_id: string) {
    const studentActivity = await this.studentActivityRepository.findById(studentActivity_id);
    
    if (!studentActivity) throw new NotFoundException();

    let file;

    try {
      file = await this.supabaseService.getFileURL(`${studentActivity.id}`, 'StudentActivityFiles');
    } catch (error) {
      file = null;
    }
    
    const activity = await this.activityService.findOne(studentActivity.activity_id);
    return {
      ...studentActivity,
      description: activity.description,
      receive_data: activity.receive_data,
      title: activity.title,
      activity_file: activity.file,
      fileUrl: file
    }
  }

  async findStudentActivities(student_id: string) {
    const studentActivities = [];
    await Promise.all((await this.studentActivityRepository.findAll()).map((studentActivity) => {
      if (studentActivity.student_id === student_id) {
        studentActivities.push(studentActivity);
      };
    }))
    
    const activitiesReturn = [];
    const examsReturn = [];
    
    await Promise.all(studentActivities.map(async (studentActivity) => {
      const activity = await this.activityService.findOne(studentActivity.activity_id);

      if (activity.is_exam) {
        examsReturn.push({
          studentActivityData: {
            ...studentActivity
          },
          title: activity.title,
          classroom_id: activity.classroom_id,
          weight: activity.points          
        });
      } else {
        activitiesReturn.push({
          studentActivityData: {
            ...studentActivity
          },
          title: activity.title,
          weight: activity.points,
          classroom_id: activity.classroom_id
        });
      }
    }))

    return {
      activities: activitiesReturn,
      exams: examsReturn
    };
  }

  async uploadStudentActivityFiles(files: Buffer, id: string, fileType: string) {
    const studentActivity = await this.studentActivityRepository.findById(id);
    let fileExists = false;

    try {
      await this.supabaseService.create(`${studentActivity.id}`, 'StudentActivityFiles', files, fileType);
    } catch(error) {
      fileExists = true;
    }

    let fileData;

    if (fileExists) {
      //update file
      await this.supabaseService.remove(`${studentActivity.id}`, "StudentActivityFiles");
      await this.supabaseService.create(`${studentActivity.id}`, 'StudentActivityFiles', files, fileType);

      fileData = {
        url: `${studentActivity.id}`,
        studentActivity_id: studentActivity.id
      }

      /*await this.fileService.updateOne(fileUrl, fileData);*/
    } else {
      //create file
      fileData = {
        url: `${studentActivity.id}`,
        studentActivity,
        studentActivity_id: studentActivity.id
      }
      await this.fileService.create(fileData.url, fileData.studentActivity_id);
    }

    const updatedStudentActivity = {
      ...studentActivity,
      status: true
    }

    return this.studentActivityRepository.updateActivitySended(updatedStudentActivity, updatedStudentActivity.id, fileData.url);
  }
}
