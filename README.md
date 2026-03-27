# Projeto 3

# 📚 Sistema de Gerenciamento de Alunos

Este projeto demonstra a aplicação de dois **padrões de projeto criacionais do GoF**:

* 🔁 **Prototype**
* 🔒 **Singleton**

O sistema permite clonar objetos de alunos e gerenciar uma lista única de alunos na aplicação.

---

## 🚀 Tecnologias utilizadas

* JavaScript (ES6+)
* Node.js (opcional para execução)

---

## 🧠 Padrões de Projeto Utilizados

### 🔁 Prototype

O padrão **Prototype** é utilizado na classe `Aluno`, permitindo a criação de novos objetos a partir da clonagem de um objeto existente.

```js
clone() {
    return Object.assign(
        Object.create(Object.getPrototypeOf(this)),
        this
    );
}
```

✔ Evita recriação manual de objetos
✔ Permite criar variações rapidamente

---

### 🔒 Singleton

O padrão **Singleton** é aplicado na classe `GerenciadorAlunos`, garantindo que exista apenas **uma única instância** responsável por gerenciar os alunos.

```js
if (GerenciadorAlunos.instance) {
    return GerenciadorAlunos.instance;
}
```

✔ Garante controle centralizado
✔ Evita múltiplas instâncias desnecessárias

---

## 📂 Estrutura do Projeto

* `Aluno` → Classe com método de clonagem (Prototype)
* `GerenciadorAlunos` → Classe com instância única (Singleton)
* Execução principal → Criação, clonagem e listagem de alunos

---

## ▶️ Como executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta:

```bash
cd seu-repositorio
```

3. Execute o arquivo:

```bash
node index.js
```

---

## 📌 Exemplo de execução

```bash
Singleton funcionando? true

📚 Alunos Matriculados:
1. Nome: Luiza, Idade: 19, Curso: Desenvolvimento de Software Multiplataforma, Unidade: FATEC Luigi Papaiz, Período: Manhã
2. Nome: Olivia, Idade: 19, Curso: Desenvolvimento de Software Multiplataforma, Unidade: FATEC Luigi Papaiz, Período: Manhã

Protótipo original:
Aluno { nome: 'Protótipo', idade: 0, ... }
```

---

## 🎯 Objetivo do Projeto

Demonstrar, de forma simples e prática:

* Como clonar objetos usando Prototype
* Como garantir uma única instância com Singleton
* Como aplicar padrões de projeto em JavaScript

---

## 💡 Possíveis melhorias

* Interface gráfica (HTML/CSS)
* Persistência de dados (JSON ou banco)
* Remoção e edição de alunos
* Validação de dados

---

## 👩‍💻 Autora

Beatriz Prates

---

## ⭐ Considerações finais

Este projeto é ideal para fins acadêmicos e aprendizado de padrões de projeto, mostrando na prática como aplicar conceitos do GoF em JavaScript.
