//Task1
console.log("Welcome to the Hospital Patient System!");
//Task2
let systemName="Hospital Patient System";
let totalPatients=120;
console.log("System Name: "+systemName);
console.log("Total Patients: "+totalPatients);
//Task3
let patientAge=25;
let patientName="John";
let isAdmitted=true;
console.log("Patient Age:",patientAge)
console.log("Patient Name:",patientName)
console.log("Is Admitted:",isAdmitted)
console.log(typeof patientAge);
console.log(typeof patientName);
console.log(typeof isAdmitted);
//Task4
let patient1Age=45;
let patient2Age=30;
let ageDifference=patient1Age-patient2Age;
console.log("Age Difference: "+ageDifference+" years");
//Task5
let age = 65;
if (age >= 60) 
{
    console.log("Senior Citizen");
} 
else 
{
    console.log("Not a Senior Citizen");
}
//Task6
let patients =[
    {name:"Trecia",age:25,disease:"Fever"},
    {name:"Rijo",age:40,disease:"Diabetes"},
    {name:"Vismaya",age:18,disease:"Cold"},
    {name:"Daksha",age:15,disease:"Asthma"}
];
for(let i=0;i<patients.length;i++){
    console.log("Name:"+patients[i].name);
    console.log("Age:"+patients[i].age);
    console.log("Disease:"+patients[i].disease);
    console.log("----------------------");
}
//TASK7
for(let i=0;i<patients.length;i++){
    if(patients[i].age < 18){
        continue;
    }
    console.log(patients[i].name,patients[i].age);
}
//Task8
patients.push({name:"Ammu",age:50});
let oldest=patients[0];
for(let i=1;i<patients.length;i++){
    if(patients[i].age>oldest.age){
        oldest=patients[i];
    }
}
console.log("Oldest Patient:",oldest.name,oldest.age);
//Task9
let removedPatient=patients.pop();
console.log("Removed Patient:",removedPatient);
patients.sort((a,b)=>a.age-b.age);
console.log("Sorted Patients:");
for(let i=0;i<patients.length;i++){
    console.log(patients[i]);
}
//Task10
const patient={
    id:"P10293",
    name:"Teena",
    age:31,
    condition:"Recovering from Deep vein clot",
    isAdmitted:true
};
console.log("Patient ID:",patient.id);
console.log("Name:",patient.name);
console.log("Age:",patient.age);
console.log("Medical Condition:",patient.condition);
console.log("Admission Status:",patient.isAdmitted);
