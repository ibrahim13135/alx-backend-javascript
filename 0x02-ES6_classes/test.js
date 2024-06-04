class HolbertonCourse{
    constructor(name, lenght, students) {
        if (typeof name !== 'string'){
            throw TypeError('Name must be a string')
        }
        if (typeof lenght !== 'number') {
            throw TypeError('lenght must be a number')
        }
        if (Array.isArray(students) || students.some((students) => typeof student !== 'string')) {
            throw TypeError('student must be array')
        }
        this.name = name;
        this.lenght = lenght;
        this.students = students;
    }
    get name() {
        return this.name;
    }

    set name()





    
    get lenght() {
        return this.lenght
    }
    g
}
