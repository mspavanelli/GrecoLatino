angular.module('grecoLatino', ['ngSanitize']).
	controller('cursosCtrl', function($scope) {
        $scope.area = "Inglês";

		$scope.cursos = function(area) {
			switch(area) {
				case 'ingles': return ingles;
				case 'redacao': return redacao;
				case 'coaching': return coaching;
				case 'hipnose': return hipnose;
			}
		}
	})



var ingles =
[
	{
		"nome": "Inglês Situacional",
		"descricao": "O curso de inglês situacional é dividido em 6 blocos de 24h abordando aspectos práticos da língua inglesa que, como o próprio nome diz, envolve situações do cotidiano. São apresentados diálogos com personagens em situações reais para que o aluno se sinta familiarizado com o idioma e ganhe confiança quando ele próprio tiver que passar pelas mesmas situações. As aulas são 100% práticas e as questões gramaticais são tratadas de forma intuitiva e geral sem se aprofundar muito nelas privilegiando a prática oral e auditiva.",
		"horas": "24h"
	},
	{
		"nome": "com música",
		"descricao": "O curso de inglês com música é voltado para aqueles que gostam de aprender de forma recreativa e informal. É dividido em blocos de 24h e, em cada bloco, é apresentada uma música de letra originalmente escrita em língua inglesa que será analisada entre professor e alunos para que haja entendimento. Através de um ambiente descontraído e amigável, ao cantar, analisar e recitar a música, o aluno entra em contato com o universo da língua inglesa de forma natural e absorve as estruturas intuitivamente o que é reforçado pelos exercícios praticados em sala de aula.",
		"horas": "24h"
	},
	{
		"nome": "para viagens",
		"descricao": "O curso de inglês para viagens é voltado especificamente para quem vai viajar ao exterior e não tem tempo para fazer um curso completo, mas precisa conhecer as ferramentas básicas do inglês para sobreviver em outro país. Assemelha-se com o curso de inglês situacional com a diferença que manterá o foco em situações de aeroporto, hotel, restaurante e direcionamentos, muito mais comuns e úteis aos viajantes. Com carga horária de 24h em bloco único, o curso abordará as competências de fala, audição e leitura, prioritariamente. Este curso não exclui a necessidade posterior de um curso completo.",
		"horas": "36h"
	},
	{
		"nome": "instrumental",
		"descricao": "O curso de inglês instrumental foi desenvolvido para pessoas que tem grande necessidade do inglês escrito para sua vida profissional e acadêmica. Com 24h de duração, ele mantem o foco na leitura e na escrita como ferramentas de aquisição de conhecimento, produção acadêmica, comunicação meramente escrita tão comum através dos meios eletrônicos de comunicação interpessoal. As habilidades de fala e audição darão espaço para a leitura e escrita visando maior desenvolvimento dos aspectos estruturais, semânticos e estilísticos do idioma.",
		"horas": "16h"
	}
];

var redacao =
[
	{
		"nome": "ENEM",
		"descricao": "O curso de redação para o ENEM é voltado para todos aqueles que vão participar da prova, mas ainda não se sentem seguros com a redação. Aqui são abordados os aspectos comumente levados em consideração pelos corretores, a forma como a redação é corrigida e como a nota é composta. Além disso, serão trabalhadas ferramentas de construção de texto, aspectos estruturais, semânticos e estilísticos da língua portuguesa.",
		"horas": "16h"
	},
	{
		"nome": "concursos",
		"descricao": "O curso de redação para concursos é voltado para todos aqueles que vão prestar concursos, mas ainda não se sentem seguros com a redação. O que difere este curso para o preparatório para o ENEM é a abordagem dos temas, a empresa a qual se concorre à vaga, o cargo em si e os aspectos políticos que envolvem a prova",
		"horas": ""
	},
	{
		"nome": "literária",
		"descricao": "O curso de redação literária é voltada para todos aqueles amantes da literatura que vêem numa boa história a tradução da própria natureza. O curso é divido em blocos não necessariamente sequenciais de 16h cada, tais como Romance, Conto e Fábula, Crônica e Resenha, Poesia.",
		"horas": ""
	},
	{
		"nome": "terapêutica",
		"descricao": "A redação terapêutica é um meio de, através da literatura, a pessoa expressar tudo aquilo que o mundo de um forma ou de outra acaba por sufoca ou reprimir. Com ambiente propício e sessões de 120 minutos a pessoa é levada a manifestar de forma escrita aquilo que desejar e que lhe fizer bem. As sessões podem ser realizadas com uma ou mais pessoas dependendo do desejo do cliente bem como pode ser adquirido uma única sessão ou pacotes com 10 sessões.",
		"horas": ""
	},
	{
		"nome": "geral",
		"descricao": "O curso de redação geral é voltado para todos aqueles que desejam melhorar a sua forma de se comunicar com o mundo por meio da palavra escrita. Como mandar um email, como escrever um bilhete, como fazer uma solicitação simples de um documento num órgão público, como fazer uma reclamação ou um elogio e tantas outras situações simples do cotidiano que nos pegamos sem as técnicas necessárias para que nos comuniquemos de forma correta e elegante. Em suas 16h de duração, o curso abordará aspectos estruturais, semânticos e estilístcos para que a pessoa tenha na escrita um lindo cartão de visita.",
		"horas": ""
	}
];


var hipnose =
[
	{
		"nome": "CURSO DE técnicas DE HIPNOSE CENTRADA NA SOLUCAO DE PROBLEMAS",
		"descricao": "<p> Curso baseado nos mais modernos estudos de hipnoterapia (<em>hipnotismo</em>) desenvolvidas pelo terapeuta Emile Coue (1857-1926), juntamente com os médicos Hypolite Bernheim e Libeaut. Direcionado a todos os que se interessam pelos estudos e conhecimentos dos potenciais recursos e mecanismos de funcionamneto da mente humanda. </p> <h4>Temática do Curso</h4> <ol> <li>A Hipnose: Origem, História e Filosofia</li> <li>O seu uso diário e profissional</li> <li>Técnica de Aplicação: A Auto-Hipnose</li> <li>Técnica de Aplicação: A Hipnose no Outro</li> <li>Exercícios práticos entre os alunos</li> </ol>"
	}	
];

var coaching =
[
	{
		"nome": "Introdução ao Coaching: ferramentas para o autodesenvolvimento",
		"descricao": "O curso permite ao participante desenvolver um processo que visa facilitar o seu autoconhecimento e o aprendizado para realização de seus objetivos. Nesse sentido, este curso reflete a importância da autogestão de sua vida e carreira frente as aceleradas mudanças em nosso mundo atual. Além disso, apresenta um panorama geral do que é coaching e como ele funciona na prática, promovendo aos alunos o aprendizado de ferramentas que auxiliarão a elaboração de uma estratégia para atingir suas próprias metas."
	}
];