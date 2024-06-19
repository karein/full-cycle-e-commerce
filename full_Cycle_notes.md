# Aula 1

dev full cycle

- pilares
  1. Operate what you build: O dev fica responsável desde a concepção, até a entrega do seu projeto
  2. Ferramentas para escalar: para que o dev tenha a possibilidade de entregar o seu projeto diversas vezes ao dia, precisa dominar ferramentas que vão auxiliar nesse processo, desde pipelines de CI's, docker, Kubernetes, stacks de monitoramento etc.

dev full cycle vs dev full stack

- full stack: habilidades de desenvolvimento. O dev dominando stacks e linguagens para conseguir programar em diversas perspectivas como front e back.
- full cycle: O dev que além de desenvolver consegue também arquitetar e entregar a aplicação de forma testada, deployada e monitorada. Além disso, domina ferramentas e processos para que essas aplicações possam se deployadas de forma simples e rápida diversas vezes ao dia e, que sejam totalmente escaláveis.

INICIAR PROJETO GO

goLang m seja performático, se depende da redeod init github.com/<repositório_github>

Pastas - internal: tudo que é interno do projeto e não vai ser compartilhado

Toda 1° linha d o projeto GO tem que ter o nome do pacote. O nome do pacote é o nome da pasta(em que o arquivo está)

- goLang m seja performático, se depende da redeod tidy: Baixa as dependências que estão faltando e, remove o que não está sendo usado

- defer: executa depois que todo o restante do código tiver sido executado

# Aula 2

Arquitetura geral do projeto

- Next.js
  - backend for frontend (front da loja)
- Nest.js
  - backend(API - ordem pedido)
- MySql
- rabbitMq
- Golang

O que é Nest.js
O Nest.ja é um framework Node.js que trabalha tanto com o Javascript e Typescript.  
Ele foi criado em 2017, visando ter uma arquitetura modular e escalável.

Permite a criação de aplicações WEB permitindo a integração com vário meios de comunicação

- REST
- GraphQL
- Outros(RabbitMQ, Redis, Kafka, Nats etc)

Traz integração com vários tipos de banco de dados via os mais famosos ORMs da comunidade:

- Sequelize
- Prisma
- TypeORM
- Mikro ORM
- ETC

Iniciando projeto
comandos:

- npm install -g @nestjs/cli
- nest new <project_name>
- nest generate --help
  - ver as opções que podem ser geradas com Nest
- nest g module <module_name>
- nest g resource <!-- gera já tudo, módulos, controllers, services etc -->
- npm install typeorm @nestjs/typeorm mysql2
- docker compose up
- docker compose exec <container_name> bash
  - docker compose exec db bash
- mysql -u<user> -p<password>
  - mysql -uroot -proot
    logar com o cli
- show databases
- npm install class-validator class-transformer
- npm install @nestjs/jwt
- npm install @golevelup/nestjs-rabbitmq

Libs:

- @nestjs/cli
- typeorm
- @nestjs/typeorm
- mysql2
- class-validator
- class-transformer
- @nestjs/jwt
- @golevelup/nestjs-rabbitmq

DTO -> Data Transfer Object

Modelagem `anêmica` e `rica`
rica: joga as regras de negocio que não dependem do bando, para dentro da própria entidade;

RabbitMQ

- publish:
  - pode ser publicado diretamente em uma fila. Porém, em um cenário de micro-serviços, as vezes uma mensagem pode ser de interesse para mais de uma fila, fazendo com que a mesma mensagem tivesse que ver publicada mais de uma vez em outras filas. O que pode se tornar difícil de manter.
  - Exchanges roteiam a mensagem para diferentes filas que possam ter interesse nela. Dessa forma não é necessário se preocupar em qual fila a mensagem vai ser publicada.

Criar/Gerenciar filas

1. acessar o RabbirtMQ -> http://localhost:15672/#/
2. logar com o admin e senha (definidos no arquivo da docker, caso o serviço seja feito por meio deste)
3. Navegar para a aba `Queues ans Streams`
4. Na seção `Add a new queue` add um nome no campo `Name`
5. Clicar em `Add queue`

- a fila vai aparecer na tabela acima da seção `Add a new queue`

- Caso queira ligar a fila com uma Exchange:

6. Na tabela de filas, clicar no nome da fila criada
7. Na seção `Bindings` add no campo `From exchange` o nome de uma exchange.

- As exchanges podem ser vistas no campo `Name` da tabela da aba `Exchanges`
- A `amq.direct` pode ser uma boa opção para um 1° teste por ser a mais simples. Cada exchange tem uma forma de como vai rotear as mensagens

8. No campo `Routing key` add uma rota/nome do evento

- por Ex: OrderCreated

# Aula 3

Tecnologias utilizadas

- TypeScript/JavaScript
- Next.js e React.js
- React Server Components
- Material UI

O que é o Next.js

A ideia do next.js é permitir a criação de aplicações WEB usando React.js com renderização do lado do servidor, ajudando a resolver problemas antes enfrentados com aplicações Single Page Application.

Com o next do lado do servidor, é possível trabalhar com logicas do lado do servidor, como acesso direto ao banco de dados e até criação de API Rest.

React Server Components

Problemas do Server Side Rendering padrão

- O servidor precisa recarregar sempre toda a página, pedaços não são cacheados.
- Se precisar de algum reprocessamento da página. precisa regerá-la inteira no servidor.
- Se usar lib, como formatação de datas e outras coisas, tudo fica no bundle JS do cliente, ou seja, temos um javascript maior para carregar no front-end.
- Enfim, temos problemas de flexibilidade e otimização de carregamento das páginas e start do projeto.

Server Components

- Bundle JS menor
- Carregamento inicial mais rápido
- Cacheamento em nível de componentes
- Chamadas externas em paralelo (Suspense)

Comandos

- npx create-next-app --typescript
- npm install @mui/material-nextjs @emotion/cache
- npm install @mui/material
- npm install @emotion/react @emotion/style
- npm install @mui/icons-material

Use Client -> diretiva; começa no servidor e vai pré-renderizado para o browser.  
Várias funções só são possíveis usar em components clients, como por exemplo: useRouter e useSearchParams;
Ex Err (quando algo estiver sendo renderizado do "lado errado"): `Attempt to call createTheme() from the server but createTheme is on the client.` [...]  
Tentar sempre manter os componentes como 'server componente' e usar 'use client' apenas onde é necessário.  
Prezar pelo uso do server, pois eles já virão totalmente renderizados e, páginas como a de listagem de produtos, se consegue trabalhar com cache, o que vai ter um grande impacto na performance do servidor do **next** pois, uma coisa é ficar fazendo chamadas para a API em **GO** para pegar esses produtos. Mesmo que o **goLang** seja performático, se dependemos da rede. Outra coisa é já ter pego esses produtos e, só usar para poder montar a página. Dessa forma se pode atender mais solicitações.

\<Box\> -> Uma div mais 'poderosa';

**priority** -> Prioridade para carregar; ajuda em métricas de SO
