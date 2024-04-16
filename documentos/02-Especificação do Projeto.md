# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Usuário 1 - Matheus - Público de 12 a 15 anos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Tem dificuldades em escolher um desenho/animes de seu gosto</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Deseja uma esperiência de plataforma que o auxilie na escolha de um desenho</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Usuário 2 - Cauã - Público de 19 a 25 anos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Consome pouco conteúdo em “TV aberta” e muito conteúdo em 
plataformas de streaming</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Tem necessidades de encontrar filmes/séries para assistir durante 
seu horário de almoço em tempo hábil</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Usuário 3 - Tia Vera - Público de 35 a 45 anos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Consome pouco streaming, somente “doramas” e muito conteúdo 
em TV aberta</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Tem necessidades de procurar um novo “dorama” de seu gosto
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Usuário 4 - Valdomiro - Público de 50 a 65 anos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Consome conteúdos em plataformas de streaming somente com seu 
neto</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Tem necessidades de procurar um desenho para o seu neto 
Matheus
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Matheus            | Receber recomendações personalizadas de desenhos/animes com base nos meus gostos e interesses. | Aproveitar ao máximo os intervalos de aula e o tempo livre antes de dormir assistindo desenhos.|
| Matheus            | Uma lista com resenha sobre desenhos e animes  | Estar atualizado e participar de conversas sociais sobre os desenhos e animes mais comentados, fortalecendo conexões e interesses comuns |
| Cauã               | Receber recomendações de séries e filmes da atualidade alinhados com meus interesses. | Descobrir e assistir rapidamente filmes que são do meu gosto. | 
| Cauã               | Ser prático na escolha de séries e filmes. | Tenho 2 horas de almoço diárias, sendo assim, tenho tempo de assistir conteúdos de streaming.  |
| Tia Vera           | Indicações de "doramas" com base nos meus gostos. | Não consumo muito conteúdo em plataformas de streaming, sendo doramas, meu único interesse.  |
| Valdomiro          | Recomendações de desenhos baseados no gosto de meu neto Matheus. | Ter tempo de qualidade com meu neto em algo que ele admira muito.  |


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Registro de usuários: Permitir que usuários se cadastrem na plataforma criando contas pessoais para que recebam indicações personalizadas, utilizando Local Storage   | Alta   | 
| RF-02 |  Sistema de recomendações: implementar algoritmos de recomendação que sugiram filmes, séries e desenhos com base nos interesses e histórico de visualização dos usuários utilizando a filtragem baseaada em conteúdo  | Alta   |
| RF-03 |  Gamificação: Implementar elementos de gamificação, como conquistas, pontos e níveis, para incentivar a participação dos usuários e aumentar o engajamento, através da linguagem de programação JavaScript  | Alta   |
| RF-04 |  Busca avançada: Possibilitar aos usuários realizar buscas avançadas por títulos, atores, diretores, palavras-chave etc, através da linguagem de programação JavaScritp  | Alta   |
| RF-05 |  Notificações: enviar notificações aos usuários sobre novos lançamentos, recomendações personalizadas, atualizações de conteúdo, através de e-mail, mensagens SMS etc.  | Alta   |
| RF-06 |  Controle de pais: Oferecer ferramentas de controle dos pais para gerenciar o acesso e as recomendações de conteúdo para crianças e adolescentes, através da linguagem de programação JavaScript  | Alta   |
| RF-07 |  Integração com serviços de streaming: Permitir que os usuários acessem a conteúdos de serviços de streaming diretamente da plataforma, disponibilizando links para acesso na própria plataforma, através de API   | Alta   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  Desempenho: A plataforma deve ser responsiva e rápida, garantindo tempos de carregamento rápidos e uma experiência de usuários gluida mesmo em momentos de pico de tráfego, utilizando um sistema de cache e o uso de banco de dados (a princípio Local Storage) para garantir um desempenho eficaz | Alta | 
| RNF-02 |  Segurança: Implementar a autenticação de 2 fatores para garantir o acesso a plataforma. | Média |
| RNF-03 |  Usabilidade: Realizar testes de usabilidade com usuários reais para identificar e corrigir problemas de navegação, fluxo de trabalho e acessibilidade | Alta |
| RNF-04 |  Manutenção: Manter um registro de mudanças e versões para rastrear as alterações feitas na plataforma e garantir a reversão em caso de consequências | Alta |
| RNF-05 |  Conformidade regulatória: Manter-se atualizado com as leis e regulamentações aplicáveis, como LGPD. | Alta |
| RNF-06 |  Suporte técnico: fornecer um canal de suporte como chat ao vivo, e-mail ou telefone, para que os usuários possam obter ajuda quando necessário | Média |
| RNF-07 |  Localização e internacionalização: Suportar mais de um idioma e formatos de data/hora a fim de abranger um público estrangeiro | Média |
| RNF-08 |  Integridade dos dados: Garantir que os dados armazenados na plataforma sejam precisos, completos e consistentes ao longo do tempo, utilizando técnicas de validação e verificação de dados. | Média |

**Prioridade: Alta / Média / Baixa. 

