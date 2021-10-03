# grapql

Para executar primeiro inicie um terminal em questions/backend e use yarn para instalar as dependencias e depois yarn start (tambem é possivel usar npm). A ultima linha deverá retornar "database connected"
Essa etapa inicializa o servidor graphql conectado com um servidor mongodb atlas com o mongoose. 
Caso não conecte, talvez o servidor esteja fora e será necessario conectar algum outro em questions\backend\src\index.js
Para testar o graphql é interressante acessar http://localhost:4000/ , o que irá iniciar a interface da apollo que permite testar a API.


Para iniciar o frontend, em outro terminal (sem parar o servidor), acesse my-app e use yarn e depois yarn start (tambem é possivel usar npm). O acesso será pelo http://localhost:3000/ que deverá abrir automaticamente ao iniciar o servidor no seu navegador padrão.
