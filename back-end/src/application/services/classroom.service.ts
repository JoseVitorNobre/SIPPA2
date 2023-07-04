import { Injectable, NotFoundException } from '@nestjs/common';
import { ClassroomRepository } from '../../infrastructure/repositories/classroom.repository';
import { DisciplineService } from './discipline.service';
import { TeacherService } from './teacher.service';
import { UserService } from './user.service';
import { ClassroomStudentService } from './classroom-student.service';
import { StudentService } from './student.service';
import { getStudentCourse } from '../usecases/getStudentCourse.usecase';
import { UserDataReturn } from '../../domain/models/UserDataReturn';
import { ClassPlanService } from './class-plan.service';

@Injectable()
export class ClassroomService {
  constructor(
    private readonly classroomRepository: ClassroomRepository,
    private readonly disciplineSevice: DisciplineService,
    private readonly teacherService: TeacherService,
    private readonly userService: UserService,
    private readonly classroomStudentService: ClassroomStudentService,
    private readonly studentService: StudentService,
    private readonly classPlanService: ClassPlanService,
  ) {}

  findAll() {
    return this.classroomRepository.findAll();
  }

  async findMany(student_id: string) {
    const classrooms = (await this.classroomStudentService.findAll()).filter((classroomStudent) => {
      if (student_id === classroomStudent.student_id) return classroomStudent;
    });

    if (classrooms.length === 0) throw new NotFoundException();

    const classroomsReturn = await Promise.all(classrooms.map(async(classroom) => {
      const classroomFind = await this.classroomRepository.findById(classroom.classroom_id);
      const discipline = await this.disciplineSevice.findOne(classroomFind.discipline_id);
      const teacher = await this.teacherService.findOneById(classroomFind.teacher_id);
      const teacherName = (await this.userService.findOneById(teacher.user_id)).name;
      const listStudents = [];

      await Promise.all((await this.classroomStudentService.findAll()).map(async (classroomStudent) => {
        if (classroomStudent.classroom_id === classroom.classroom_id) {
          const student = await this.studentService.findOneById(classroomStudent.student_id);
          const user: UserDataReturn = await this.userService.findOneById(student.user_id);
          listStudents.push({
            url: "",
            name: user.name
          })
        }
      }))

      const threeFirstStudents = listStudents.length >= 3 ? {student1: listStudents[0], student2: listStudents[1], student3: listStudents[2]}
      : listStudents.map((student) => {return student});
      return {
        classroom,
        discipline,
        teacherName,
        totalStudentsLeft: listStudents.length > 3 ? listStudents.length - 3 : 0,
        threeFirstStudents
      };
    }));

    return classroomsReturn;
  }

  async findOne(classroom_id: string) {
    const listClassroomStudents = (
      await this.classroomStudentService.findAll()
    ).filter((classromStudent) => {
      if (classromStudent.classroom_id === classroom_id)
        return classromStudent.student_id;
    });

    if (listClassroomStudents.length === 0)
      throw new NotFoundException('Classroom not found');

    const studentsReturn = await Promise.all(
      listClassroomStudents.map(async (student) => {
        const studentData = await this.studentService.findOneById(
          student.student_id,
        );
        const userData = await this.userService.findOneById(
          studentData.user_id,
        );
        const course = getStudentCourse(studentData.course);

        return {
          name: userData.name,
          student_id: studentData.id,
          user_id: userData.id,
          enrollment: studentData.enrollment,
          course: course,
        };
      }),
    );

    return studentsReturn;
  }

  async findClassPlans(classroom_id: string) {
    const classPlansReturn = await this.classPlanService.findByPlan(
      (await this.classroomRepository.findById(classroom_id)).plan_id
    );
    return classPlansReturn;
  }
}
