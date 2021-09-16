# grapql

Para executar primeiro inicie um terminal em questions/backend e use yarn start. A ultima linha deverá retornar "database connected"
Essa etapa inicializa o servidor graphql conectado com um servidor mongodb atlas com o mongoose. 
Caso não conecte, talvez o servidor esteja fora e será necessario conectar algum outro em questions\backend\src\index.js
Para testar o graphql é interressante conectar ao http://localhost:4000/ , o que irá iniciar a interface da apollo que permite testar a API (e por nem tudo ter sido implementado no react). 


A pasta Old-GraphQL_server contem um servidor graphql sem integração com um banco de dados, foi usado apenas inicialmente e não é mais usado


Para iniciar o frontend acesse my-app e use yarn start. O acesso será pelo http://localhost:3000/ que deverá abrir automaticamente ao iniciar o servidor.


Apenas uma querry esta funcional (a que puxa as questoes do banco). 