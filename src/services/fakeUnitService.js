export const departments = [
    { id: 1, name: 'دمشق'},
    { id: 2, name: 'تشرين'},
    { id: 3, name: 'حلب'},
    { id: 4, name: 'البعث'},
]


const units = [
    { id: 1, department: 1, name: 'كلية دمشق 1'},
    { id: 2, department: 1, name: 'كلية دمشق 2'},
    { id: 3, department: 1, name: 'كلية دمشق 3'},
    { id: 4, department: 1, name: 'كلية دمشق 4'},
    { id: 5, department: 2, name: 'كلية تشرين 1'},
    { id: 6, department: 2, name: 'كلية تشرين 2'},
    { id: 7, department: 2, name: 'كلية تشرين 3'},
    { id: 8, department: 2, name: 'كلية تشرين 4'},
    { id: 9, department: 3, name: 'كلية حلب 1'},
    { id: 10, department: 3, name: 'كلية حلب 2'},
    { id: 11, department: 3, name: 'كلية حلب 3'},
    { id: 12, department: 3, name: 'كلية حلب 4'},
    { id: 13, department: 4, name: 'كلية البعث 1'},
    { id: 14, department: 4, name: 'كلية البعث 2'},
    { id: 15, department: 4, name: 'كلية البعث 3'},
    { id: 16, department: 4, name: 'كلية البعث 4'},
];

export function unitsInDepartment(department) {
    const departmentId = parseInt(department)
    return units.filter(unit => unit.department === departmentId);
}