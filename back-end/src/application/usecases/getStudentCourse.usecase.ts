export function getStudentCourse(course: string) {
    switch (course) {
        case "ES":
            return "Engenharia De Software";
        case "EC":
            return "Engenharia De Computação";
        case "CC":
            return "Ciência Da Computação";
        case "DD":
            return "Design Digital";
        case "SI":
            return "Sistemas de Informação";
        case "RC":
            return "Redes de Computadores";
        default:
            return "";
    }
}