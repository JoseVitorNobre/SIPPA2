import { Activity } from "./activity.entity";
import { Student } from "./student.entity";

export class StudentActivity {
    id: string;
    student: Student;
    activity: Activity;
    status: boolean;
    activityPoints: number;
    files: File[];
}
