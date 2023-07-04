import { getStudentCourse } from '../../../src/application/usecases/getStudentCourse.usecase';

describe('getStudentCourse function', () => {
    it('should return the name of the course especified by enum value', () => {
        expect(getStudentCourse('EC')).toBeTruthy();
    });

    it('Shoud return a empty value when course is not found', () => {
        expect(getStudentCourse('EP')).toBeFalsy();
    });
});