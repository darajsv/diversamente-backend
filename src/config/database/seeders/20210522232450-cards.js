'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('cards', [
       {
        name: 'Não-binárie',
        description: 'Pessoas não-binárias, não binárias ou nãobinárias são pessoas cujo gênero não é 100% homem, nem 100% mulher. Isso inclui pessoas com múltiplos gêneros de um só vez ou um de cada vez, mudando de tempos em tempos, entre outras possibilidades. É importante ressaltar que só a pessoa pode decidir se identificar como não binária ou não. Logo, tem pessoas que dizem ser não-binária no lugar do seu gênero exato por não querer complicar as coisas, ou por estarem questionando seu genero e não saberem bem como descrever/rotular seu gênero alem de dizer que este é não-binário. A bandeira não-binária mais utilizada foi criada em 2014 por Kye Rowan, ela é composta de quatro faixas horizontais de igual tamanho, que possuem os seguintes significados: Amarela: Estar fora do conceito binário de gênero; Branca: Pessoas que são de muitos gêneros; Roxa: Fluidez e multiplicidade das experiências de gênero, a unicidade e flexibilidade de pessoas não-binárias, assim como pessoas cujos gêneros são o feminino e o masculino, ou entre estes dois; Preta: Ser agênero ou sem gênero.',  
        image: 'https://i.ibb.co/y6YRHw8/nonbinary-pride-flag-1-by-pride-flags-d8zu7u6-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gênero queer',
        description: 'Pessoas de gênero queer, ou genderqueer, podem ser: Pessoas que não são nem 100% homens, nem 100% mulheres. Ou seja, desde pessoas sem gênero, pangênero e maveriques até andrógines, proxvirs e demimulheres podem se chamar de genderqueer, caso queiram. Pessoas bigênero ou com gênero que flui entre homem e mulher também podem se dizer genderqueer; Pessoas cujo gênero e orientação estão interligados (por exemplo, homens que não se sentem exatamente homens por sentirem atração por homens, e agem de forma que não associam ao gênero masculino por conta disso); Pessoas que agem radicalmente contra as normas de gênero, pela maneira de se vestir, por exemplo. Genderqueer é uma identidade que é geralmente utilizada por pessoas que não se dizem cisgênero – e não apenas por recusarem aceitar que são algo além de “normais” – mas é possível que pessoas consideradas cis utilizem o rótulo, afinal ele é extremamente abrangente. A bandeira genderqueer foi criada por Marilyn Roxie em junho de 2011, embora Marilyn tivesse feito outras propostas antes. A bandeira possui três faixas horizontais de igual tamanho, nas cores lavanda, branca, e verde. Tais faixas representam: Lavanda: Androginia e andrógines, além da identidade queer (lavanda é uma cor há muito tempo associada com identidades não-dicishétero); Branca: Identidade agênero; Verde: Inverso de lavanda. Representa as pessoas cujas identidades não fazem referência a gêneros binários.', 
        image: 'https://i.ibb.co/RDwWWDn/genderqueer-pride-flag-1-by-pride-flags-d8zu7oc-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Agênero',
        description: 'Agênero é uma identidade que pode denotar ausência de gênero, gênero neutro, ou ausência de identidade de gênero. Algumas pessoas também se identificam como agênero por não entenderem bem seu gênero, ou simplesmente por não ligarem para gênero. importante não confundir agênero (agender) com “sem-gênero” (non-gendered), que é um termo antigo referente a pessoas não-binárias, independentemente se a identidade de gênero delas envolve a ausência de gênero de alguma forma ou não. A bandeira agênero mais conhecida é formada por 7 listras horizontais de mesma altura, as quais são: Pretas: simbolizando a completa ausência de gênero; Cinzas: simbolizando a ausência parcial de gênero; Brancas: simbolizando também a completa ausência de gênero; Verde: simbolizando identidade não-binária. Existem outras bandeiras agênero, mas elas são pouco populares.', 
        image: 'https://i.ibb.co/FmMmtbF/agender-pride-flag-1-by-pride-flags-d8zu7ft-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gênero-fluido',
        description: 'Pessoas gênero-fluido ou gênero fluido são pessoas cujas identidades de gênero passam por mudanças de tempos em tempos. Existem identidades específicas para gêneros que fluem apenas entre gêneros parecidos, ou com a mesma natureza; existem identidades para gêneros que só fluem em certas condições; existem identidades para gêneros que fluem apenas entre números específicos de gêneros; existem identidades para gêneros que fluem rapidamente ou lentamente; e por assim vai. Porém, qualquer uma dessas pessoas pode se chamar de gênero-fluido, ainda que certas pessoas se sintam mais confortáveis apenas se identificando com rótulos mais específicos – especialmente as pessoas que não sentem que seu gênero muda o suficiente para se chamarem de gênero-fluido. A bandeira gênero-fluido foi postada em 3 de agosto de 2012 no blog genderfluidity, por JJ Poole. JJ escreve que sua bandeira representa a flutuação e a flexibilidade do gênero em pessoas gênero-fluido. Os significados dados às cores são:Rosa: feminilidade. Branca: ausência de gênero. Roxa: combinação de masculinidade e feminilidade. Preta: todos os gêneros. Azul: masculinidade.' ,
        image: 'https://i.ibb.co/vYPrCKN/genderfluid-pride-flag-by-pride-flags-d95m3pl1.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Homem não binarie',
        description: 'Ume homem não-binárie – a palavra homem dessa identidade pode ser substituída por menino, guri, garoto, ou outras palavras de significado similar – é uma pessoa não-binária que acha os conceitos de ser homem e/ou de masculinidade úteis para descrever sua identidade. Ume homem não-binárie pode ser alguém cujo gênero é qualquer gênero não-binário (como agênero, não-binárie, ou andrógine), mas que possui preferência por coisas consideradas tipicamente masculinas (pronome ele, roupas associadas com homens, corpo parecido com o de um homem cis perissexo, etc.). Mas, é  válido lembrar que homens não-binárias não necessariamente utilizam o artigo o, o pronome ele, e o final de palavra o para si; também não são necessariamente pessoas que são lidas como homens ou que se vestem estereotipicamente como homens. A bandeira de orgulho para este gênero possui sua origem desconhecida, assim como o significado de suas cores. As primeiras ocorrências da bandeira aparentemente são de 2015.', 
        image: 'https://i.ibb.co/pRCwcgp/nonbinary-boy-pride-flag-by-pride-flags-d8zu7tl-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mulher não binarie',
        description: 'Ume mulher não-binárie – a palavra mulher desta identidade pode ser substituída por menina, guria, garota, ou outras palavras de significado similar – é uma pessoa não-binária que acha os conceitos de ser mulher e/ou de feminilidade úteis para descrever sua identidade. Ume mulher não-binárie pode ser alguém cujo gênero é qualquer gênero não-binário (como agênero, não-binárie, ou andrógine), mas que possui preferência por coisas consideradas tipicamente femininas (pronome ela, roupas consideradas “para mulheres”, corpo parecido com o de uma mulher cis perisexo, etc.). Mas, é valido lembrar que mulheres não-bináries não necessariamente utilizam o artigo a, o pronome ela, e o final de palavra a para si; tambem não são necessariamente pessoas que são lidas como mulheres ou que se vestem estereotipicamente como mulheres. A bandeira de orgulho para este gênero possui sua origem desconhecida, assim como o significado de suas cores. As primeiras ocorrências da bandeira aparentemente são de 2015.', 
        image: 'https://i.ibb.co/y60b2TW/nonbinary-girl-by-pride-flags-d8zu7tv.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Demigênero',
        description: 'Pessoas demigênero se identificam parcialmente como certo gênero. Isso pode significar que a pessoa tem dois ou mais gêneros ao mesmo tempo. Por exemplo, se uma pessoa é bigênero neutrois/mulher, pode preferir dizer que é demimulher ou demineutrois. A pessoa também possui um gênero, mas não completamente; ou possui uma conexão a certo gênero, mas não é inteiramente daquele gênero. Por exemplo, ume demimenino pode se identificar como tal por não se sentir inteiramente menino, mesmo que o gênero homem faça parte de seu gênero. A pessoa é gênero-fluido, e passa parte do tempo sendo de um certo gênero. Por exemplo, uma pessoa demiagênero pode ser completamente agênero em um dado momento, mas se identifica assim porque em outros momentos possui gênero. O prefixo demi significa metade, porém, não é obrigatório que uma pessoa tenha metade de um gênero para se dizer demigênero. Por exemplo, pessoas que se encaixam nas descrições de magigênero ou nanogênero também podem se dizer demigênero, caso queiram. As primeiras bandeiras demigênero – das identidades demimenino e demimenina – foram feitas por Ska (usuárie transrants no Tumblr) em 2014. Ska não postou os significados das cores das faixas.', 
        image: 'https://i.ibb.co/qYknc70/deminonbinary-pride-flag-by-pride-flags-d8zu7jo-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Andrógine',
        description: 'Andrógines são pessoas cujo gênero está entre mulher e homem, ou cujo gênero é uma mescla de mulher e homem. Ou ainda, andrógines podem ser entre/uma mescla de dois outros gêneros, mas geralmente esses gêneros ou são os gêneros binários, ou gêneros relacionados a estes gêneros binários. Raramente, existem pessoas que descrevem andrógine como um gênero que não é homem nem mulher, completamente separado destes dois. No entanto, como já existem muitos outros termos relativamente populares para cobrir pessoas que se sentem assim (agênero, neutrois, genderqueer, não-binárie, etc.), são poucas as pessoas que se identificam como andrógine por este motivo hoje em dia. Andrógines não necessariamente se vestem ou se comportam de forma considerada andrógina/neutra pela sociedade. A identidade andrógine é possivelmente datada de antes da era da internet, o que faz com que seja difícil achar exatamente quem foi que cunhou a identidade, e quando. Vários recursos andrógine, tanto grupos quanto sites com informações, também estão fora do ar. Além disso, possuem diversas bandeiras que o representam que foi surgindo ao longo dos anos, mas o principal das bandeiras são as cores azul, rosa e roxo. Rosa representando a feminilidade, azul a masculinidade e roxo a mistura entre ambas as qualidades.', 
        image: 'https://i.ibb.co/qjwr8fX/androgyne-2-by-pride-flags-d96xt3t-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gênero Neutro',
        description: 'Gênero neutro, que também pode ser grafado como gênero-neutro ou simplesmente como neutre (como em “eu sou (ume) neutre” ou “meu gênero é neutro”), é um gênero neutro entre todos os gêneros, ou neutro entre os gêneros binários. É possível, mas não tão comum, que gênero neutro seja utilizado no lugar de sem gênero. ste termo pode ser utilizado pela pessoa achar que se disser que seu gênero é neutro vai ser entendida mais facilmente, tanto por pessoas em geral não conhecerem outros termos, quanto por estes termos não serem extremamente específicos. Ou a pessoa pode não estar ciente de termos alternativos, como neutrois, agênero, transneutre ou andrógine. Ou pode ser uma preferência pessoal, por achar que gênero neutro soa melhor ou descreve seu gênero melhor. Como gender neutral (gênero neutro em inglês, mas também pode ser neutre(s) em relação a gênero, entre outras expressões) é aplicável a muitas coisas, não sabemos exatamente qual a história da identidade ou das bandeiras.', 
        image: 'https://i.ibb.co/5BRZFcJ/gender-neutral-neutral-gender-by-pride-flags-dae6v81-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kingênero',
        description: 'Kingênero é um termo que descreve identidades de gênero relacionadas a ser otherkin. As primeiras definições colocam ênfase em pessoas kingênero terem seu gênero inteiramente ou fortemente definido pelo kin. Porém, atualmente, kingênero é um termo utilizado para qualquer identidade de gênero influenciada pelo kin. Otherkin é uma subcultura de pessoas que se identificam como não-humanas, parcialmente ou totalmente. Otherkins podem acreditar ter uma experiência genética diferente de não-otherkins, ou puramente espiritual, por terem almas não-humanas ou por serem reencarnações de não-humanes. Otherkins podem ser kin com animais (lobes, gates, etc.), espécies fantásticas (fadas, anjos, dragões, etc.), alienígenas, personagens fictícies, entre outros tipos de seres e coisas. Pessoas que são kin com animais também podem ser chamadas de therians. Qualquer otherkin cujo gênero for definido ou influenciado por ser otherkin pode ser kingênero; todas as pessoas kingênero podem se identificar como otherkin, mas nem todas as pessoas otherkin são kingênero. Uma pessoa kingênero pode sentir que não possui gênero por ser kin com um robô sem gênero; outra pessoa kingênero pode dizer que seu gênero tem a ver com seu kin diretamente, dizendo que seu gênero é elfe; outra pessoa kingênero pode dizer que seu gênero é fortemente influenciado por ser kin com plantas.Segundo Pride Archive, aroacehawkeye também criou a primeira bandeira kingênero, provavelmente também em 2014: uma bandeira composta por quatro faixas horizontais de mesmo tamanho, nas cores amarela, azul, roxa, e rosa, com os símbolos otherkin (uma estrela de sete pontas) e therian (um círculo por cima de um triângulo com um traço horizontal no centro) pretos, sobrepondo as faixas coloridas. A faixa amarela representa gêneros não relacionados com homem e/ou mulher ou ausência de gênero (depende da fonte), a faixa azul representa o gênero homem, a faixa roxa representa gêneros que referenciam ambos os gêneros binários, e o rosa representa o gênero mulher. Porém, a fonte dada para esta informação não contém os significados das cores das faixas', 
        image: 'https://i.ibb.co/HgDkXKz/kingender-2-by-pride-flags-dac0km3-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Neurogênero',
        description: 'Pessoas neurogênero são pessoas cujo gênero é fortemente relacionado com sua neurodivergência. Neurogênero pode ser um gênero por si só ou uma descrição para gêneros exclusivos de pessoas neurodivergentes (como gênero-vago); Uma descrição para pessoas que se identificam com o gênero que são por causa de sua neurodivergência, mesmo que tal gênero não seja exclusivo de pessoas neurodivergentes (como agênero ou homem não-binário). Pessoas neurodivergentes são pessoas que possuem configurações neurológicas atípicas. Exemplos de neurotipos neurodivergentes são dislexia, autismo, déficit de atenção, transtorno obsessivo-compulsivo, e psicose; mas existem vários outros. Pensar que pessoas que não conseguem definir seu gênero por serem neurodivergentes devem “apenas estar confusas” e achar que é justo que outras pessoas decidam seus gêneros e rótulos por elas é um erro capacitista e cissexista. O gênero é formado a partir de interações com a sociedade, então é lógico que pessoas que vivenciam esta interação de forma diferente podem acabar formando identidades de gênero diferentes.a bandeira neurogênero, composta por quatro faixas verticais de igual tamanho nas cores vermelha, verde, azul clara e roxa, com um grande símbolo de infinito cinza-escuro (descrito como preto), que vai de uma ponta à outra das laterais esquerda e direita da bandeira. As cores do fundo representam os diversos tipos de neurodivergências e identidades de gênero; o símbolo de infinito representa neurodiversidade; a cor preta representa a confusão em relação a gênero que várias pessoas neurodivergentes sentem.', 
        image: 'https://i.ibb.co/M8dPNd0/neurogender-pride-flag-by-pride-flags-d97kgja-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Transfeminine',
        description: 'Pessoas transfemininas são pessoas que foram designadas como homens ao nascimento, mas cujas identidades possuem alguma relação com ser mulher, ou com feminilidade. Assim como mulher não-binárie, a identidade transfeminina pode ser utilizada tanto por pessoas que se identificam mais especificamente como outros gêneros, quanto por pessoas que não sabem/querem descrever suas identidades com outras palavras. A primeira bandeira transfeminina mostrada nesta página foi postada em 2 de junho de 2016, e foi feita por Jane no blog Pride Flags For Us. Jane não postou significados para o simbolismo da bandeira, mas sua intenção era que não houvesse azul na bandeira, ao contrário das bandeiras mais antigas para pessoas transfemininas. A outra bandeira transfeminina deve ter sido postada pelo meio de 2017, e foi feita por arachnopath no Tumblr (conta atualmente desativada). Seu objetivo era fazer uma bandeira para mulheres trans que fosse similar à bandeira trans e feita por uma mulher trans. Suas faixas vermelhas simbolizam a luta e a violência pelas quais mulheres trans passam com o processo de transição e no dia-a-dia, além do histórico de resistência e ativismo. Suas faixas rosa simbolizam mulheridade e feminilidade. Sua faixa branca representa a transição e uma distinção do binário de gênero. Ainda que tenha sido feita como uma bandeira para mulheres trans, esta bandeira foi difundida e utilizada também como uma bandeira transfeminina em geral.', 
        image: 'https://i.ibb.co/5nfrMpy/trans-woman-mtf-pride-flag-3-by-pride-flags-da6acs9-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Transmasculine',
        description: 'Pessoas transmasculinas são pessoas que foram designadas como mulheres ao nascimento, mas cujas identidades possuem alguma relação com ser homem, ou com masculinidade. Pessoas transmasculinas podem ser homens binários (embora homens trans binários provavelmente se identificarão como homens, e não como pessoas transmasculinas, em relação à sua identidade individual); Ser de algum gênero não-binário qualquer, mas fazer transição para ter um corpo considerado mais masculino pela sociedade (tomar testosterona, fazer cirurgia para remoção de seios, fazer faloplastia, etc.); Ser de algum gênero não-binário qualquer, mas adotar linguagem (artigo/pronome), gestos, tonalidade vocal, roupas, e/ou enfeites associados a ser homem; ou ser de alguma identidade não-binária relacionada a ser homem ou à masculinidade (proxvir, nonpuer, demimenino, homem agênero, duramenino, homem-vago, etc).  Assim como homem não-binárie, a identidade transmasculina pode ser utilizada tanto por pessoas que se identificam mais especificamente como outros gêneros, quanto por pessoas que não sabem/querem descrever suas identidades com outras palavras. A bandeira transmasculina foi feita por Jane no blog Pride Flags For Us. Jane não postou significados para o simbolismo da bandeira, mas seu objetivo era fazer uma bandeira transmasculina sem faixas rosa, ao contrário das anteriores.', 
        image: 'https://i.ibb.co/sF4sJnP/trans-man-ftm-pride-flag-3-by-pride-flags-da6acs3-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Transneutre',
        description: 'Pessoas transneutras são pessoas cujas identidades possuem alguma relação com um gênero neutro, ou com neutralidade. Pessoas transneutras podem ser pessoas de gênero neutro, neutrois, agênero, ou de outras identidades relacionadas à neutralidade (embora provavelmente estas se identifiquem como seus gêneros, e não como pessoas transneutras, em relação à sua identidade individual); Ser de um gênero qualquer, mas fazer transição para ter um corpo considerado mais neutro pela sociedade (tomar bloqueadores hormonais, fazer cirurgia para remoção de seios, barba, e/ou outras características consideradas sinais de gênero, etc.); Ser de um gênero qualquer, mas adotar linguagem (artigo/pronome), tonalidade vocal, roupas, e/ou enfeites que não possuem associação com masculinidade ou feminilidade; e ser de alguma identidade não exatamente neutra, mas associada a um gênero neutro ou à neutralidade (paraneutrois, libraneutre, demineutrois, altegênero-neutro, horoneutrois, etc). A identidade transneutra pode ser utilizada tanto por pessoas que se identificam mais especificamente como outros gêneros, quanto por pessoas que não sabem/querem descrever suas identidades com outras palavras. A bandeira foi feita por Hermy no blog Ask Pride Color Schemes, o tom verde mais claro é o mesmo da bandeira agênero, o tom verde mais escuro é o mesmo da bandeira neutrois, e o tom de verde restante é um tom médio entre estes dois outros tons.É também importante destacar que nem todas as pessoas que preenchem um ou mais dos quesitos listados podem querer se identificar como transneutras.', 
        image: 'https://i.ibb.co/bbQSkBG/Transneutral.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Intergênero',
        description: 'A definição de intergênero mais aceita atualmente é a de um gênero influenciado ou definido por ser intersexo. Ou seja, intergênero pode ser um gênero não-binário por si só, definido por intersexualidade; uma descrição que informa que a pessoa é de certo gênero por ser intersexo, não importa qual gênero (andrógine, homem, mulher, neutrois, etc); ou um termo guarda-chuva para identidades de gênero exclusivas para pessoas intersexo. Mesmo que muitas pessoas intergênero sejam não-binárias, pessoas intergênero também podem ser mulheres ou homens ipsogênero, transgênero, ou cisgênero.s bandeiras intergênero foram feitas para a definição de intergênero de 2014. A primeira bandeira intergênero é composta por 7 listras horizontais de tamanhos iguais, sendo que suas faixas são das seguintes cores, em ordem: rosa clara, branca, roxa, cinza, roxa, branca, e azul clara. Essa bandeira foi feita por D no blog Actually Intersex. Suas cores são baseadas na bandeira intersexo feita por Natalie Phox, com a ordem das cores trocada, e com uma faixa cinza ao invés de um degradê. Como a definição mais espalhada de intergênero é que é alguma identidade definida/influenciada por ser intersexo, é recomendado o uso de duogênero para pessoas intersexo que possuem gênero entre homem e mulher por serem intersexo, e de centrigênero para pessoas cujo gênero está entre quaisquer dois ou mais gêneros.', 
        image: 'https://i.ibb.co/VpPJLc8/intergender-1-by-pride-flags-d9638yf-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ipsogênero',
        description: 'Uma pessoa ipsogênero é uma pessoa intersexo que se identifica completamente e pela vida inteira com o mesmo gênero que lhe foi designado ao nascer. Pessoas ipsogênero são muitas vezes separadas da categoria cisgênero, por não terem acesso total ao privilégio cis: seus corpos são tratados como inadequados, mutações que deveriam ser corrigidas, exceções esquecidas às normas de gênero. Ainda assim, como o termo ipsogênero é pouco conhecido e nem todas as pessoas que se encaixam nele o usam, pode ser importante direcionar certas críticas a uma sociedade/um pensamento pericis (perissexo, ou seja, não-intersexo, e cisgênero) ao invés de somente cis', 
        image: 'https://i.ibb.co/tKxZGQg/ipsogender-by-pride-flags-da9jaxy-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Transgênero',
        description: 'Alguém que se identifica, ao menos parcialmente, com um gênero diferente do gênero que lhe foi designado ao nascer, independentemente de suas características corporais. É válido notar que várias pessoas podem não querer utilizar o rótulo trans ou transgênero, utilizando somente transexual, travesti, não-binárie, genderqueer, agênero ou gênero-fluido, entre outras identidades. Enquanto pessoas cis ou ipso são sempre de gêneros binários (homem e mulher), pessoas trans podem ser tanto binárias quanto não-binárias, ou podem mesmo não ter certeza se são binárias ou não.É possível utilizar transgênero como um termo genérico para seu próprio gênero, como uma identidade aberta significando apenas “não-cis” sem especificar gênero, mas é raro ver isso nos dias de hoje; geralmente pessoas nesta situação utilizam genderqueer, não-binárie ou pomogênero. O termo transgênero foi cunhado em 1965 por John Oliven, que queria uma substituição para o termo “transexualismo” visto que ser trans tem a ver com gênero, e não com orientação sexual (como outros termos que terminam em -sexual). O termo ganhou popularidade décadas depois, e já foi usado para cobrir qualquer pessoa que desafiava papéis de gênero, mas eventualmente ficou associado apenas a pessoas cuja identidade de gênero difere do gênero designado ao nascimento. Ainda assim, ele é rejeitado por muites ativistas brasileires, que muitas vezes associam erroneamente o termo transgênero somente com fluidez de gênero ou com quem não quer realizar transição física. É por isso que muitas organizações ainda usam transexual, um termo mais associado com pessoas trans que passam por terapia hormonal e/ou cirurgias para terem corpos mais próximos com os associados a corpos pericis. Pessoas que se identificam apenas como trans ou transgênero podem e muitas vezes querem passar ou passam por estes procedimentos, fazendo com que transgênero seja um termo bem mais abrangente do que transexual.', 
        image: 'https://i.ibb.co/YjwLdPg/transgender-pride-flag-by-pride-flags-d8zu7zf-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ultergênero',
        description: 'Alguém intersexo que não se identifica parcialmente ou totalmente com seu gênero designado, mas que sente que não se encaixa bem na identidade trans por ser intersexo. Pessoas ultergênero se encaixam na modalidade transgênero, e podem usar o termo em certos contextos, mas em geral se identificam primariamente como ultergênero. De qualquer forma, o termo ultergênero não deve ser forçado em pessoas intersexo que se identificam como trans. A decisão de quais rótulos usar deve ser feita por cada pessoa intersexo.', 
        image: 'https://i.ibb.co/Bqx45nY/ultergenero-300x200.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Isogênero',
        description: 'Pessoas isogênero não querem se categorizar como cis ou trans. Este termo foi cunhado antes de termos como utrinquegênero e ultergênero, então é difícil saber se é para ser um termo que abrange qualquer modalidade de gênero que não seja cisgênero ou transgênero, ou se é para ser uma modalidade de gênero para quem não quer se categorizar como uma das outras existentes. Muitas pessoas não-binárias se sentem excluídas do termo trans, seja pelas narrativas padrão sobre ser trans serem extremamente binárias, seja por terem tido experiências pessoais com comunidades trans exorsexistas e quererem se distanciar delas, seja por se identificarem parcialmente com seu gênero designado, seja por não terem gênero e considerarem transgênero um termo associado demais com quem tem gênero, entre outros motivos. Para estas pessoas, o termo isogênero pode ser atraente, mas a possibilidade de outras pessoas quererem utilizá-lo não deve ser descartada.', 
        image: 'https://i.ibb.co/ynP8W99/isogender-by-pride-flags-dcds27o-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gênero-fofo',
        description: 'Gênero-fofo possui duas definições pode ser alguém cujo gênero é baseado em fofura ou alguém cujo gênero é caracterizado por algo fofo (ou, ao menos, fofo para a pessoa com este gênero). Uma pessoa gênero-fofo cujo gênero é baseado em fofura geralmente é alguém que sente que fofura faz parte de seu gênero, de forma que deseja se vestir e ter características corporais que considera fofas. Isso pode ser combinado com outros gêneros: por exemplo, uma menina gênero-fofo (menina-fofa não funciona muito bem, né) pode se sentir disfórica com roupas mais formais ou sexy, e querer ter traços mais associados com crianças (como altura baixa e ausência de seios). Já uma pessoa gênero-fofo cujo gênero é caracterizado por algo fofo pode ter seu gênero baseado em qualquer coisa que acha fofa, desde animais até estilos de roupa ou tipografia. Este gênero pode às vezes coincidir com outros gêneros “estéticos”, como gênero-estrela e gênero-cor. Ita (autistic-italy no Tumblr) fez a bandeira para a primeira definição, cujo fundo é composto por uma faixa rosa clara que é separada de uma faixa creme bem maior por uma faixa rosa escura que parece mais um traço. Sobrepondo isso, há um coração roxo claro com uma borda roxa no centro da bandeira.', 
        image: 'https://i.ibb.co/rHfY2N7/cutegender-gendercute-pride-flag-2-by-pride-flags-da3t98t-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Corgênero',
        description: 'Pessoas gênero-cor ou corgênero são pessoas que só conseguem explicar seu gênero relacionando-o com uma cor. Um gênero-cor também é associado com sentimentos, objetos, e outras coisas relacionadas àquela cor. Pessoas gênero-cor geralmente se identificam com gêneros-cor específicos, como gênero-roxo, gênero-verde, ou gênero-rosa. Também é possível escrever gêneros-cor com a cor como prefixo, como em violetagênero ou azulgênero. Pessoas gênero-cor podem usar tal rótulo pelos seguintes motivos, entre outros. Suas experiências de gênero são associadas sinestesicamente com uma ou mais cores (por exemplo, uma pessoa pode sentir que seu gênero é verde, assim como pessoas com sinestesia podem ver cores em certos sons); suas experiências de gênero trazem sentimentos/sensações que são associades a uma ou mais cores (por exemplo, uma pessoa pode se dizer gênero-verde por ser uma pessoa não-binária que associa essa cor com a tranquilidade de existir fora de concepções binárias de gênero); ou uma ou mais cores podem ser usadas como metáfora para sua identidade de gênero (por exemplo, uma pessoa pode se dizer gênero-verde por sentir que seu gênero é adjacente a homem, que seria azul, mas que ao mesmo tempo não pode ser identificável como homem).  A postagem sobre a bandeira especifica que o cinza deve ser substituído pela cor do gênero específico da pessoa. Fora isso, não foram especificados significados para cada cor ou qualquer coisa assim. Mesmo assim, a roda de cores no centro da bandeira é geralmente representativa de todas as cores, e por isso deve ter sido escolhida', 
        image: 'https://i.ibb.co/qpW6rGG/colorgender-1-by-pride-flags-d96xt4a-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Zenina',
        description: 'Ume zenina é alguém que se encaixa em alguma das descrições de mulher não-binárie, mas que quer um nome mais casual e/ou simples para se chamar. Alguns exemplos: Uma pessoa librafeminina pode preferir se chamar de zenina por ser um nome mais curto e fácil de lembrar; Ume mulher-vague pode achar que vai ser menos ridicularizade pelo seu gênero caso se chame apenas de zenina; Ou ume mulher não-binárie que não quer ter seu gênero descrito apenas como mulher não-binárie pode utilizar zenina como sufixo ao invés de mulher não-binária, como em demizenina, horozenina, altezenina, ou quiverzenina. Caso prefira, alguém que se encaixa na descrição de zenina pode se identificar como zulher ou zuria. No entanto, é bom lembrar que Zuria é um nome próprio também.A bandeira zenina é composta por cinco faixas horizontais de igual tamanho. Porém, a maioria das faixas não possuem uma só cor. É como se houvesse uma gravata borboleta sobrepondo o resto da bandeira, formando uma espécie de X. Esta tal gravata possui a cor rosa arroxeada nas faixas ímpares, e a cor verde nas faixas pares. O resto da bandeira é cinza-escura (presente na primeira e na última faixa) e branca (presente na segunda e na quarta faixa). A terceira faixa é totalmente rosa arroxeada, por estar totalmente “coberta pela gravata”. Os significados das cores são os seguintes. Rosa arroxeada: significa a conexão ao gênero mulher, sem ser exatamente tal gênero; Verde: representa que zenina é uma identidade não-binária, e completamente separada de gêneros binários para algumas pessoas; Cinza escura: representa a ambiguidade do rótulo, já que pode ser utilizado por pessoas com várias identidades diferentes; Branca: remete à bandeira genderqueer.', 
        image: 'https://i.ibb.co/J7WGWPh/xirl-pride-flag-by-pride-flags-d96qjjr-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Zenino',
        description: 'Um zenino é alguém que se encaixa em alguma das descrições de homem não-binárie, mas que quer um nome mais casual e/ou simples para se chamar. Alguns exemplos:Uma pessoa libramasculina pode preferir se chamar de zenino por ser um nome mais curto e fácil de lembrar; Um homem-vague pode achar que vai ser menos ridicularizado pelo seu gênero caso se chame apenas de zenino; Ou ume homem não-binárie que não quer ter seu gênero descrito apenas como homem não-binárie pode utilizar zenino como sufixo ao invés de homem não-binárie, como em demizenino, horozenino, altezenino, ou quiverzenino.Caso prefira, alguém que se encaixa na descrição de zenino pode se identificar como zomem ou zuri. No entanto, é bom lembrar que Zuri é um sobrenome também. A bandeira zenino é composta por cinco faixas horizontais de igual tamanho. Porém, a maioria das faixas não possuem uma só cor. É como se houvesse uma gravata borboleta sobrepondo o resto da bandeira, formando uma espécie de X. Esta tal gravata possui a cor ciano clara nas faixas ímpares, e a cor verde nas faixas pares. O resto da bandeira é cinza-escura (presente na primeira e na última faixa) e branca (presente na segunda e na quarta faixa). A terceira faixa é totalmente ciano clara, por estar totalmente “coberta pela gravata”. Os significados das cores são os seguintes: Ciano clara: significa a conexão ao gênero homem, sem ser exatamente tal gênero; Verde: representa que zenino é uma identidade não-binária, e completamente separada de gêneros binários para algumas pessoas; Cinza escura: representa a ambiguidade do rótulo, já que pode ser utilizado por pessoas com várias identidades diferentes; Branca: remete à bandeira genderqueer.', 
        image: 'https://i.ibb.co/bjtvcRS/xoy-pride-flag-by-pride-flags-d96qil2-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gênero-Estrela',
        description: 'Gênero-estrela, gênero estrela ou gênero-estrelado é uma identidade que pode significar o gênero de uma estrela; Um gênero que não parece ser humano ou terrestre, por estar além da compreensão; Ou uma identidade para quem acha que, não importa quantos rótulos para gênero inventarem, nenhum deles vai encaixar. Mars, que cunhou gênero-estrela, escreveu que sabia que seu gênero não era binário, andrógino, ou neutro, e pensou que talvez seu gênero fosse como o de uma estrela, porque o gênero de uma estrela seria algo tão desconhecido quanto seu gênero. Algumas outras pessoas gênero-estrela descrevem que possuem senso de gênero, mas que tal gênero está completamente fora dos gêneros homem e mulher ou de qualquer ponto entre estes. Vale notar que gênero-estrela é uma das primeiras identidades a serem definidas especificamente por tal tipo de experiência de gênero dentro do conceito branco/eurocêntrico de não-binaridade, junto a outras, como aporagênero e maverique.', 
        image: 'https://i.ibb.co/p0xNpfG/stargender-pride-flag-1-by-pride-flags-d9639a2-300x180.png',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => { 
     await queryInterface.bulkDelete('cards', null, {});
  }
};
