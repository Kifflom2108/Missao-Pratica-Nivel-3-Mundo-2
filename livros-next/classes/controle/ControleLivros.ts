import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'Psicose',
    resumo:
      'Psicose é um clássico do terror escrito por Robert Bloch. A história acompanha Norman Bates, um jovem tímido e perturbado que gere um motel na estrada. O livro explora temas como a dualidade da personalidade e a natureza do mal, com reviravoltas e suspense que mantêm o leitor preso até o fim.',
    autores: ['Robert Bloch'],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'O Vilarejo',
    resumo:
      'O Vilarejo é uma coletânea de contos de terror escrita por Raphael Montes. Cada conto se passa em um vilarejo diferente e traz histórias sombrias e assustadoras, explorando medos e segredos ocultos. Com narrativas envolventes e finais surpreendentes, o livro oferece uma experiência arrepiante aos fãs do gênero.',
    autores: ['Raphael Montes'],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Fantasmas do Século XX',
    resumo:
      'Fantasmas do Século XX é um livro de contos de terror e suspense escrito por Braulio Tavares. As histórias exploram temas como assombrações, seres sobrenaturais e mistérios inexplicáveis. Com uma escrita envolvente e atmosferas sombrias, o autor cria um universo macabro que cativa os amantes do gênero.',
    autores: ['Braulio Tavares'],
  },
  {
    codigo: 4,
    codEditora: 4,
    titulo: 'A Menina Submersa: Memórias',
    resumo:
      'A Menina Submersa: Memórias é um romance de terror escrito por Caitlín R. Kiernan. A história é narrada por India Morgan Phelps, uma mulher que sofre de esquizofrenia e vive em um mundo de delírios e alucinações. O livro mescla elementos de horror, fantasia e mistério, explorando temas como a mente humana e o poder da imaginação.',
    autores: ['Caitlín R. Kiernan'],
  },
];

export default class ControleLivro {
  incluir(livro: Livro) {
    const livroExistente = livros.find(l => l.titulo === livro.titulo);
    if (livroExistente) {
      throw new Error(`Já existe um livro com o título "${livro.titulo}"`);
    }
    livro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index === -1) {
      throw new Error(`Livro com código ${codigo} não encontrado`);
    }
    livros.splice(index, 1);
  }

  obterLivros() {
    return livros.slice();
  }
}