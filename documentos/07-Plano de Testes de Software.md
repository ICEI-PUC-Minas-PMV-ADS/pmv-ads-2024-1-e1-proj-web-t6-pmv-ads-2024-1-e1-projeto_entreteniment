# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t6-pmv-ads-2024-1-e1-projeto_entreteniment/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t6-pmv-ads-2024-1-e1-projeto_entreteniment/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página</td>
  <td>
   <ul>
    <li>RF-01:	O site deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>André</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Sistema de recomendações </td>
  <td>
   <ul>
    <li>RF-02:	O site deve enviar aos usuários sugestões de conteúdo .</li>
   </ul>
  </td>
  <td> Verificar se as recomendações estão corretas </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na aba de pesquisa.</li>
   </ol>
   </td>
  <td>Receber recomendações necessárias de acordo com o interesse do usuário.</td>
  <td>Daniel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-04:	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar filmes e/ou séries de seu interesse.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na aba pesquisa.</li>
    <li>Digitar na caixa de pesquisa algum dado presente na página filmes e verificar se o resultado é exibido na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem exibir o dado solicitado.</td>
  <td>André</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-04: Validar a confirmação de recebimento de e-mail do usuário através da página Suporte </td>
  <td>
   <ul>
    <li>RF-05:	O site deve enviar um e-mail para os autores relatando o problema ou dúvida do usuário.</li>
   </ul>
  </td>
  <td> Se o produtor receber o e-mail do usuário relatando sua necessidade.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Sobre.</li>
    <li>Clicar na aba pesquisa.</li>
    <li>Digitar na caixa de texto a sua reclamação e/ou sugestão.</li>
   </ol>
   </td>
  <td>O produtor do site vai receber por e-amil esta sugestão, contendo nome, e-mail e o texto.</td>
  <td>André</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-05: Validar a função controle de pais </td>
  <td>
   <ul>
    <li>RF-06:	O site deve dar a possibilidade de controle de acesso aos responsáveis de menores de idade.</li>
   </ul>
  </td>
  <td> Validar a função "Controlde de pais".</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login na página inicial.</li>
    <li>Clicar na caixa de texto "Controle de pais".</li>
    <li>Função "Controle de pais" deverá ser ativada"</li>
   </ol>
   </td>
  <td>Esta conta deverá ter seu acesso com restrições de conteúdos.</td>
  <td>André</td>
 </tr>
</table>
