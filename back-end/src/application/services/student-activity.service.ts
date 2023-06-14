import { Injectable } from '@nestjs/common';
import { StudentActivityRepository } from 'src/infrastructure/repositories/student-activity.repository';
import { ActivityService } from './activity.service';
import { read } from 'fs';

@Injectable()
export class StudentActivityService {
  constructor(
    private readonly studentActivityRepository: StudentActivityRepository,
    private readonly activityService: ActivityService
  ){}

  findAll() {
    return this.studentActivityRepository.findAll();
  }

  async findStudentActivities(student_id: string, classroom_id: string) {
    const studentActivities = [];
    await Promise.all((await this.studentActivityRepository.findAll()).map(studentActivity => {
      if (studentActivity.student_id === student_id) {
        return studentActivities.push(studentActivity);
      }
    }))

    const activitiesReturn = [];
    const examsReturn = [];

    await Promise.all(studentActivities.map(async (studentActivity) => {
      const activity = await this.activityService.findOne(studentActivity.activity_id);
      if (activity) {
        if (activity.classroom_id === classroom_id) {
          if (activity.is_exam) {
            examsReturn.push({
              studentActivityData: {
                ...studentActivity
              },
              title: activity.title,
              description: activity.description,
              weight: activity.points          
            });
          } else {
            activitiesReturn.push({
              studentActivityData: {
                ...studentActivity
              },
              title: activity.title,
              description: activity.description,
              weight: activity.points  
            });
          }        
        }        
      }
    }));

    return {
      activities: activitiesReturn,
      exams: examsReturn
    };
  }
}
