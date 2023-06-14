import { File } from "./file.entity";
import { StudentActivity } from "./student-activity.entity";

export class StudentActivityFile {
    student_activity: StudentActivity;
    student_activity_id: string;
    files: File[];
}
