let studentsScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        nama : 'Rudi',
        score : 80
    },
    {
        nama : 'Dira',
        score : 100
    },
]

let max = studentsScore[0];

for(let i = 0; i < studentsScore.length; i++){
    if(studentsScore[i].score > max.score){
        max = studentsScore[i];
    }
}

console.log("Nama : " + max.nama);
console.log("Nilai : " + max.score);