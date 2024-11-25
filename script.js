 // Criando uma nova instância de XmlHttpRequest
 let xhr = new XMLHttpRequest();

 // Configurando a requisição GET para acessar o arquivo JSON
 xhr.open('GET', 'https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/olamundo.json', true);

 // Definindo o que fazer quando a resposta for recebida
 xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         // Processando a resposta JSON
         let dados = JSON.parse(xhr.responseText);
         
         // Selecionando o elemento onde os dados serão exibidos
         let container = document.getElementById("jsonData");

         // Criando o HTML para exibir os dados do JSON
         let htmlContent = `
             <p><strong>Mensagem:</strong> ${dados.Json}</p>
             <h2>Pessoa:</h2>
             <p><strong>Nome:</strong> ${dados.Pessoa[0].Nome}</p>
             <p><strong>Idade:</strong> ${dados.Pessoa[0].Idade}</p>
             <p><strong>Filhos:</strong> ${dados.Pessoa[0].Filhos ? "Sim" : "Não"}</p>
             <p><strong>CNH:</strong></p>
             <ul>
                 <li>Número: ${dados.Pessoa[0].CNH.Numero}</li>
                 <li>Tipo: ${dados.Pessoa[0].CNH.Tipo.join(", ")}</li>
             </ul>
             <p><strong>Família:</strong></p>
             <ul>
                 <li>Pai: ${dados.Pessoa[0].Familia.Pai}</li>
                 <li>Mãe: ${dados.Pessoa[0].Familia.Mãe}</li>
             </ul>
             <h2>Animal:</h2>
             <p><strong>Tipo:</strong> ${dados.Animal[0].Tipo}</p>
             <p><strong>Nome:</strong> ${dados.Animal[0].Nome}</p>
         `;

         // Inserindo o conteúdo HTML na página
         container.innerHTML = htmlContent;
     }
 };

 // Enviando a requisição
 xhr.send();