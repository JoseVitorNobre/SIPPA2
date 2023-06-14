import { File } from "./file.entity";
import { StudentActivity } from "./student-activity.entity";

export class Activity {
    id: string;
    title: string;
    description: string;
    receive_date?: Date;
    classroom_id: string;
    points: number;
    is_frequency_worth: boolean;
    is_exam: boolean;
    file?: File;
    student_activities: StudentActivity[];
}
