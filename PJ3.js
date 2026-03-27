class Aluno {
    constructor(nome, idade, curso, unidade, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.unidade = unidade;
        this.periodo = periodo;
    }

    
    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }
}


class GerenciadorAlunos {
    constructor() {
        if (GerenciadorAlunos.instance) {
            return GerenciadorAlunos.instance;
        }

        this.alunos = [];
        GerenciadorAlunos.instance = this;
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        console.log("📚 Alunos Matriculados:");
        this.alunos.forEach((aluno, index) => {
            console.log(
                `${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Unidade: ${aluno.unidade}, Período: ${aluno.periodo}`
            );
        });
    }
}


const g1 = new GerenciadorAlunos();
const g2 = new GerenciadorAlunos();

console.log("Singleton funcionando?", g1 === g2); 


const alunoPrototipo = new Aluno(
    "Protótipo",
    0,
    "Desenvolvimento de Software Multiplataforma",
    "FATEC Luigi Papaiz",
    "Manhã"
);


const aluno1 = alunoPrototipo.clone();
aluno1.nome = "Luiza";
aluno1.idade = 19;

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Olivia";
aluno2.idade = 19;


g1.adicionarAluno(aluno1);
g1.adicionarAluno(aluno2);


g1.listarAlunos();


console.log("\nProtótipo original:");
console.log(alunoPrototipo);