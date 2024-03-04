# flower-microservices (PROJETO DE ESTUDO) 🌸

## Objetivo

Seja muito bem-vindo(a) ao meu espaço de aprendizado e crescimento! Este repositório foi criado com o objetivo de registrar minha jornada de estudo, incluindo a implementação de novas tecnologias, a aplicação de Design Patterns, práticas de Clean Code... 
<br> Isso será realizado tanto por meio da adição de novas funcionalidades quanto pela refatoração do código existente. O objetivo é que este repositório sirva como um registro de minha evolução técnica ao longo do tempo. 🌹💻❤️
Qualquer dúvida estou à diposição e agradeço de coração caso possa analisar e me sugerir correções/melhorias e etc! 
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
<br>

Próximas metas a cumprir: 
- [ ] Melhorias no layout; <br>
- [ ] Validações; <br>
- [ ] Novas features para incrementar a regra de negócio; <br>
- [ ] Implementar serviços de mensageria; <br>
 
## Feign:
<br>O Feign é uma biblioteca do Spring Cloud que simplifica a comunicação entre microserviços em uma arquitetura baseada em HTTP. Ele permite que os desenvolvedores escrevam interfaces declarativas para serviços RESTful, facilitando a integração entre os microserviços. Com o Feign, você pode definir as chamadas de API em um formato mais limpo e simples, sem a necessidade de escrever manualmente o código HTTP.

## Gateway:
O Spring Cloud Gateway é um componente que atua como um roteador e intermediário de tráfego para as solicitações que chegam aos microserviços. Ele oferece uma maneira flexível e poderosa de controlar o tráfego de entrada para o seu sistema, permitindo a roteamento dinâmico, balanceamento de carga, autenticação, autorização, entre outros recursos. O Gateway é fundamental para a construção de uma arquitetura de microserviços escalável e segura.
<br>
## Eureka Server:
O Eureka Server é um serviço de registro e descoberta de microserviços. Ele permite que os microserviços se registrem em seu registro central quando são iniciados e, em seguida, outros microserviços podem descobrir e se comunicar com eles usando seus nomes registrados. O Eureka Server simplifica a comunicação entre os microserviços em um ambiente distribuído e dinâmico, onde os endereços IP e as portas dos microserviços podem mudar com frequência
