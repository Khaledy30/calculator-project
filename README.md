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

5. **Inicie o servidor local**:
    ```bash
    npm run dev
    #ou
    yarn dev

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

---

## 🎨 Interface e Implementação

A interface da calculadora foi desenvolvida com o auxílio da IDE Trae AI, resultando em um design moderno e funcional inspirado na calculadora do iOS. A implementação foi dividida em duas partes principais:

### Core (calculator.ts)
Contém toda a lógica de negócio da calculadora, com funções puras e tipagem forte em TypeScript, facilitando a manutenção e os testes.

### UI (ui.ts)
Responsável pela integração entre a interface visual e a lógica de negócio, gerenciando:
- Eventos dos botões
- Atualização do display
- Comunicação com as funções do core

Esta separação permite:
- Melhor organização do código
- Facilidade de manutenção
- Melhor testabilidade
- Reutilização da lógica em diferentes interfaces

### Características da Interface

- Display com números grandes e claros
- Botões com design circular
- Esquema de cores consistente com o iOS:
  - Laranja para operadores
  - Cinza escuro para números
  - Cinza claro para funções especiais
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Efeitos visuais nos botões ao serem pressionados

### Funcionalidades da Interface
- Entrada de números (0-9)
- Operações básicas (+, -, ×, ÷)
- Limpar entrada (AC)
- Calcular resultado (=)

## 🔨 Processo de Compilação

O projeto utiliza TypeScript que precisa ser compilado para JavaScript antes de ser executado no navegador. Este processo acontece automaticamente quando executamos o comando `npm run build ou yarn build`:

### Arquivos Fonte (.ts)
- `calculator.ts`: Contém a lógica principal com tipagem forte
- `ui.ts`: Gerencia a interface e interações

### Arquivos Compilados (.js)
Após a compilação, são gerados os arquivos JavaScript correspondentes:
- `calculator.js`: Versão compilada da lógica principal
- `ui.js`: Versão compilada do código da interface

O processo de compilação é gerenciado pelo arquivo `tsconfig.json`, que configura o TypeScript para:
- Gerar código compatível com ES2015
- Manter tipagem estrita
- Compilar os arquivos diretamente na pasta `src`

Esse fluxo nos permite:
- Desenvolvimento com todas as vantagens do TypeScript, como uma tipagem robusta
- Execução otimizada no navegador
