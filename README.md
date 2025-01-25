# Calculator Project

Este projeto surgiu como um desafio pessoal. Há algum tempo, criei um projeto de calculadora simples, utilizando JS e HTML, algo bem simples com declarações das variáveis em português, e, agora decidi refazer esse mesmo projeto (tirando a parte do HTML) utilizando **TypeScript** e boas práticas obtidas ao longo dos anos, para avaliar a evolução que adquiri ao longo da minha jornada como desenvolvedor.

---

## Como funciona?

O projeto está utilizando a abordagem baseada em funções puras e interfaces. A lógica é dividida em funções que manipulam o estado. O estado da calculadora é representado pela interface `CalculatorState`, que contém a propriedade `displayValue`, usada para armazenar o valor "exibido".

---

##  🛠️ Funcionalidades

- **initializeCalculator:** Cria um estado inicial da calculadora, sendo uma string vazia.
- **addInputToDisplay:** Adiciona números ou operadores matemáticos, como, adição, subtração, multiplicação e divisão ao "visor".
- **resetCalculatorDisplay:** Limpa o valor exibido de volta para uma string vazia.
- **computeResultFromDisplay:** Avalia a expressão exibida no "visor" e retorna o resultado.
- **getDisplayValue:** Recupera o valor atual e o "exibe".

---

## 🔧 Como rodar localmente?

Siga o passa a passo abaixo para configurar e executar o projeto localmente:

### Pré-requisitos
  
-**Node**: Certifique-se de que o Node está instalado na sua máquina.
-**npm ou yarn**: Gerenciador de pacotes para instalar dependências.

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/khaledy30/calculator-project.git
   cd calculator-project
   
2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install

3. **Execute os testes**:
   ```bash
   npm test
   # ou
   yarn test

4. **Compile o código TypeScript**:
    ```bash
    npm run build
    #ou
    yarn build

---

### 📂 Estrutura do projeto
```
calculator-project/
├── src/
│   ├── calculator.ts        # Código principal da calculadora
├── tests/
│   ├── calculator.test.ts   # Testes unitários da calculadora
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Configurações do projeto
├── tsconfig.json            # Configurações do TypeScript
├── README.md                # Documentação do projeto
```

### 🛡️ Testes

Os testes foram implementados utilizando o **Jest** e cobrem os seguintes cenários:

- Inicialização do estado vazio.
- Adição de entradas (números e operadores matemáticos).
- Limpeza do "visor".
- Cálculo de expressões matemáticas válidas, adição, subtração, multiplicação e divisão.
- Tratamento de erros para expressões inválidas, como letras alfabéticas, números com operadores.