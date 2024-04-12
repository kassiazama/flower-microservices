# flower-microservices (PROJETO DE ESTUDO) 🌸
## Objetivo

Seja muito bem-vindo(a) ao meu espaço de aprendizado e crescimento! Este repositório foi criado com o objetivo de registrar minha jornada de estudo, incluindo a implementação de novas tecnologias, a aplicação de Design Patterns, práticas de Clean Code... 
<br> Isso será realizado tanto por meio da adição de novas funcionalidades quanto pela refatoração do código existente. O objetivo é que este repositório sirva como um registro de minha evolução técnica ao longo do tempo. 🌹💻❤️
Qualquer dúvida estou à diposição e agradeço de coração caso possa analisar e me sugerir correções/melhorias e etc! 
<br> 

## Rodando localmente com Docker 🐋

Clone o projeto:

```bash
  git clone https://github.com/kassiazama/flower-microservices.git
```

Entre no diretório do projeto e execute: 

```bash
  docker-compose up
```
<br>

## Explicação Geral:
### Fase atual: estruturação da base.
Iniciei o desenvolvimento de um E-commerce para uma floricultura utilizando arquitetura de microservices (02 para o backend e 01 para o frontend). Nesse primeiro momento, a regra de negócio não foi explorada de forma abrangente. 
#### Criei apenas as classes iniciais para dar start ao projeto. <br>
Atualmente, dois serviços estão em funcionamento: FLOWER-ADMIN, responsável pelo cadastro de produtos, e FLOWER-PEDIDO, encarregado de gerenciar os pedidos no e-commerce.


- [X] Spring Boot e Angular; <br>
- [X] Bootstrap; <br>
- [X] Spring Cloud OpenFeign; <br>
- [X] Spring Cloud Gateway; <br>
- [X] Spring Cloud Netflix - Eureka Server; <br>
- [X] Versionamento de banco com Liquibase; <br>
- [X] Banco de dados em PostgreSQL.<br>
- [X] Projeto em container utilizando docker-compose.<br>
<br>

Próximas metas a cumprir: 
- [ ] Testes unitários; <br>
- [ ] Melhorias no layout; <br>
- [ ] Validações; <br>
- [ ] Novas features para incrementar a regra de negócio; <br>
- [ ] Implementar serviços de mensageria; <br>
